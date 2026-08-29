"use client";

import { useSyncExternalStore } from "react";
import { VideoSequence } from "@/components/ui/VideoSequence";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const QUERY = "(min-width: 768px)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

// Mounts the hero video only on desktop viewports, after hydration
// (server snapshot is false). Phones never download the multi-MB mp4 —
// they keep the optimized static hero image, which fixes the mobile LCP.
export function DesktopHeroVideo(props: {
  sources: string[];
  posters?: string[];
  className?: string;
  videoClassName?: string;
}) {
  const isDesktop = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
  const reducedMotion = usePrefersReducedMotion();

  if (!isDesktop || reducedMotion) return null;
  return <VideoSequence {...props} />;
}
