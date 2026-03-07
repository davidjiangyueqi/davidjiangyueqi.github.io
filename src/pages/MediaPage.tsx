import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { HeroHeader } from "../components/HeroHeader";
import { mediaPhotos, Photo } from "../data/media";

export function MediaPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const categories = [
    { id: "piano", title: "Piano & Studios", description: "Studio sessions and performances" },
    { id: "food-wine", title: "Food & Wine", description: "Memorable dining experiences and rare bottles" },
    { id: "my-dishes", title: "Personal Creations", description: "Dishes I have crafted" },
  ];

  return (
    <div className="space-y-16 pb-12">
      <HeroHeader
        title="Media & images"
        subtitle="A visual diary of gastronomy, music, and moments in between."
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
        {mediaPhotos
          .sort((a, b) => {
            const order = { "piano": 1, "food-wine": 2, "my-dishes": 3, "reviews": 4 };
            return order[a.category] - order[b.category];
          })
          .map((photo) => (
            <motion.div
              key={photo.id}
              className="break-inside-avoid"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
            >
              <figure
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-800/80 bg-black/80"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <figcaption className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 text-xs font-medium text-slate-200 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {photo.alt}
                </figcaption>
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
