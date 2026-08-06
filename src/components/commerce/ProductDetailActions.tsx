"use client";

import { useState } from "react";
import { AddToCartButton } from "@/components/commerce/AddToCartButton";

interface ProductDetailActionsProps {
  productId: string;
}

export function ProductDetailActions({ productId }: ProductDetailActionsProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="inline-flex items-center border border-outline-variant">
        <button
          type="button"
          onClick={() => setQuantity((qty) => Math.max(1, qty - 1))}
          className="w-11 h-11 flex items-center justify-center text-primary text-lg"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="w-10 text-center font-body-md">{quantity}</span>
        <button
          type="button"
          onClick={() => setQuantity((qty) => qty + 1)}
          className="w-11 h-11 flex items-center justify-center text-primary text-lg"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <AddToCartButton productId={productId} quantity={quantity} className="flex-1 sm:flex-none !px-12 !py-4" />
    </div>
  );
}
