"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AddToCartButton } from "@/components/commerce/AddToCartButton";
import type { Product } from "@/types/product";

interface MobileStickyCtaProps {
  product: Product;
}

export function MobileStickyCta({ product }: MobileStickyCtaProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 480);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-surface border-t border-outline-variant px-margin-mobile py-4 flex items-center justify-between gap-4 shadow-[0_-8px_24px_rgba(6,27,14,0.08)]"
        >
          <div className="min-w-0">
            <p className="font-body-lg font-bold text-primary text-sm truncate">{product.name}</p>
            <p className="text-on-surface-variant text-sm">${product.price.toFixed(2)}</p>
          </div>
          <AddToCartButton productId={product.id} className="!px-6 !py-3 shrink-0" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
