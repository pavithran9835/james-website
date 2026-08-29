"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import clsx from "clsx";

interface ImageRevealProps {
  src: string;
  alt?: string;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  curtainClassName?: string;
  delay?: number;
}

export function ImageReveal({
  src,
  alt = "",
  sizes,
  quality = 90,
  priority = false,
  className,
  imgClassName,
  curtainClassName = "bg-surface-container-low",
  delay = 0,
}: ImageRevealProps) {
  const reducedMotion = usePrefersReducedMotion();

  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={quality}
      preload={priority}
      className={clsx(
        "object-cover transition-transform duration-700 group-hover:scale-105",
        imgClassName,
      )}
    />
  );

  if (reducedMotion) {
    return (
      <div className={clsx("overflow-hidden", className)}>
        <div className="absolute inset-0">{image}</div>
      </div>
    );
  }

  return (
    <div className={clsx("overflow-hidden", className)}>
      <motion.div
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.5, delay, ease: [0.22, 1, 0.36, 1] as const }}
        className="js-reveal absolute inset-0"
      >
        {image}
      </motion.div>
      <motion.div
        aria-hidden
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.05, delay, ease: [0.76, 0, 0.24, 1] as const }}
        className={clsx("js-reveal-curtain absolute inset-0 z-10 origin-top", curtainClassName)}
      />
    </div>
  );
}
