import { Route, Routes, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { PageShell } from "./components/PageShell";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { MusicPage } from "./pages/MusicPage";
import { FoodPage } from "./pages/FoodPage";
import { FoodDetailPage } from "./pages/FoodDetailPage";
import { MediaPage } from "./pages/MediaPage";
import { ContactPage } from "./pages/ContactPage";

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

export default function App() {
  const location = useLocation();

  return (
    <PageShell>
      <motion.main
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="min-h-[70vh]"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/food/:restaurantSlug" element={<FoodDetailPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </motion.main>
    </PageShell>
  );
}


