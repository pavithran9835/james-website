import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import type { Product } from "@/types/product";
import { Icon } from "@/components/ui/Icon";
import { TiltCard } from "@/components/ui/TiltCard";
import { AddToCartButton } from "@/components/commerce/AddToCartButton";

type ProductCardVariant = "compact" | "feature" | "side" | "split" | "panel";

interface ProductCardProps {
  product: Product;
  variant?: ProductCardVariant;
  className?: string;
}

export function ProductCard({
  product,
  variant = "compact",
  className,
}: ProductCardProps) {
  const href = `/shop/${product.slug}`;

  if (variant === "panel") {
    return (
      <div
        className={clsx(
          "group relative h-full min-h-[400px] bg-primary flex items-center justify-center p-6 md:p-12 text-center text-surface overflow-hidden",
          className,
        )}
      >
        <div className="relative z-10">
          {product.badge && (
            <span className="font-label-caps text-label-caps text-inverse-primary mb-4 block">
              {product.badge}
            </span>
          )}
          <h3 className="font-headline-lg text-headline-lg mb-4">{product.name}</h3>
          <p className="text-body-md text-surface/80 mb-8 max-w-xs mx-auto">
            {product.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AddToCartButton
              productId={product.id}
              label={`Add Bundle — $${product.price}`}
              className="!bg-surface !text-primary hover:!bg-inverse-primary"
            />
            <Link
              href={href}
              className="font-label-caps text-label-caps text-surface underline underline-offset-4"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "feature") {
    return (
      <div className={clsx("group relative overflow-hidden bg-surface-container-low", className)}>
        <Link href={href} className="relative aspect-[16/9] flex items-center justify-center p-12">
          {product.image && (
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover absolute inset-0 mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
          )}
          <div className="relative z-10 text-left w-full h-full flex flex-col justify-end">
            <div className="bg-surface/90 backdrop-blur-sm p-8 max-w-sm">
              <span className="text-label-caps font-label-caps text-secondary mb-2 block">
                {product.benefitLabel.toUpperCase()}
              </span>
              <h3 className="text-headline-lg font-headline-lg text-primary mb-2">
                {product.name}
              </h3>
              <p className="text-body-md text-on-surface-variant mb-6">
                {product.description}
              </p>
              <span className="group/btn flex items-center gap-2 text-label-caps font-label-caps text-primary">
                View Details
                <Icon
                  name="arrow_forward"
                  className="transition-transform group-hover/btn:translate-x-2"
                />
              </span>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  if (variant === "side") {
    return (
      <div
        className={clsx(
          "group relative overflow-hidden bg-surface-container-high flex flex-col p-8",
          className,
        )}
      >
        <Link href={href} className="flex-grow relative flex items-center justify-center mb-8 min-h-[220px]">
          {product.image && (
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-contain transition-transform duration-700 group-hover:scale-105"
            />
          )}
        </Link>
        <div className="mt-auto">
          <span className="text-label-caps font-label-caps text-primary mb-2 block">
            {product.benefitLabel.toUpperCase()}
          </span>
          <Link href={href}>
            <h3 className="text-headline-md font-headline-md text-primary mb-2 hover:underline">
              {product.name}
            </h3>
          </Link>
          <p className="text-body-md text-on-surface-variant mb-6">
            {product.description}
          </p>
          <AddToCartButton productId={product.id} className="w-full" />
        </div>
      </div>
    );
  }

  if (variant === "split") {
    return (
      <div className={clsx("bg-surface-container flex flex-col md:flex-row h-full", className)}>
        <Link href={href} className="relative w-full md:w-1/2 aspect-square overflow-hidden block">
          {product.image && (
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          )}
        </Link>
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <span className="text-label-caps font-label-caps text-on-tertiary-container mb-2 block">
            {product.benefitLabel.toUpperCase()}
          </span>
          <Link href={href}>
            <h3 className="text-headline-md font-headline-md text-primary mb-2 hover:underline">
              {product.name}
            </h3>
          </Link>
          <p className="text-body-md text-on-surface-variant mb-6">
            {product.description}
          </p>
          <AddToCartButton
            productId={product.id}
            label={`Add to Cart — $${product.price}`}
            className="!bg-transparent !text-primary !px-0 !py-1 underline decoration-outline-variant underline-offset-8 hover:decoration-primary w-fit normal-case tracking-normal"
          />
        </div>
      </div>
    );
  }

  // compact
  return (
    <div className={clsx("group", className)}>
      <TiltCard className="mb-8 shadow-sm hover:shadow-xl transition-shadow duration-500">
        <Link href={href} className="relative block aspect-[3/4] overflow-hidden bg-surface">
          {product.image && (
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )}
          <div className="absolute top-6 left-6">
            <span className="bg-surface/90 backdrop-blur px-4 py-2 text-xs font-label-caps uppercase tracking-widest border border-outline-variant">
              {product.badge ?? product.benefitLabel}
            </span>
          </div>
        </Link>
      </TiltCard>
      <Link href={href}>
        <h3 className="font-headline-md text-2xl text-primary mb-2 hover:underline">
          {product.name}
        </h3>
      </Link>
      <p className="text-on-surface-variant text-sm mb-6">{product.description}</p>
      <div className="flex justify-between items-center border-t border-outline-variant/30 pt-4">
        <span className="font-bold text-primary">${product.price.toFixed(2)}</span>
        <AddToCartButton productId={product.id} variant="icon" label={`Add ${product.name} to cart`} />
      </div>
    </div>
  );
}
