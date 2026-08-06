import type { Metadata } from "next";
import { montserrat, playfairDisplay } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/lib/cart/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { SearchModalProvider } from "@/lib/search/SearchModalContext";
import { SearchModal } from "@/components/search/SearchModal";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { site } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${montserrat.variable} ${playfairDisplay.variable}`}
    >
      <head>
        {/* next/font/google doesn't carry Material Symbols Outlined; `display=block`
            avoids a flash of the raw icon-name text before the glyphs load. */}
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,0..200&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="selection:bg-primary-fixed selection:text-on-primary-fixed">
        <CartProvider>
          <SearchModalProvider>
            <ScrollProgress />
            <Navbar />
            <main className="pt-20">{children}</main>
            <Footer />
            <CartDrawer />
            <SearchModal />
          </SearchModalProvider>
        </CartProvider>
      </body>
    </html>
  );
}
