import type { PropsWithChildren } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home } from "lucide-react";
import { motion } from "framer-motion";
import { DockNav } from "./DockNav";

export function PageShell({ children }: PropsWithChildren) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-10 gradient-orbit opacity-70" />
      
      {/* Home button - only show on non-home pages */}
      {!isHomePage && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-6 left-6 z-50"
        >
          <Link
            to="/"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md transition-all hover:bg-black/60 hover:border-white/30"
            aria-label="Go to home page"
          >
            <Home className="h-5 w-5 text-white" />
          </Link>
        </motion.div>
      )}

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        {children}
      </div>
      <DockNav />
    </div>
  );
}


