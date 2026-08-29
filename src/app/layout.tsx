import type { Metadata, Viewport } from "next";
import { montserrat, playfairDisplay } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/lib/cart/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { SearchModalProvider } from "@/lib/search/SearchModalContext";
import { SearchModal } from "@/components/search/SearchModal";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { JsonLd } from "@/lib/jsonld";
import { site, absoluteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: `${site.name} | Organic Beetroot Powder & Superfoods`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    url: "/",
    title: `${site.name} | Organic Beetroot Powder & Superfoods`,
    description: site.description,
    images: [{ url: site.ogImage, alt: `${site.name} — organic superfood powders` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Organic Beetroot Powder & Superfoods`,
    description: site.description,
    images: [site.ogImage],
  },
};

// viewportFit: cover lets fixed bars pad with env(safe-area-inset-bottom) on iPhones.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.baseUrl,
  // TODO: replace with a real square PNG/SVG brand logo once one exists —
  // Google ignores ICO favicons for Organization logos.
  logo: absoluteUrl(site.ogImage),
  email: site.email,
  description: site.description,
};

const webSiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.baseUrl,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`scroll-smooth ${montserrat.variable} ${playfairDisplay.variable}`}
    >
      <head>
        {/* Material Symbols is self-hosted as a 40KB variable-font subset —
            see the @font-face in globals.css. No Google Fonts requests at
            runtime (next/font already self-hosts the text fonts too). */}
        <link
          rel="preload"
          href="/fonts/material-symbols-subset.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Reveal animations serialize a hidden initial state (opacity/transform)
            into the SSR HTML. Without JS nothing would ever become visible, so
            crawlers or users with JS disabled get the content un-hidden here. */}
        <noscript>
          <style>{`.js-reveal{opacity:1!important;transform:none!important}.js-reveal-curtain{display:none!important}.js-collapse{grid-template-rows:1fr!important;opacity:1!important}`}</style>
        </noscript>
        <JsonLd data={organizationLd} />
        <JsonLd data={webSiteLd} />
      </head>
      {/* suppressHydrationWarning: browser extensions inject attributes
          (e.g. data-be-installed) into <body> before React hydrates; this
          silences that one-element attribute mismatch, nothing deeper. */}
      <body
        suppressHydrationWarning
        className="selection:bg-primary-fixed selection:text-on-primary-fixed"
      >
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
