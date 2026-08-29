"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";

interface VideoSequenceProps {
  sources: string[];
  posters?: string[];
  className?: string;
  videoClassName?: string;
}

export function VideoSequence({ sources, posters, className, videoClassName }: VideoSequenceProps) {
  const [index, setIndex] = useState(0);
  const isSingle = sources.length === 1;

  const handleEnded = useCallback(() => {
    setIndex((i) => (i + 1) % sources.length);
  }, [sources.length]);

  return (
    <div className={clsx("overflow-hidden", className)}>
      <AnimatePresence>
        <motion.video
          key={sources[index]}
          src={sources[index]}
          poster={posters?.[index]}
          preload="metadata"
          autoPlay
          muted
          playsInline
          loop={isSingle}
          onEnded={isSingle ? undefined : handleEnded}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={clsx("js-reveal absolute inset-0 h-full w-full object-cover", videoClassName)}
        />
      </AnimatePresence>
    </div>
  );
}
