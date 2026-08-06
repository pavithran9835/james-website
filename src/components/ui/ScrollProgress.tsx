"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 300, damping: 40, mass: 0.2 });

  return (
    <motion.div
      style={{ scaleX: progress }}
      className="fixed top-20 left-0 right-0 z-50 h-[2px] bg-primary origin-left"
    />
  );
}
