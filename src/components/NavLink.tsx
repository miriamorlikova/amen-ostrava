import { useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
  theme: "light" | "dark";
  isActive: boolean;
  onClick: () => void;
};

const NavLink = ({ to, children, theme, isActive, onClick }: NavLinkProps) => {
  const [hovered, setHovered] = useState(false);
  const borderColor =
    theme === "light" ? "border-primary-light" : "border-primary-dark";

  return (
    <Link to={to} onClick={onClick}>
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="mt-6 flex max-w-fit flex-col px-4 py-1 uppercase tracking-wide lg:text-xl xl:text-2xl xxl:text-3xl"
      >
        <span>{children}</span>
        <div
          className={`border-t-4 ${borderColor} rounded-xl transition-all duration-300 ease-in-out ${
            hovered || isActive ? "w-full" : "w-0 border-transparent"
          }`}
        />
      </motion.div>
    </Link>
  );
};

export default NavLink;
