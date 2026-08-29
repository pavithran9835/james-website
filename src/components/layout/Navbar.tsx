"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { Icon } from "@/components/ui/Icon";
import { navLinks } from "@/lib/data/nav";
import { site } from "@/lib/seo";
import { useSearchModal } from "@/lib/search/SearchModalContext";
import { CartButton } from "@/components/cart/CartButton";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { open: openSearch } = useSearchModal();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-40 bg-surface/80 backdrop-blur-md border-b-[0.5px] border-tertiary-fixed-dim/30 transition-shadow duration-300",
        scrolled && "shadow-[0_4px_24px_rgba(6,27,14,0.08)]",
      )}
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto">
        <Link
          href="/"
          className="text-xl md:text-headline-md font-headline-md font-bold tracking-tight text-primary"
        >
          {site.name}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={clsx(
                  "font-label-caps text-label-caps uppercase tracking-widest transition-colors duration-300",
                  isActive
                    ? "text-primary border-b border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button
            type="button"
            aria-label="Search (⌘K)"
            title="Search (⌘K)"
            onClick={openSearch}
            className="inline-flex items-center justify-center p-2.5 -m-2.5 text-primary hover:opacity-70 transition-opacity"
          >
            <Icon name="search" />
          </button>
          <CartButton />
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2.5 -m-2.5 text-primary"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
            className="md:hidden overflow-hidden bg-surface border-t border-outline-variant/30"
          >
            <div className="px-margin-mobile py-3 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={clsx(
                    "block py-3 font-label-caps text-label-caps uppercase tracking-widest",
                    pathname === link.href ? "text-primary" : "text-on-surface-variant",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
