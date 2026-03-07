import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { HeroHeader } from "../components/HeroHeader";
import { mediaPhotos, Photo } from "../data/media";

export function MediaPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const shuffledPhotos = useMemo(() => {
    return [...mediaPhotos].sort(() => Math.random() - 0.5);
  }, []);

  return (
    <div className="space-y-16 pb-12">
      <HeroHeader
        title="media"
        subtitle="Moments &bull; Visions &bull; Diaries"
      />

      {/* Masonry Grid */}
      <motion.div
        className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.05,
            },
          },
        }}
      >
        {shuffledPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              className="break-inside-avoid relative"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ scale: 1.1, zIndex: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <figure
                className="relative cursor-pointer overflow-hidden rounded-2xl border border-slate-800/80 bg-black/80 shadow-lg transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] hover:border-slate-500/50"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </figure>
            </motion.div>
          ))}
      </motion.div>

      {/* Lightbox / Immersive View */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute right-6 top-6 z-50 rounded-full bg-white/10 p-2 text-white/70 backdrop-blur-md transition-colors hover:bg-white/20 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhoto(null);
              }}
              title="Close"
            >
              <X size={24} />
            </button>
            <motion.img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-h-[90vh] max-w-full rounded-md object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
