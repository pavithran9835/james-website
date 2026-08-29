"use client";

import { useEffect } from "react";

// Module-level ref count so overlapping overlays (cart drawer + search modal)
// share one lock: the body is unlocked only when the LAST overlay closes,
// regardless of close order.
let lockCount = 0;
let previousOverflow = "";

export function useBodyScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    if (lockCount === 0) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    lockCount += 1;
    return () => {
      lockCount -= 1;
      if (lockCount === 0) {
        document.body.style.overflow = previousOverflow;
      }
    };
  }, [active]);
}
