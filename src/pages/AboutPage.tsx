import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { bio } from "../data/bio";

function AnimatedBioParagraph({
  paragraph,
  index,
}: {
  paragraph: string;
  index: number;
}) {
  const paragraphRef = useRef(null);
  const paragraphInView = useInView(paragraphRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <motion.p
      ref={paragraphRef}
      initial={{ opacity: 0, y: 20 }}
      animate={paragraphInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
  const bioSectionRef = useRef(null);
  const bioInView = useInView(bioSectionRef, { once: true, amount: 0.3 });

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

      {/* Poetic Bio Section */}
      <motion.section
        ref={bioSectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={bioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.6,
        }}
        className="glass-panel relative overflow-hidden rounded-3xl p-8 sm:p-12 md:p-16"
      >
        <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-black/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
          <div className="space-y-8 sm:space-y-12">
            {bio.long.map((paragraph, idx) => (
              <AnimatedBioParagraph
                key={idx}
                paragraph={paragraph}
                index={idx}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}


