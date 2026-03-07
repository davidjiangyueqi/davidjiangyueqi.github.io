import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bio } from "../data/bio";
import { BioTabs } from "../components/BioTabs";
import { HeroHeader } from "../components/HeroHeader";

type Tab = "piano" | "epicure";

interface BioImage {
  src: string;
  alt: string;
  float: "left" | "right";
  width: string;
  paragraphIndex: number;
  isLandscape?: boolean;
  caption?: string;
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
    src: "/photos/food-wine/The Modern.jpg",
    alt: "The Modern",
    float: "right",
    width: "w-80 sm:w-96 md:w-[28rem] lg:w-[32rem]",
    paragraphIndex: 1,
    isLandscape: true,
    caption: "The Modern | New York ©David Shaw",
  },
  {
    src: "/photos/food-wine/Atomix.jpg",
    alt: "Atomix",
    float: "left",
    width: "w-80 sm:w-96 md:w-[28rem] lg:w-[32rem]",
    paragraphIndex: 1,
    isLandscape: true,
    caption: "Atomix | New York ©David Shaw",
  },
  {
    src: "/photos/food-wine/Sushi2.jpg",
    alt: "Shoku-Tei Sushi",
    float: "right",
    width: "w-80 sm:w-96 md:w-[28rem] lg:w-[32rem]",
    paragraphIndex: 2,
    isLandscape: true,
    caption: "Shoku-Tei Sushi | Shenzhen ©David Shaw",
  },
  {
    src: "/photos/food-wine/Kiln1.jpg",
    alt: "Kiln",
    float: "right",
    width: "w-80 sm:w-96 md:w-[28rem] lg:w-[32rem]",
    paragraphIndex: 3,
    isLandscape: true,
    caption: "Kiln | San Francisco ©David Shaw",
  },
  {
    src: "/photos/food-wine/clodelaroche.jpg",
    alt: "BYOB Wine at The Modern",
    float: "left",
    width: "w-80 sm:w-96 md:w-[28rem] lg:w-[32rem]",
    paragraphIndex: 4,
    isLandscape: true,
    caption: "BYOB Wine at The Modern | New York ©David Shaw",
  },
  {
    src: "/photos/food-wine/salon_parantoux.jpg",
    alt: "BYOB Wine at Da Vittorio",
    float: "right",
    width: "w-80 sm:w-96 md:w-[28rem] lg:w-[32rem]",
    paragraphIndex: 4,
    isLandscape: true,
    caption: "BYOB Wine at Da Vittorio | Shanghai ©David Shaw",
  },
];

function BioImageComponent({ image }: { image: BioImage }) {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`${image.width} mb-4 sm:mb-6 ${
        image.float === "left"
          ? "float-none sm:float-left sm:mr-8"
          : "float-none sm:float-right sm:ml-8"
      }`}
      style={{
        shapeOutside: "margin-box",
      }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-auto rounded-lg object-cover shadow-lg"
      />
      {image.caption && (
        <figcaption
          className="mt-3 text-sm italic text-slate-400/90 text-center"
          style={{
            fontFamily:
              '"Iowan Old Style", "Cormorant Garamond", Georgia, serif',
            letterSpacing: "0.02em",
          }}
        >
          {image.caption}
        </figcaption>
      )}
    </motion.figure>
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
      <HeroHeader 
        title={bio.name || "david shaw"}
        subtitle="Pianist & Gastronomist"
        description={bio.short}
      />

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


