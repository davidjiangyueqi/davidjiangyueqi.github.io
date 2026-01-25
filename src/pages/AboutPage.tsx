import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bio } from "../data/bio";
import { BioTabs } from "../components/BioTabs";

type Tab = "piano" | "epicure";

function AnimatedBioParagraph({
  paragraph,
  index,
}: {
  paragraph: string;
  index: number;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
        delay: index * 0.2,
      }}
      className="text-center text-base leading-relaxed text-white/95 sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed"
      style={{
        fontFamily:
          '"Iowan Old Style", "Cormorant Garamond", Georgia, serif',
        letterSpacing: "0.02em",
      }}
    >
      {paragraph}
    </motion.p>
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
        className="mx-auto max-w-2xl"
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
        className="glass-panel relative overflow-hidden rounded-3xl p-8 sm:p-12 md:p-16"
      >
        <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-black/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
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
              className="space-y-8 sm:space-y-12"
            >
              {currentContent.map((paragraph, idx) => (
                <AnimatedBioParagraph
                  key={idx}
                  paragraph={paragraph}
                  index={idx}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>
    </div>
  );
}


