import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, ArrowUpRight, Sparkles } from "lucide-react";
import { HeroHeader } from "../components/HeroHeader";

export function ContactPage() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const links = [
    {
      id: "instagram",
      label: "Instagram",
      value: "Follow on Instagram",
      href: "https://instagram.com/davidshaw99527",
      icon: Instagram,
      color: "from-pink-500 via-purple-500 to-indigo-500"
    },
    {
      id: "email",
      label: "Email",
      value: "Send an Email",
      href: "mailto:example@example.com",
      icon: Mail,
      color: "from-blue-500 via-cyan-500 to-teal-500"
    }
  ];

  return (
    <div className="relative min-h-[80vh] space-y-16 pb-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-purple-500/10 to-transparent blur-[120px]" />
      
      { hoveredLink === 'instagram' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-transparent transition-opacity duration-1000"
        />
      )}
      { hoveredLink === 'email' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-transparent transition-opacity duration-1000"
        />
      )}

      <HeroHeader
        title="contact"
        subtitle="Connect &bull; Inquire &bull; Collaborate"
      />

      <div className="container mx-auto max-w-5xl px-4">
        <motion.div 
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {links.map((link) => {
            const Icon = link.icon;
            const isHovered = hoveredLink === link.id;

            return (
              <motion.a
                key={link.id}
                href={link.href}
                target={link.id === 'instagram' ? "_blank" : undefined}
                rel={link.id === 'instagram' ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink(null)}
                className="group relative block overflow-hidden rounded-3xl bg-white/[0.02] border border-white/[0.05] p-10 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.1] hover:scale-[1.02]"
              >
                {/* Glowing orb background effect on hover */}
                <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${link.color} opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-20`} />
                
                <div className="relative z-10 flex flex-col h-full justify-between min-h-[200px]">
                  <div className="flex justify-between items-start">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white/70 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:text-white">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/0 text-white/0 transition-all duration-500 group-hover:bg-white/10 group-hover:text-white/90 group-hover:-rotate-12">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <div className="mt-12">
                    <div className="flex items-center gap-3">
                      <p className="text-2xl sm:text-3xl font-light tracking-tight text-white/90 transition-colors duration-300 group-hover:text-white break-all">
                        {link.label}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Animated bottom border line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/5">
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${link.color}`}
                    initial={{ width: "0%" }}
                    animate={{ width: isHovered ? "100%" : "0%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Artistic Footer Message */}
        <motion.div 
          className="mt-32 flex flex-col items-center justify-center space-y-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Sparkles className="h-6 w-6 text-white/20" />
          <p className="max-w-xl text-lg font-light leading-relaxed text-white/40">
            "Art is not what you see, but what you make others see."
            <br />
            <span className="text-sm italic text-white/20 mt-2 block">— Edgar Degas</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

