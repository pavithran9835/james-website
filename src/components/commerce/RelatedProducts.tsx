import { ProductCard } from "@/components/commerce/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import type { Product } from "@/types/product";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <Reveal>
        <h2 className="font-headline-lg text-headline-lg text-primary mb-12">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} variant="compact" />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
