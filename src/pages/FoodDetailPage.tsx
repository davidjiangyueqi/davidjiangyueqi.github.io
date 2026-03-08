import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronDown, Loader2 } from "lucide-react";
import { restaurantReviews } from "../data/reviews";
import { useState, useEffect, useRef } from "react";

// react-pdf setup
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure worker using the local file we copy in our vite plugin
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

// --- Main Page Component ---

export function FoodDetailPage() {
  const { restaurantSlug } = useParams<{ restaurantSlug: string }>();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // State for Presentation
  const [currentSlide, setCurrentSlide] = useState(0);
  const [numPages, setNumPages] = useState<number>();
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  const review = restaurantReviews.find(
    (r) => r.restaurantSlug === restaurantSlug
  );

  // Monitor resize to pass fresh width to react-pdf Page element to keep it full bleed
  useEffect(() => {
    const handleResize = () => setContainerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Monitor scroll for progress indicator
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollTop, clientHeight } = containerRef.current;
      const slideIndex = Math.round(scrollTop / clientHeight);
      setCurrentSlide(slideIndex);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  if (!review) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <p className="text-slate-400">Review not found</p>
      </div>
    );
  }

  const backgroundColor = review.backgroundColor || "#0f172a";

  const totalSlides = review.pdfPath 
    ? numPages || 0 
    : (review.slides ? review.slides.length : review.images?.length || 0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div
      className="fixed inset-0 z-40 bg-black font-sans selection:bg-[#d8c39e]/30"
      style={{ backgroundColor }}
    >
      {/* Floating back button */}
      <motion.button
        onClick={() => navigate(-1)}
        className="fixed left-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md transition-all hover:border-white/40 hover:bg-black/80 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        aria-label="Go back to previous page"
      >
        <ArrowLeft className="h-5 w-5 text-white/90" />
      </motion.button>

      {/* Progress Indicator */}
      <div className="fixed right-8 top-1/2 z-50 hidden flex-col gap-2 md:flex -translate-y-1/2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? "bg-[#d8c39e] ring-2 ring-[#d8c39e]/50 ring-offset-2 ring-offset-black"
                : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Hint */}
      <AnimatePresence>
        {currentSlide === 0 && totalSlides > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 animate-pulse flex-col items-center gap-2 text-white/50"
          >
            <span className="text-xs uppercase tracking-widest drop-shadow-md">Scroll</span>
            <ChevronDown className="h-5 w-5 drop-shadow-md" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Snap Scrolling Container */}
      <div
        ref={containerRef}
        className="h-screen w-full snap-y snap-mandatory overflow-y-auto scroll-smooth hide-scrollbar"
        style={{
           // Hide standard scrollbar completely as we have our own visual indicators
           msOverflowStyle: 'none',
           scrollbarWidth: 'none',
        }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}} />

        {/* 1. NATIVE PDF RENDERER (New Architecture) */}
        {review.pdfPath ? (
          <Document
            file={review.pdfPath}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex h-screen w-full items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-white/40" />
              </div>
            }
            className="flex flex-col items-center"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <section
                key={`page_${index + 1}`}
                className="flex h-screen w-full snap-center snap-always items-center justify-center overflow-hidden"
              >
                <div className="flex items-center justify-center w-full h-full shadow-2xl transition hover:scale-[1.01] duration-500 ease-out">
                  <Page
                    pageNumber={index + 1}
                    width={containerWidth}
                    renderTextLayer={true}
                    renderAnnotationLayer={false}
                    className="max-h-screen object-contain drop-shadow-2xl"
                  />
                </div>
              </section>
            ))}
          </Document>
        ) : (
          // 2. LEGACY IMAGE RENDERER (Fallback)
          review.images?.map((imageSrc, imageIndex) => (
            <section
              key={imageIndex}
              className="flex h-screen w-full snap-center snap-always items-center justify-center p-4 md:p-12"
            >
              <img
                src={imageSrc}
                alt={`Review page ${imageIndex + 1}`}
                className="max-h-full max-w-full object-contain drop-shadow-2xl"
                loading="lazy"
              />
            </section>
          ))
        )}
      </div>
    </div>
  );
}


