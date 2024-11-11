import { motion } from "framer-motion";

import React from "react";

type TransitionProps = {
  children?: React.ReactNode;
};

const withTransition = (OgComponent: React.ComponentType) => {
  return (props: TransitionProps) => (
    <>
      <OgComponent />
      <motion.div
        className="fixed top-0 z-[999] left-0 w-full h-screen bg-black origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed top-0 z-[999] left-0 w-full h-screen bg-black origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};
export default withTransition;
