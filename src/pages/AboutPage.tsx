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
  isLandscape?: boolean;
}

const pianoImages: BioImage[] = [
  {
    src: "/photos/piano/vert_bio1.JPG",
    alt: "David Shaw at the piano",
    float: "right",
    width: "w-64 sm:w-72 md:w-80 lg:w-96",
    paragraphIndex: 0,
    isLandscape: false,
  },
  {
    src: "/photos/piano/hori_bio.JPG",
    alt: "David Shaw performing",
    float: "left",
    width: "w-80 sm:w-96 md:w-[28rem] lg:w-[32rem]",
    paragraphIndex: 1,
    isLandscape: true,
  },
  {
    src: "/photos/piano/hori_hands.JPG",
    alt: "Piano hands",
    float: "right",
    width: "w-80 sm:w-96 md:w-[28rem] lg:w-[32rem]",
    paragraphIndex: 2,
    isLandscape: true,
  },
  {
    src: "/photos/piano/hori_bio1_mask.JPG",
    alt: "Piano performance",
    float: "left",
    width: "w-80 sm:w-96 md:w-[28rem] lg:w-[32rem]",
    paragraphIndex: 3,
    isLandscape: true,
  },
  {
    src: "/photos/piano/hori_black_white_fuzzy.JPG",
    alt: "Concert performance",
    float: "right",
    width: "w-80 sm:w-96 md:w-[28rem] lg:w-[32rem]",
    paragraphIndex: 4,
    isLandscape: true,
  },
];

const epicureImages: BioImage[] = [
  {
    src: "/photos/my_dishes/vert_2_CHAWANMUSHI.jpg",
    alt: "Chawanmushi dish",
    float: "left",
    width: "w-64 sm:w-72 md:w-80 lg:w-96",
    paragraphIndex: 0,
    isLandscape: false,
  },
  {
    src: "/photos/food-wine/Atomix.jpg",
    alt: "Atomix restaurant",
    float: "right",
    width: "w-80 sm:w-96 md:w-[28rem] lg:w-[32rem]",
    paragraphIndex: 1,
    isLandscape: true,
  },
  {
    src: "/photos/food-wine/The Modern.jpg",
    alt: "The Modern restaurant",
    float: "left",
    width: "w-80 sm:w-96 md:w-[28rem] lg:w-[32rem]",
    paragraphIndex: 1,
    isLandscape: true,
  },
  {
    src: "/photos/my_dishes/vert_3_lobster.jpg",
    alt: "Lobster dish",
    float: "right",
    width: "w-64 sm:w-72 md:w-80 lg:w-96",
    paragraphIndex: 2,
    isLandscape: false,
  },
  {
    src: "/photos/food-wine/Sushi2.jpg",
    alt: "Sushi",
    float: "left",
    width: "w-80 sm:w-96 md:w-[28rem] lg:w-[32rem]",
    paragraphIndex: 2,
    isLandscape: true,
  },
  {
    src: "/photos/my_dishes/vert_4_pear.jpg",
    alt: "Pear dish",
    float: "right",
    width: "w-64 sm:w-72 md:w-80 lg:w-96",
    paragraphIndex: 3,
    isLandscape: false,
  },
  {
    src: "/photos/food-wine/Amber.JPG",
    alt: "Amber restaurant",
    float: "left",
    width: "w-80 sm:w-96 md:w-[28rem] lg:w-[32rem]",
    paragraphIndex: 3,
    isLandscape: true,
  },
  {
    src: "/photos/food-wine/krug_collection_1985.jpg",
    alt: "Krug Collection 1985",
    float: "right",
    width: "w-80 sm:w-96 md:w-[28rem] lg:w-[32rem]",
    paragraphIndex: 4,
    isLandscape: true,
  },
  {
    src: "/photos/my_dishes/hori_2_oyster.jpg",
    alt: "Oyster dish",
    float: "left",
    width: "w-80 sm:w-96 md:w-[28rem] lg:w-[32rem]",
    paragraphIndex: 4,
    isLandscape: true,
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
      className={`${image.width} mb-4 rounded-lg object-cover shadow-lg sm:mb-6 ${
        image.float === "left"
          ? "float-none sm:float-left sm:mr-8"
          : "float-none sm:float-right sm:ml-8"
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


