import clsx from "clsx";
import { iconPaths } from "@/lib/data/iconPaths";

interface IconProps {
  name: string;
  className?: string;
  fill?: boolean;
}

// Inline SVG icons (Material Symbols paths from src/lib/data/iconPaths.ts).
// Sized by font-size (1em) and colored by currentColor, so the existing
// text-* utility classes keep working exactly as they did with the icon font.
// When adding a NEW icon, add its path data to iconPaths.ts (see comment there).
export function Icon({ name, className, fill }: IconProps) {
  const paths = iconPaths[name];
  if (!paths) return null;

  return (
    <svg
      viewBox="0 -960 960 960"
      aria-hidden="true"
      focusable="false"
      className={clsx("inline-block h-[1em] w-[1em] shrink-0 align-middle", className)}
      fill="currentColor"
    >
      <path d={fill && paths.fill ? paths.fill : paths.outline} />
    </svg>
  );
}
