import React, { useState } from "react";

import { motion } from "framer-motion";

type ContactItemProps = {
  src: string;
  children: React.ReactNode;
};

const ContactItem = ({ src, children }: ContactItemProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex items-center gap-4 lg:gap-8">
      <img src={src} className="h-12 w-12 xl:h-16 xl:w-16 xxl:h-20 xxl:w-20" />
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <p className="max-w-[290px] pt-2 text-lg sm:text-2xl xl:text-2xl">
          {children}
        </p>
        <div
          className={`rounded-xl border-t-4 border-primary-dark opacity-90 transition-all duration-300 ease-in-out ${hovered ? "w-full" : "w-0 border-transparent"}`}
        />
      </motion.div>
    </div>
  );
};

export default ContactItem;
