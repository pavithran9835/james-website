"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { Icon } from "@/components/ui/Icon";
import { useCart } from "@/lib/cart/CartContext";

interface AddToCartButtonProps {
  productId: string;
  quantity?: number;
  className?: string;
  variant?: "icon" | "full";
  label?: string;
}

export function AddToCartButton({
  productId,
  quantity = 1,
  className,
  variant = "full",
  label = "Add to Cart",
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(productId, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  }

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={handleClick}
        aria-label={label}
        className={clsx("relative text-primary", className)}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={added ? "check" : "add"}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="inline-flex"
          >
            <Icon name={added ? "check_circle" : "add_circle"} fill={added} />
          </motion.span>
        </AnimatePresence>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(
        "inline-flex items-center justify-center gap-2 font-label-caps text-label-caps uppercase tracking-widest px-8 py-4 whitespace-nowrap transition-all duration-300",
        added ? "bg-on-primary-container text-surface" : "bg-primary text-surface hover:bg-primary-container",
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={added ? "added" : "idle"}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18 }}
          className="inline-flex items-center gap-2"
        >
          {added ? (
            <>
              <Icon name="check" /> Added
            </>
          ) : (
            label
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
