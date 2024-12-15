import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuBurger } from "react-icons/ci";

import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

type MobileNavBarProps = {
  theme: "light" | "dark";
  navbarBackground?: string;
  backgroundImage?: string;
};

const MobileNavBar = ({
  theme,
  navbarBackground,
  backgroundImage,
}: MobileNavBarProps) => {
  const textColor =
    theme === "light" ? "text-primary-light" : "text-primary-dark";
  const backgroundColor = navbarBackground || "bg-transparent";
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false); // Zavřít menu
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className={`w-fulll fixed z-[30] flex ${backgroundColor}`}>
      {/* Navbar */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isMenuOpen ? "-100%" : 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed z-[30] flex w-full justify-center pb-28 pt-10 ${textColor} ${backgroundColor} transition-all duration-300`}
        style={
          backgroundImage
            ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {}
        }
      >
        <div className={`absolute left-0 top-0 ${textColor}`}>
          <Logo theme={theme} />
        </div>
        <button onClick={() => setIsMenuOpen(true)}>
          <CiMenuBurger
            className={`absolute right-10 top-12 h-14 w-14 opacity-70 transition-colors duration-500 hover:opacity-100 ${textColor}`}
          />
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <div ref={menuRef}>
            <MobileMenu
              isMenuOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavBar;
