"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Icon } from "@/components/ui/Icon";
import { useCart } from "@/lib/cart/CartContext";
import { products } from "@/lib/data/products";

export function CartDrawer() {
  const { lines, isOpen, closeCart, removeItem, setQuantity, subtotal } = useCart();

  const items = lines
    .map((line) => ({
      line,
      product: products.find((product) => product.id === line.productId),
    }))
    .filter((entry) => entry.product);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-on-surface/40 backdrop-blur-sm"
            onClick={closeCart}
          />
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed top-0 right-0 z-[61] h-full w-full max-w-md bg-surface shadow-2xl flex flex-col"
            role="dialog"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between px-8 py-6 border-b border-outline-variant">
              <h2 className="font-headline-md text-headline-md text-primary">Your Cart</h2>
              <button type="button" onClick={closeCart} aria-label="Close cart" className="text-primary">
                <Icon name="close" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
              {items.length === 0 && (
                <p className="text-on-surface-variant text-sm">
                  Your cart is empty. Explore the{" "}
                  <Link href="/shop" onClick={closeCart} className="text-primary underline">
                    shop
                  </Link>{" "}
                  to find your next ritual.
                </p>
              )}

              {items.map(({ line, product }) => (
                <div key={line.productId} className="flex gap-4">
                  <div className="relative w-20 h-20 shrink-0 bg-surface-container-low overflow-hidden">
                    {product!.image && (
                      <Image
                        src={product!.image.src}
                        alt={product!.image.alt}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between gap-2">
                      <h3 className="font-body-lg font-bold text-primary text-sm">
                        {product!.name}
                      </h3>
                      <button
                        type="button"
                        onClick={() => removeItem(line.productId)}
                        aria-label={`Remove ${product!.name}`}
                        className="text-on-surface-variant hover:text-error hover:bg-surface-container-low rounded-full p-1 transition-colors active:scale-90"
                      >
                        <Icon name="close" className="text-base" />
                      </button>
                    </div>
                    <p className="text-on-surface-variant text-sm mb-3">
                      ${product!.price.toFixed(2)}
                    </p>
                    <div className="inline-flex items-center border border-outline-variant">
                      <button
                        type="button"
                        onClick={() => setQuantity(line.productId, line.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-primary hover:bg-surface-container-low transition-colors active:scale-90"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm">{line.quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(line.productId, line.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-primary hover:bg-surface-container-low transition-colors active:scale-90"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {items.length > 0 && (
              <div className="px-8 py-6 border-t border-outline-variant space-y-4">
                <div className="flex justify-between font-body-lg">
                  <span className="text-on-surface-variant">Subtotal</span>
                  <span className="font-bold text-primary">${subtotal.toFixed(2)}</span>
                </div>
                <button
                  type="button"
                  disabled
                  title="Checkout isn't wired up yet — this is a design preview"
                  className="w-full bg-primary text-surface py-4 font-label-caps text-label-caps uppercase tracking-widest opacity-60 cursor-not-allowed"
                >
                  Checkout — Coming Soon
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
