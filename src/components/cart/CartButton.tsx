"use client";

import { AnimatePresence, motion } from "motion/react";
import { Icon } from "@/components/ui/Icon";
import { useCart } from "@/lib/cart/CartContext";

export function CartButton() {
  const { itemCount, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      className="relative flex items-center justify-center gap-2 p-2.5 -m-2.5 group"
      aria-label="Open cart"
    >
      <Icon name="shopping_bag" className="text-primary group-hover:scale-110 transition-transform" />
      <span className="hidden lg:inline font-label-caps text-label-caps uppercase tracking-widest text-primary">
        Cart
      </span>
      <AnimatePresence>
        {itemCount > 0 && (
          <motion.span
            key={itemCount}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="absolute top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-secondary text-surface text-[10px] font-bold flex items-center justify-center"
          >
            {itemCount}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
