export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Shop", href: "/shop" },
  { label: "Beetroot", href: "/ingredients/beetroot" },
  { label: "Moringa", href: "/ingredients/moringa" },
  { label: "Amla", href: "/ingredients/amla" },
  { label: "Science", href: "/science" },
];

export const footerNav = {
  philosophy: [
    { label: "Sourcing", href: "#" },
    { label: "Our Labs", href: "#" },
    { label: "Sustainability", href: "#" },
  ],
  service: [
    { label: "Contact", href: "#" },
    { label: "Shipping", href: "#" },
    { label: "Wholesale", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};
