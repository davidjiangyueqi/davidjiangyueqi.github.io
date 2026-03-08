import { motion } from "framer-motion";
import { awards } from "../data/awards";
import { selectedPastPerformances, upcomingPerformances } from "../data/performances";
import { LIVE_STREAM } from "../data/live";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

export function MusicPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        
        {/* Artistic Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-32 text-center"
        >
          <h1 
            className="text-6xl font-light lowercase tracking-[0.2em] sm:text-7xl md:text-8xl"
            style={{ fontFamily: '"Cormorant Garamond", "Iowan Old Style", Georgia, serif' }}
          >
            music
          </h1>
          <p className="mt-8 text-sm uppercase tracking-[0.3em] text-slate-400">
            Stages &bull; Echoes &bull; Honors
          </p>
        </motion.div>

        {/* Cinematic Live Stream Section */}
        {LIVE_STREAM.isActive && (
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative mb-32 group"
          >
            {/* Ambient Glow */}
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-red-900/30 via-red-950/20 to-transparent opacity-50 blur-xl transition duration-1000 group-hover:opacity-100"></div>
            
            <div className="relative rounded-3xl border border-red-900/30 bg-black/40 p-1 backdrop-blur-sm">
              <div className="flex flex-col items-center p-8 text-center pb-12">
                <div className="mb-6 flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400">Happening Now</span>
                </div>
                <h2 
                  className="mb-4 text-3xl font-light tracking-[0.05em] sm:text-4xl"
                  style={{ fontFamily: '"Cormorant Garamond", "Iowan Old Style", Georgia, serif' }}
                >
                  {LIVE_STREAM.title}
                </h2>
                <p className="max-w-md text-xs tracking-widest text-slate-400 leading-relaxed uppercase">
                  {LIVE_STREAM.description}
                </p>
              </div>
              <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black border border-white/5">
                <iframe
                  className="h-full w-full"
                  src={LIVE_STREAM.youtubeUrl}
                  title={LIVE_STREAM.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.section>
        )}

        {/* ON STAGE - Upcoming Performances */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-32"
        >
          <h2 className="mb-12 text-xs uppercase tracking-[0.4em] text-slate-500">On Stage</h2>
          <div className="border-t border-white/10">
            {upcomingPerformances.map((perf, i) => (
              <div 
                key={`${perf.date}-${perf.venue}`}
                className="group flex flex-col border-b border-white/10 py-8 transition-colors hover:bg-white/[0.02] sm:flex-row sm:items-center sm:justify-between px-4 sm:px-8"
              >
                <div className="mb-4 sm:mb-0">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{perf.date}</p>
                  <p 
                    className="mt-2 text-2xl font-light tracking-[0.05em] text-slate-100"
                    style={{ fontFamily: '"Cormorant Garamond", "Iowan Old Style", Georgia, serif' }}
                  >
                    {perf.venue}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-sm tracking-widest text-slate-300 uppercase">{perf.city}</p>
                  {perf.program && <p className="mt-1 text-xs tracking-wider text-slate-500">{perf.program}</p>}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* RECENTLY - Past Performances */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-32"
        >
          <h2 className="mb-16 text-center text-xs uppercase tracking-[0.4em] text-slate-500">Recently</h2>
          <div className="space-y-32">
            {selectedPastPerformances.map((perf, i) => (
              <div key={`${perf.date}-${perf.venue}`} className="group flex flex-col relative">
                {perf.photo && (
                  <div className="relative w-full flex justify-center mb-8 pointer-events-none opacity-80 mix-blend-screen grayscale-[20%]">
                    <img 
                      src={perf.photo} 
                      alt={perf.venue} 
                      className="max-h-[450px] w-auto object-contain"
                      loading="lazy"
                      style={{ 
                        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)', 
                        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)' 
                      }}
                    />
                  </div>
                )}

                <div className="grid gap-12 lg:grid-cols-12 lg:gap-24 relative z-20">
                  {/* Left Column: Essential Info & Link */}
                  <div className="lg:col-span-5 flex flex-col">
                    <div>
                      <h3 
                        className="text-3xl font-light tracking-wide text-white lg:text-4xl"
                        style={{ fontFamily: '"Cormorant Garamond", "Iowan Old Style", Georgia, serif' }}
                      >
                        {perf.venue}
                      </h3>
                      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">
                        {perf.date} &mdash; {perf.city}
                      </p>
                    </div>
                    
                    {perf.link && (
                      <div className="mt-8 lg:mt-auto">
                        <a 
                          href={perf.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-slate-300 transition-colors hover:text-white"
                        >
                          <span className="relative overflow-hidden">
                            Watch Performance
                            <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group/link:scale-x-100"></span>
                          </span>
                          <svg className="h-4 w-4 transform transition-transform duration-500 group/link:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Elaborate Details & Notes */}
                  <div className="lg:col-span-7">
                    {perf.program && (
                      <p className="mb-8 text-sm uppercase tracking-[0.15em] text-slate-200 border-l border-white/20 pl-6">
                        {perf.program}
                      </p>
                    )}
                    {perf.note && (
                      <p 
                        className="text-lg leading-loose text-slate-400 font-light whitespace-pre-wrap"
                        style={{ fontFamily: '"Cormorant Garamond", "Iowan Old Style", Georgia, serif' }}
                      >
                        {perf.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* HONORS - Awards (Redesigned) */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="mb-16 text-center text-xs uppercase tracking-[0.4em] text-slate-500 border-b border-white/10 pb-8">Honors</h2>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-16">
            {awards.map((award) => (
              <div 
                key={`${award.year}-${award.title}`}
                className="group relative flex flex-col items-center text-center w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]"
              >
                <span className="mb-4 text-xs tracking-widest text-slate-500">{award.year}</span>
                <p 
                  className="mb-2 text-xl font-light tracking-[0.05em] text-white"
                  style={{ fontFamily: '"Cormorant Garamond", "Iowan Old Style", Georgia, serif' }}
                >
                  {award.title}
                </p>
                <div className="mx-auto h-[1px] w-8 bg-white/20 transition-all duration-500 group-hover:w-16 group-hover:bg-white/60"></div>
                <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  {award.organization}
                  {award.location && <><br/>{award.location}</>}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}


