import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import NavLink from "./NavLink";
import Logo from "./Logo";

type NavBarProps = {
  theme: "light" | "dark";
  navbarBackground?: string;
  backgroundImage?: string;
};

const NavBar = ({ theme, navbarBackground, backgroundImage }: NavBarProps) => {
  const textColor =
    theme === "light" ? "text-primary-light" : "text-primary-dark";
  const backgroundColor = navbarBackground || "bg-transparent";
  const location = useLocation();
  const [activeNavLink, setActiveNavLink] = useState<string>(location.pathname);

  // Update active link on route change
  useEffect(() => {
    setActiveNavLink(location.pathname);
  }, [location.pathname]);

  return (
    <div
      className={`fixed z-[30] flex w-full justify-center pb-14 pt-10 ${textColor} ${backgroundColor} transition-all duration-300`}
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
      <div className="absolute left-0 top-0">
        <Logo theme={theme} />
      </div>
      <div className="flex gap-2 xl:gap-4 xxl:gap-12">
        <NavLink
          to="/about"
          theme={theme}
          isActive={activeNavLink === "/about"}
          onClick={() => setActiveNavLink("/about")}
        >
          o mně
        </NavLink>
        <NavLink
          to="/work"
          theme={theme}
          isActive={activeNavLink === "/work"}
          onClick={() => setActiveNavLink("/work")}
        >
          práce
        </NavLink>
        <NavLink
          to="/brows"
          theme={theme}
          isActive={activeNavLink === "/brows"}
          onClick={() => setActiveNavLink("/brows")}
        >
          obočí
        </NavLink>
        <NavLink
          to="/lashes"
          theme={theme}
          isActive={activeNavLink === "/lashes"}
          onClick={() => setActiveNavLink("/lashes")}
        >
          řasy
        </NavLink>
        <NavLink
          to="/piercings"
          theme={theme}
          isActive={activeNavLink === "/piercings"}
          onClick={() => setActiveNavLink("/piercings")}
        >
          piercing
        </NavLink>
        <NavLink
          to="/prices"
          theme={theme}
          isActive={activeNavLink === "/prices"}
          onClick={() => setActiveNavLink("/prices")}
        >
          ceník
        </NavLink>
        <NavLink
          to="/contact"
          theme={theme}
          isActive={activeNavLink === "/contact"}
          onClick={() => setActiveNavLink("/contact")}
        >
          kontakt
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
