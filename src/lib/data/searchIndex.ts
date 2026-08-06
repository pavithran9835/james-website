import { products } from "@/lib/data/products";

export interface SearchEntry {
  id: string;
  type: "Product" | "Guide";
  title: string;
  description: string;
  href: string;
}

const guideEntries: SearchEntry[] = [
  {
    id: "guide-amla",
    type: "Guide",
    title: "Amla Detox Guide",
    description:
      "The molecular precision of Amla — antioxidants, immune support, and vitamin C concentration.",
    href: "/ingredients/amla",
  },
  {
    id: "guide-beetroot",
    type: "Guide",
    title: "Beetroot: The Heart's Best Friend",
    description:
      "The vascular science of Beta Vulgaris — nitric oxide, blood pressure, and stamina.",
    href: "/ingredients/beetroot",
  },
  {
    id: "guide-moringa",
    type: "Guide",
    title: "Moringa Guide",
    description:
      "Nature's multivitamin — anti-inflammatory, skin vitality, and sustained energy.",
    href: "/ingredients/moringa",
  },
];

const productEntries: SearchEntry[] = products.map((product) => ({
  id: `product-${product.id}`,
  type: "Product",
  title: product.name,
  description: product.description,
  href: `/shop/${product.slug}`,
}));

export const searchIndex: SearchEntry[] = [...productEntries, ...guideEntries];

export function search(query: string): SearchEntry[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return searchIndex.filter((entry) =>
    `${entry.title} ${entry.description}`.toLowerCase().includes(normalized),
  );
}
