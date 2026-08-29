import type { ReactNode } from "react";

// Pure-CSS page-enter transition (see .page-enter in globals.css).
// A template re-mounts on every navigation, so the animation replays per
// route change — same effect as the old motion.div version, but content
// paints at first render instead of waiting for JS hydration (this was
// the single biggest mobile LCP cost on slow connections).
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
