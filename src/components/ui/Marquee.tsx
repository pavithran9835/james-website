import { Icon } from "@/components/ui/Icon";
import { marqueeItems } from "@/lib/data/marquee";

export function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative overflow-hidden border-y border-outline-variant/60 bg-surface-container-low py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-surface-container-low to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-surface-container-low to-transparent" />

      <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 whitespace-nowrap font-label-caps text-label-caps uppercase tracking-[0.3em] text-on-surface-variant"
          >
            <Icon name="auto_awesome" className="text-base text-on-tertiary-container" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
