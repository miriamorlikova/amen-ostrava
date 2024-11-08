import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
};

// od 1200px schovat a dat vyskakovaci navigaci na bok

const NavLink = ({ to, children }: NavLinkProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="mt-6 px-4 py-1 xxl:text-3xl xl:text-2xl lg:text-xl tracking-wide flex flex-col uppercase"
    >
      <Link to={to}>{children}</Link>
      <div
        className={`border-t-4 border-primary-light rounded-xl transition-all duration-300 ease-in-out ${hovered ? "w-full" : "w-0 border-transparent"}`}
      ></div>
    </motion.div>
  );
};

export default NavLink;
