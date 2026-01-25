import { motion } from "framer-motion";

type Tab = "piano" | "epicure";

interface BioTabsProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function BioTabs({ activeTab, onTabChange }: BioTabsProps) {
  return (
    <div className="glass-panel rounded-3xl p-2">
      <div className="relative flex gap-2">
        {/* Active tab indicator */}
        <motion.div
          layoutId="activeTab"
          className="absolute inset-y-2 rounded-2xl border border-white/30 bg-white/10"
          initial={false}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          style={{
            width: "calc(50% - 4px)",
            left: activeTab === "piano" ? "4px" : "calc(50% + 4px)",
          }}
        />
        
        {/* Piano Tab */}
        <button
          onClick={() => onTabChange("piano")}
          className={`relative z-10 flex-1 rounded-2xl px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === "piano"
              ? "text-white"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          Piano
        </button>
        
        {/* Epicure Tab */}
        <button
          onClick={() => onTabChange("epicure")}
          className={`relative z-10 flex-1 rounded-2xl px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === "epicure"
              ? "text-white"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          Epicure
        </button>
      </div>
    </div>
  );
}
