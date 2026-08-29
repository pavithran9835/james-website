import Link from "next/link";
import { footerNav } from "@/lib/data/nav";
import { site } from "@/lib/seo";
import { NewsletterForm } from "@/components/commerce/NewsletterForm";
import { Icon } from "@/components/ui/Icon";

const socialLinks = [
  { icon: "mail", label: "Email", href: `mailto:${site.email}` },
  { icon: "help", label: "FAQ", href: "/faq" },
];

const columns = [
  { title: "Shop", links: footerNav.shop },
  { title: "Learn", links: footerNav.learn },
  { title: "Client Service", links: footerNav.service },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-low border-t-[0.5px] border-outline-variant py-16 px-margin-mobile md:px-margin-desktop">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-gutter max-w-container-max mx-auto">
        <div className="md:col-span-2 space-y-6">
          <div className="text-headline-md font-headline-md text-primary">
            {site.name}
          </div>
          <p className="font-body-md text-on-surface-variant text-sm leading-relaxed max-w-sm">
            Organic beetroot powder and superfood botanicals — cold-milled,
            single-origin, and third-party lab tested. Bridging ancient herbal
            wisdom and modern clinical validation.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-11 h-11 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary hover:scale-110 active:scale-95 transition-all"
              >
                <Icon name={social.icon} className="text-lg" />
              </a>
            ))}
          </div>
          <div className="space-y-2 pt-2">
            <h4 className="font-label-caps text-label-caps text-primary uppercase font-bold tracking-widest">
              Journal
            </h4>
            <p className="text-on-surface-variant font-body-md text-sm">
              Join our mailing list for research updates and new releases.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="space-y-4">
            <h4 className="font-label-caps text-label-caps text-primary uppercase font-bold tracking-widest">
              {column.title}
            </h4>
            <ul className="space-y-1">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block py-1.5 text-on-surface-variant font-body-md hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-container-max mx-auto pt-16 mt-16 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-body-md text-on-surface-variant text-xs opacity-70">
          © {new Date().getFullYear()} {site.name}. {site.tagline}.
        </p>
        <div className="flex gap-8">
          {footerNav.legal.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-label-caps text-label-caps text-xs text-on-surface-variant hover:text-primary transition-colors py-1.5 inline-block"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
