"use client";

import { useRef, useState, type UIEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Icon } from "@/components/ui/Icon";

export interface PagerItem {
  src: string;
  alt: string;
  caption: string;
  href?: string;
}

interface HorizontalPagerProps {
  items: PagerItem[];
  className?: string;
}

export function HorizontalPager({ items, className }: HorizontalPagerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  function goTo(index: number) {
    const clamped = Math.max(0, Math.min(items.length - 1, index));
    const container = scrollRef.current;
    const target = itemRefs.current[clamped];
    if (container && target) {
      container.scrollTo({
        left: target.offsetLeft - (container.clientWidth - target.offsetWidth) / 2,
        behavior: "smooth",
      });
    }
    setActiveIndex(clamped);
  }

  function handleScroll(event: UIEvent<HTMLDivElement>) {
    const container = event.currentTarget;
    const center = container.scrollLeft + container.clientWidth / 2;

    let closest = 0;
    let closestDistance = Infinity;
    itemRefs.current.forEach((el, index) => {
      if (!el) return;
      const distance = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });
    setActiveIndex(closest);
  }

  return (
    <div className={className}>
      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
        >
          {items.map((item, index) => {
            const content = (
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 85vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                <span className="absolute bottom-6 left-6 font-headline-md text-headline-md text-surface">
                  {item.caption}
                </span>
              </div>
            );

            return (
              <div
                key={item.caption}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className="snap-center shrink-0 w-[85%] md:w-[38%]"
              >
                {item.href ? <Link href={item.href}>{content}</Link> : content}
              </div>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Previous"
          onClick={() => goTo(activeIndex - 1)}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 items-center justify-center bg-surface shadow-lg text-primary"
        >
          <Icon name="chevron_left" />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => goTo(activeIndex + 1)}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 items-center justify-center bg-surface shadow-lg text-primary"
        >
          <Icon name="chevron_right" />
        </button>
      </div>

      <div className="flex justify-center mt-8">
        {items.map((item, index) => (
          <button
            key={item.caption}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goTo(index)}
            className="flex h-11 min-w-[44px] items-center justify-center"
          >
            <span
              className={clsx(
                "h-2 rounded-full transition-all duration-300",
                index === activeIndex ? "w-8 bg-primary" : "w-2 bg-outline-variant",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
