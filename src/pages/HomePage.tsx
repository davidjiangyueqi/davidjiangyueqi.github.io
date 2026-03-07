import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { LIVE_STREAM } from "../data/live";

type Photo = {
  id: string;
  alt: string;
  src: string;
  title: string;
  subtitle: string;
};

function ImageSection({ photo }: { photo: Photo }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-black"
      style={{
        width: "100vw",
        height: "100vh",
        marginLeft: "calc(-50vw + 50%)",
        position: "relative",
      }}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="h-full w-full object-cover"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Text Overlay - Kiln SF style */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2,
          }}
          className="text-center"
        >
          {/* Small label for the main hero image */}
          {photo.id === "piano-1" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.25,
              }}
              className="mb-4 text-xs uppercase tracking-[0.35em] text-slate-300/90"
            >
              Pianist &amp; Gastronomist
            </motion.p>
          )}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.4,
            }}
            className="text-5xl font-light lowercase tracking-[0.15em] text-white sm:text-6xl md:text-7xl"
            style={{
              fontFamily: '"Cormorant Garamond", "Iowan Old Style", Georgia, serif',
              letterSpacing: "0.15em",
              whiteSpace: "pre-wrap",
            }}
          >
            {photo.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.6,
            }}
            className="mt-4 text-sm font-light lowercase tracking-[0.2em] text-white/90 sm:text-base"
            style={{
              fontFamily: '"Cormorant Garamond", "Iowan Old Style", Georgia, serif',
              letterSpacing: "0.2em",
            }}
          >
            {photo.subtitle}
          </motion.p>

          {/* Extra copy + links for the main hero image */}
          {photo.id === "piano-1" && (
            <>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: 1,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.8,
                }}
                className="mt-6 max-w-xl text-sm text-slate-100/90 sm:text-base"
              >
                A portfolio for a life split between the piano and the plate — concerts,
                recordings, restaurant criticism, and the spaces where they overlap.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: 1,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 1.0,
                }}
                className="mt-3 max-w-xl text-sm text-slate-200/90 sm:text-base"
              >
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{
                  duration: 1,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 1.2,
                }}
                className="mt-6 flex flex-wrap justify-center gap-3 text-sm"
              >
                <Link
                  to="/about"
                  className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-white/90 transition hover:bg-white/20 hover:border-white/30"
                >
                  About Me
                </Link>
                <Link
                  to="/food"
                  className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-white/90 transition hover:bg-white/20 hover:border-white/30"
                >
                  Read My Culinary Journeys
                </Link>
              </motion.div>
            </>
          )}

          {/* Call-to-action for the performances image */}
          {photo.id === "piano-2" && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.9,
              }}
              className="mt-6 flex justify-center text-sm"
            >
              <Link
                to="/music"
                className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-white/90 transition hover:bg-white/20 hover:border-white/30"
              >
                Explore My Music
              </Link>
            </motion.div>
          )}

          {/* Call-to-action for the food image */}
          {photo.id === "food-1" && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.9,
              }}
              className="mt-6 flex justify-center text-sm"
            >
              <Link
                to="/food"
                className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-white/90 transition hover:bg-white/20 hover:border-white/30"
              >
                Explore My Culinary Journeys
              </Link>
            </motion.div>
          )}

          {/* Call-to-action for the contact image */}
          {photo.id === "piano-3" && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.9,
              }}
              className="mt-6 flex justify-center text-sm"
            >
              <Link
                to="/contact"
                className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-white/90 transition hover:bg-white/20 hover:border-white/30"
              >
                CONNECT WITH ME
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export function HomePage() {
  const photos = [
    {
      id: "piano-1",
      alt: "Piano performance",
      src: "/photos/piano/hori_black_white_fuzzy.JPG",
      title: "David Shaw",
      subtitle: "Music at the keyboard, stories at the table.",
    },
    {
      id: "piano-2",
      alt: "Piano performance",
      src: "/photos/piano/hori_bio.JPG",
      title: "performances",
      subtitle: "music in motion",
    },
    {
      id: "food-1",
      alt: "Food and wine",
      src: "/photos/food-wine/Kiln1.jpg",
      title: "culinary journeys",
      subtitle: "stories at the table",
    },
    {
      id: "piano-3",
      alt: "Piano hands",
      src: "/photos/piano/hori_hands.JPG",
      title: "Connect",
      subtitle: "Work with me",
    },
  ];

  return (
    <div className="relative">
      {LIVE_STREAM.isActive && (
        <div className="fixed bottom-8 right-8 z-50 animate-fade-in-up">
          <Link
            to="/music"
            className="flex items-center gap-2 rounded-full bg-red-600/90 backdrop-blur-md px-5 py-3 text-sm font-bold tracking-wider text-white shadow-2xl transition-all hover:bg-red-500 hover:scale-105 hover:shadow-red-500/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-100"></span>
            </span>
            LIVE NOW
          </Link>
        </div>
      )}
      {/* Full-screen images stacked vertically, scroll with page */}
      <div className="relative flex flex-col">
        {photos.map((photo) => (
          <ImageSection key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}


