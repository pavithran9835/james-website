"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";

interface VideoSequenceProps {
  sources: string[];
  className?: string;
  videoClassName?: string;
}

export function VideoSequence({ sources, className, videoClassName }: VideoSequenceProps) {
  const [index, setIndex] = useState(0);

  const handleEnded = useCallback(() => {
    setIndex((i) => (i + 1) % sources.length);
  }, [sources.length]);

  return (
    <div className={clsx("overflow-hidden", className)}>
      <AnimatePresence>
        <motion.video
          key={sources[index]}
          src={sources[index]}
          autoPlay
          muted
          playsInline
          onEnded={handleEnded}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={clsx("absolute inset-0 h-full w-full object-cover", videoClassName)}
        />
      </AnimatePresence>
    </div>
  );
}
