import type { Metadata } from "next";
import { site } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your information.`,
};

const sections = [
  {
    heading: "What we collect",
    body: "We collect the email address you provide when subscribing to our newsletter or using the newsletter form in the footer. We don't require an account or collect payment information anywhere on this site.",
  },
  {
    heading: "Cart and search data",
    body: "Items you add to your cart are stored only in your browser's local storage on your own device — they're never sent to or stored on our servers. Search is performed entirely client-side against our own product catalog and isn't logged or transmitted anywhere.",
  },
  {
    heading: "Cookies and analytics",
    body: "This site does not use tracking cookies or third-party analytics scripts. Any first-party technical storage (like your cart) exists solely to make the site function and is never shared.",
  },
  {
    heading: "Third parties",
    body: "We do not sell, rent, or share your email address with third parties. If you subscribe to our newsletter, your email is used only to send you the updates you signed up for.",
  },
  {
    heading: "Your choices",
    body: "You can clear your cart at any time from the cart drawer, and clearing your browser's local storage removes it entirely. You can unsubscribe from the newsletter at any time using the link in any email we send.",
  },
  {
    heading: "Contact",
    body: `Questions about this policy can be sent to hello@apothecarywellness.com.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto py-20">
      <span className="text-label-caps font-label-caps text-on-surface-variant tracking-[0.2em] mb-4 block">
        LEGAL
      </span>
      <h1 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
        Privacy Policy
      </h1>
      <p className="text-on-surface-variant text-sm mb-16">Last updated: 2026</p>

      <div className="space-y-12">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-headline-md text-headline-md text-primary mb-3">
              {section.heading}
            </h2>
            <p className="text-on-surface-variant leading-relaxed">{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
