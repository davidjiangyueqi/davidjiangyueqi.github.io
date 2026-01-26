import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bio } from "../data/bio";
import { BioTabs } from "../components/BioTabs";

type Tab = "piano" | "epicure";

interface BioImage {
  src: string;
  alt: string;
  float: "left" | "right";
  width: string;
  paragraphIndex: number;
}

const pianoImages: BioImage[] = [
  {
    src: "/photos/piano/vert_bio1.JPG",
    alt: "David Shaw at the piano",
    float: "right",
    width: "w-56 sm:w-64 md:w-72",
    paragraphIndex: 0,
  },
  {
    src: "/photos/piano/hori_hands.JPG",
    alt: "Piano hands",
    float: "left",
    width: "w-56 sm:w-64 md:w-72",
    paragraphIndex: 2,
  },
];

const epicureImages: BioImage[] = [
  {
    src: "/photos/my_dishes/vert_2_CHAWANMUSHI.jpg",
    alt: "Chawanmushi dish",
    float: "left",
    width: "w-48 sm:w-56 md:w-64",
    paragraphIndex: 0,
  },
  {
    src: "/photos/food-wine/Atomix.jpg",
    alt: "Atomix restaurant",
    float: "right",
    width: "w-56 sm:w-64 md:w-72",
    paragraphIndex: 1,
  },
  {
    src: "/photos/food-wine/Kiln1.jpg",
    alt: "Kiln restaurant",
    float: "left",
    width: "w-56 sm:w-64 md:w-72",
    paragraphIndex: 2,
  },
  {
    src: "/photos/my_dishes/vert_4_pear.jpg",
    alt: "Pear dish",
    float: "right",
    width: "w-48 sm:w-56 md:w-64",
    paragraphIndex: 3,
  },
];

function BioImageComponent({ image }: { image: BioImage }) {
  return (
    <motion.img
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      src={image.src}
      alt={image.alt}
      className={`${image.width} mb-4 rounded-lg object-cover shadow-lg sm:mb-4 ${
        image.float === "left"
          ? "float-none sm:float-left sm:mr-6"
          : "float-none sm:float-right sm:ml-6"
      }`}
      style={{
        shapeOutside: "margin-box",
      }}
    />
  );
}

function AnimatedBioParagraph({
  paragraph,
  index,
  images,
}: {
  paragraph: string;
  index: number;
  images: BioImage[];
}) {
  const paragraphImages = images.filter((img) => img.paragraphIndex === index);

  return (
    <div className="clear-both">
      {paragraphImages.map((image, imgIdx) => (
        <BioImageComponent key={imgIdx} image={image} />
      ))}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1],
          delay: index * 0.2,
        }}
        className="text-left text-base leading-relaxed text-white/95 sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed"
        style={{
          fontFamily:
            '"Iowan Old Style", "Cormorant Garamond", Georgia, serif',
          letterSpacing: "0.02em",
        }}
      >
        {paragraph}
      </motion.p>
    </div>
  );
}

export function AboutPage() {
  const [activeTab, setActiveTab] = useState<Tab>("piano");

  const currentContent = activeTab === "piano" ? bio.piano : bio.epicure;

  return (
    <div className="space-y-12">
      {/* Animated Hero Header */}
      <header className="mb-10 space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0,
          }}
          className="text-xs uppercase tracking-[0.3em] text-slate-400"
        >
          Pianist &amp; Gastronomist
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2,
          }}
          className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl"
        >
          {bio.name || "Pianist & Gastronomist"}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.4,
          }}
          className="max-w-2xl text-sm text-slate-300 sm:text-base"
        >
          {bio.short}
        </motion.p>
      </header>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.6,
        }}
        className="mx-auto max-w-4xl"
      >
        <BioTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </motion.div>

      {/* Bio Content Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.8,
        }}
        className="relative mx-auto max-w-4xl"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="space-y-8 sm:space-y-10 md:space-y-12"
          >
            {currentContent.map((paragraph, idx) => (
              <AnimatedBioParagraph
                key={idx}
                paragraph={paragraph}
                index={idx}
                images={activeTab === "piano" ? pianoImages : epicureImages}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.section>
    </div>
  );
}


