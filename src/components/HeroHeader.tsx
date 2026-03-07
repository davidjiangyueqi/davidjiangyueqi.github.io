import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

type HeroHeaderProps = {
  title: string;
  subtitle: string;
  description?: string;
};

export function HeroHeader({ title, subtitle, description }: HeroHeaderProps) {
  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="mb-16 text-center"
    >
      <h1 
        className="text-6xl font-light lowercase tracking-[0.2em] sm:text-7xl md:text-8xl"
        style={{ fontFamily: '"Cormorant Garamond", "Iowan Old Style", Georgia, serif' }}
      >
        {title}
      </h1>
      <p className="mx-auto mt-8 max-w-2xl text-sm uppercase tracking-[0.3em] text-slate-400">
        <span dangerouslySetInnerHTML={{ __html: subtitle }} />
      </p>
      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-sm text-slate-300 sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </motion.header>
  );
}
