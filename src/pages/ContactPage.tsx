import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Twitter, Send } from "lucide-react";
import { HeroHeader } from "../components/HeroHeader";

export function ContactPage() {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-[80vh] space-y-12 pb-12">
      {/* Background ambient glow specific to contact page */}
      <div className="pointer-events-none absolute -top-40 right-10 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-10 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px]" />

      <HeroHeader
        title="contact"
        subtitle="Connect &bull; Inquire &bull; Collaborate"
      />

      <motion.div 
        className="grid gap-8 lg:grid-cols-5 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Contact Info */}
        <motion.div variants={itemVariants} className="space-y-8 lg:col-span-2">
          <div className="glass-panel overflow-hidden rounded-3xl p-8 relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h2 className="text-xl font-semibold tracking-tight text-slate-100 mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-slate-300 ring-1 ring-white/10 group-hover:ring-white/20 transition-all group-hover:bg-white/10 group-hover:text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Email</p>
                  <a href="mailto:hello@example.com" className="text-base text-slate-200 hover:text-white transition-colors">hello@example.com</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-slate-300 ring-1 ring-white/10 group-hover:ring-white/20 transition-all group-hover:bg-white/10 group-hover:text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Location</p>
                  <p className="text-base text-slate-200">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-6">Social</h3>
              <div className="flex space-x-4">
                <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-slate-400 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:text-white hover:ring-white/20 group/icon hover:-translate-y-1">
                  <Instagram size={20} className="transition-transform group-hover/icon:scale-110" />
                </a>
                <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-slate-400 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:text-white hover:ring-white/20 group/icon hover:-translate-y-1">
                  <Twitter size={20} className="transition-transform group-hover/icon:scale-110" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div variants={itemVariants} className="lg:col-span-3">
          <form
            action="https://formspree.io/f/your-endpoint"
            method="POST"
            className="glass-panel relative rounded-3xl p-8 sm:p-10 overflow-hidden shadow-2xl"
          >
            {/* Subtle inner glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-[80px]" />
            
            <div className="space-y-6 relative z-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="ml-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-50 placeholder-slate-600 outline-none ring-0 transition-all hover:border-white/20 focus:border-blue-500/50 focus:bg-white/5 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="ml-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-50 placeholder-slate-600 outline-none ring-0 transition-all hover:border-white/20 focus:border-blue-500/50 focus:bg-white/5 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="ml-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-50 placeholder-slate-600 outline-none ring-0 transition-all hover:border-white/20 focus:border-blue-500/50 focus:bg-white/5 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="ml-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-50 placeholder-slate-600 outline-none ring-0 transition-all hover:border-white/20 focus:border-blue-500/50 focus:bg-white/5 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <p className="text-xs text-slate-500">All fields are required.</p>
                <button
                  type="submit"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message
                    <motion.div
                      animate={{ x: isHovered ? 4 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Send size={16} className="transition-transform" />
                    </motion.div>
                  </span>
                  {/* Hover gradient effect behind text */}
                  <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-100 via-white to-purple-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

