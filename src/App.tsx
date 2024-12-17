import { Routes, Route, useLocation } from "react-router-dom";

import { ReactLenis } from "@studio-freight/react-lenis";
import { AnimatePresence } from "framer-motion";

import AboutSection from "./layout/AboutSection";
import BrowSection from "./layout/BrowSection";
import ContactSection from "./layout/ContactSection";
import LashSection from "./layout/LashSection";
import MainSection from "./layout/MainSection";
import PiercSection from "./layout/PiercSection";
import PriceListSection from "./layout/PriceListSection";
import WorkSection from "./layout/WorkSection";

function App() {
  const location = useLocation();

  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        duration: 2,
      }}
    >
      <div className="h-screen">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<MainSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/work" element={<WorkSection />} />
            <Route path="/brows" element={<BrowSection />} />
            <Route path="/piercings" element={<PiercSection />} />
            <Route path="/lashes" element={<LashSection />} />
            <Route path="/prices" element={<PriceListSection />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </AnimatePresence>
      </div>
    </ReactLenis>
  );
}

export default App;
