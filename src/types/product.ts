export type BenefitTag = "Energy" | "Heart" | "Detox";

export type IngredientSlug = "amla" | "beetroot" | "moringa";

export interface Product {
  id: string;
  slug: string;
  name: string;
  ingredient: IngredientSlug;
  price: number;
  badge?: string;
  benefitTag: BenefitTag;
  benefitLabel: string;
  description: string;
  longDescription: string;
  highlights: string[];
  usage: string;
  size: string;
  nutritionFacts: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
  certifications: string[];
  image?: {
    src: string;
    alt: string;
  };
  featured?: boolean;
}
