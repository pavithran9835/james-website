"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "motion/react";
import clsx from "clsx";

interface MagneticButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  variant = "primary",
  className,
  href,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 15 });
  const sy = useSpring(my, { stiffness: 180, damping: 15 });

  function onMove(event: MouseEvent) {
    const rect = ref.current!.getBoundingClientRect();
    mx.set((event.clientX - rect.left - rect.width / 2) * 0.35);
    my.set((event.clientY - rect.top - rect.height / 2) * 0.35);
  }

  function reset() {
    mx.set(0);
    my.set(0);
  }

  const inner = (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.96 }}
      className={clsx(
        "group relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest transition-colors duration-500",
        variant === "primary"
          ? "bg-primary text-surface hover:bg-primary-container"
          : "border border-primary bg-transparent text-primary hover:bg-primary hover:text-surface",
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className="inline-block">
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block bg-transparent">
      {inner}
    </button>
  );
}
