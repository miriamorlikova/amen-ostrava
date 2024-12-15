import { useEffect, useState } from "react";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className: string;
  isAnimatedFrom: "left" | "right";
};

const MotionDiv = ({ children, className, isAnimatedFrom }: Props) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const xDirection = isAnimatedFrom === "left" ? -50 : 50;

  useEffect(() => {
    setHasAnimated(false);
  }, []);

  return (
    <motion.div
      transition={{ duration: 0.6, delay: 0.3 }}
      initial={
        !hasAnimated ? { opacity: 0, x: xDirection } : { opacity: 1, x: 0 }
      }
      animate={!hasAnimated ? { opacity: 1, x: 0 } : undefined}
      onAnimationComplete={() => setHasAnimated(true)}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
