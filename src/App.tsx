import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainSection from "./layout/MainSection";
import AboutSection from "./layout/AboutSection";
import WorkSection from "./layout/WorkSection";
import BrowSection from "./layout/BrowSection";
import LashSection from "./layout/LashSection";
import PiercSection from "./layout/PiercSection";
import ContactSection from "./layout/ContactSection";
import PriceListSection from "./layout/PriceListSection";
function App() {
  const location = useLocation();

  return (
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
  );
}

export default App;
