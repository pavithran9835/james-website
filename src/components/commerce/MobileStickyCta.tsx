"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AddToCartButton } from "@/components/commerce/AddToCartButton";
import type { Product } from "@/types/product";

interface MobileStickyCtaProps {
  product: Product;
}

export function MobileStickyCta({ product }: MobileStickyCtaProps) {
  const [scrolled, setScrolled] = useState(false);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 480);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Slide away when the footer enters the viewport so the bar never sits on
  // top of the footer links at the end of the page.
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterInView(entry.isIntersecting),
      { rootMargin: "0px 0px -72px 0px" },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const visible = scrolled && !footerInView;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-surface border-t border-outline-variant px-margin-mobile pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] flex items-center justify-between gap-4 shadow-[0_-8px_24px_rgba(6,27,14,0.08)]"
        >
          <div className="min-w-0">
            <p className="font-body-lg font-bold text-primary text-sm truncate">{product.name}</p>
            <p className="text-on-surface-variant text-sm">${product.price.toFixed(2)}</p>
          </div>
          <AddToCartButton productId={product.id} className="!px-6 shrink-0" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
