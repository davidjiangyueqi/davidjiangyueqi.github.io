import { motion } from "framer-motion";

type Tab = "piano" | "epicure";

interface BioTabsProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function BioTabs({ activeTab, onTabChange }: BioTabsProps) {
  return (
    <div className="flex items-center justify-center gap-8 border-b border-white/10 pb-3">
      <button
        onClick={() => onTabChange("piano")}
        className="relative text-sm font-medium transition-colors"
      >
        <span
          className={
            activeTab === "piano"
              ? "text-white"
              : "text-slate-400 hover:text-slate-200"
          }
        >
          Piano
        </span>
        {activeTab === "piano" && (
          <motion.div
            layoutId="activeTab"
            className="absolute -bottom-3 left-0 right-0 h-0.5 bg-white"
            initial={false}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />
        )}
      </button>
      
      <button
        onClick={() => onTabChange("epicure")}
        className="relative text-sm font-medium transition-colors"
      >
        <span
          className={
            activeTab === "epicure"
              ? "text-white"
              : "text-slate-400 hover:text-slate-200"
          }
        >
          Epicure
        </span>
        {activeTab === "epicure" && (
          <motion.div
            layoutId="activeTab"
            className="absolute -bottom-3 left-0 right-0 h-0.5 bg-white"
            initial={false}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />
        )}
      </button>
    </div>
  );
}
