"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import type { Product } from "@/types/product";
import { ProductCard } from "@/components/commerce/ProductCard";

const FILTERS: { label: string; value: "all" | Product["benefitTag"] }[] = [
  { label: "All Products", value: "all" },
  { label: "Energy", value: "Energy" },
  { label: "Heart", value: "Heart" },
  { label: "Detox", value: "Detox" },
];

interface FilterBarProps {
  products: Product[];
}

export function FilterBar({ products }: FilterBarProps) {
  const [active, setActive] = useState<"all" | Product["benefitTag"]>("all");

  const visible = products.filter(
    (product) => active === "all" || product.benefitTag === active,
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {FILTERS.map((filter) => {
          const isActive = active === filter.value;
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActive(filter.value)}
              className={clsx(
                "px-8 py-3 rounded-full border text-label-caps font-label-caps transition-all duration-300",
                isActive
                  ? "bg-primary text-surface border-primary"
                  : "border-outline-variant hover:border-primary",
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          {visible.map((product, index) => {
            const hasImage = Boolean(product.image);
            const variantPool = hasImage ? IMAGE_VARIANTS : (["panel"] as const);
            const variant = variantPool[index % variantPool.length];
            return (
              <ProductCard
                key={product.id}
                product={product}
                variant={variant}
                className={CARD_SPANS[index % CARD_SPANS.length]}
              />
            );
          })}
        </motion.div>
      </AnimatePresence>

      {visible.length === 0 && (
        <p className="text-center text-on-surface-variant py-16">
          No products match this filter yet.
        </p>
      )}
    </div>
  );
}

const IMAGE_VARIANTS = ["feature", "side", "split"] as const;
const CARD_SPANS = [
  "md:col-span-8",
  "md:col-span-4",
  "md:col-span-6",
  "md:col-span-6",
];
