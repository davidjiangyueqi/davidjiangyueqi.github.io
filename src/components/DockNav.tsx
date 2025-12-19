import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Music2, Info, UtensilsCrossed, Film, Mail, Home } from "lucide-react";

const ITEMS = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/music", label: "Music", icon: Music2 },
  { to: "/food", label: "Food", icon: UtensilsCrossed },
  { to: "/media", label: "Media", icon: Film },
  { to: "/contact", label: "Contact", icon: Mail },
];

const IDLE_TIMEOUT = 2200;

export function DockNav() {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [isNearBottom, setIsNearBottom] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const viewportHeight = window.innerHeight || 1;
      const threshold = viewportHeight * 0.8;
      setIsNearBottom(e.clientY >= threshold);
      setVisible(true);
    };

    let idleTimer: number | null = null;

    const resetIdleTimer = () => {
      if (idleTimer) {
        window.clearTimeout(idleTimer);
      }
      idleTimer = window.setTimeout(() => {
        setVisible(false);
      }, IDLE_TIMEOUT);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", resetIdleTimer);
    resetIdleTimer();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", resetIdleTimer);
      if (idleTimer) {
        window.clearTimeout(idleTimer);
      }
    };
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const shouldShow = isMobile || (visible && isNearBottom);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 sm:bottom-6">
      <AnimatePresence>
        {shouldShow && (
          <motion.nav
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="pointer-events-auto glass-panel flex items-end gap-3 rounded-3xl px-4 py-2 shadow-soft-xl"
          >
            {ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.to || (item.to !== "/" && location.pathname.startsWith(item.to));
              return (
                <motion.div
                  key={item.to}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="group flex flex-col items-center"
                >
                  <Link
                    to={item.to}
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-colors ${
                      isActive
                        ? "border-brand-500/80 bg-brand-500/20"
                        : "border-slate-700/60 bg-slate-900/60 hover:border-slate-400/80"
                    }`}
                  >
                    <Icon className="h-5 w-5 text-slate-100" />
                  </Link>
                  <motion.span
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 2 }}
                    className="mt-1 text-[0.7rem] text-slate-200/80"
                  >
                    {item.label}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="dock-active-indicator"
                      className="mt-1 h-1 w-1 rounded-full bg-brand-400"
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}


