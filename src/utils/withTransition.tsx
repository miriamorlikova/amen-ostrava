import { motion } from "framer-motion";

import React from "react";

const withTransition = (OgComponent: React.ComponentType) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="fixed left-0 top-0 z-[999] h-screen w-full origin-bottom bg-black"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed left-0 top-0 z-[999] h-screen w-full origin-top bg-black"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};
export default withTransition;
