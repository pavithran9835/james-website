"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { ReactNode } from "react";

interface ParallaxLayerProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function ParallaxLayer({ children, className, strength = 40 }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        {children}
      </motion.div>
    </div>
  );
}
