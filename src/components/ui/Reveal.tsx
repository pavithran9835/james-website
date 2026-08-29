"use client";

import { motion } from "motion/react";
import clsx from "clsx";
import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "li";
  delay?: number;
}

const variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const tagMap = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
};

export function Reveal({ children, className, as = "div", delay = 0 }: RevealProps) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = tagMap[as];

  return (
    <MotionTag
      className={clsx("js-reveal", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const }}
    >
      {children}
    </MotionTag>
  );
}
