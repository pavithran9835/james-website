export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Shop", href: "/shop" },
  { label: "Beetroot", href: "/ingredients/beetroot" },
  { label: "Moringa", href: "/ingredients/moringa" },
  { label: "Amla", href: "/ingredients/amla" },
  { label: "Learn", href: "/learn" },
  { label: "Science", href: "/science" },
  { label: "FAQ", href: "/faq" },
];

export const footerNav = {
  shop: [
    { label: "Beetroot Powder", href: "/shop/beetroot-powder" },
    { label: "All Products", href: "/shop" },
    { label: "The Trinity Bundle", href: "/shop/trinity-bundle" },
  ],
  learn: [
    { label: "Beetroot Powder Benefits", href: "/learn/beetroot-powder-benefits" },
    { label: "How to Use Beetroot Powder", href: "/learn/how-to-use-beetroot-powder" },
    { label: "Powder vs. Juice", href: "/learn/beetroot-powder-vs-beetroot-juice" },
    { label: "Our Process", href: "/science" },
  ],
  service: [
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Shipping", href: "/faq#shipping" },
    { label: "Wholesale", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};
