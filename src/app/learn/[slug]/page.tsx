import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/lib/jsonld";
import { site, absoluteUrl, contentUpdated, pageOpenGraph } from "@/lib/seo";
import { articles, getArticle } from "@/lib/data/articles";
import { products } from "@/lib/data/products";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/learn/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const og = pageOpenGraph({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/learn/${slug}`,
    imageAlt: article.title,
  });

  return {
    title: { absolute: `${article.metaTitle} | ${site.name}` },
    description: article.metaDescription,
    alternates: { canonical: `/learn/${slug}` },
    ...og,
    openGraph: { ...og.openGraph, type: "article" },
  };
}

// Renders a paragraph, converting inline markdown links [label](/path) to <Link>.
function InlineText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <Link
        key={match.index}
        href={match[2]}
        className="text-primary underline underline-offset-4 decoration-1 hover:decoration-2"
      >
        {match[1]}
      </Link>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return <>{parts}</>;
}

export default async function ArticlePage({ params }: PageProps<"/learn/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const beetroot = products.find((p) => p.slug === "beetroot-powder");
  const related = articles.filter((a) => a.slug !== article.slug);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: contentUpdated,
    dateModified: contentUpdated,
    mainEntityOfPage: absoluteUrl(`/learn/${article.slug}`),
    image: absoluteUrl("/images/beetroot.jpg"),
    author: { "@type": "Organization", name: site.name, url: site.baseUrl },
    publisher: { "@type": "Organization", name: site.name, url: site.baseUrl },
  };

  const faqLd = article.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Learn", item: absoluteUrl("/learn") },
      {
        "@type": "ListItem",
        position: 2,
        name: article.title,
        item: absoluteUrl(`/learn/${article.slug}`),
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleLd} />
      {faqLd && <JsonLd data={faqLd} />}
      <JsonLd data={breadcrumbLd} />

      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-8">
        <nav className="text-xs font-label-caps text-on-surface-variant flex items-center gap-2">
          <Link href="/learn" className="hover:text-primary py-2 inline-block">
            Learn
          </Link>
          <span>/</span>
          <span className="text-primary">{article.title}</span>
        </nav>
      </div>

      <article className="px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto pb-16 md:pb-24">
        <header className="pt-8 md:pt-12 mb-10 md:mb-14">
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-tertiary mb-4 block">
            Guide · {article.readingMinutes} min read
          </span>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6">
            {article.title}
          </h1>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            {article.excerpt}
          </p>
        </header>

        {article.sections.map((section) => (
          <section key={section.heading} className="mb-10">
            <h2 className="font-headline-md text-2xl text-primary mb-4">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-on-surface-variant leading-relaxed mb-4 text-[15px] md:text-base"
              >
                <InlineText text={paragraph} />
              </p>
            ))}
            {section.list && (
              <ul className="space-y-3 mt-2 mb-4">
                {section.list.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Icon
                      name="check_circle"
                      fill
                      className="text-primary text-lg shrink-0 mt-0.5"
                    />
                    <span className="text-on-surface-variant text-[15px] md:text-base leading-relaxed">
                      <InlineText text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {article.faq && article.faq.length > 0 && (
          <section className="mb-12">
            <h2 className="font-headline-md text-2xl text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {article.faq.map((item) => (
                <div
                  key={item.question}
                  className="border-b border-outline-variant/40 pb-6"
                >
                  <h3 className="font-semibold text-primary mb-2">{item.question}</h3>
                  <p className="text-on-surface-variant leading-relaxed text-[15px] md:text-base">
                    <InlineText text={item.answer} />
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {beetroot && (
          <aside className="bg-surface-container-low border border-outline-variant/20 p-6 md:p-10 mb-12">
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-tertiary mb-3 block">
              From the Apothecary
            </span>
            <h2 className="font-headline-md text-xl md:text-2xl text-primary mb-3">
              {beetroot.name} — ${beetroot.price.toFixed(2)}
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed mb-6 max-w-xl">
              {beetroot.description} Cold-milled, single-origin, and third-party
              lab tested. {beetroot.size}.
            </p>
            <Link
              href="/shop/beetroot-powder"
              className="inline-flex items-center gap-2 font-label-caps text-label-caps uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors"
            >
              View the Product <Icon name="arrow_forward" className="text-base" />
            </Link>
          </aside>
        )}

        <nav aria-label="Related guides">
          <h2 className="font-headline-md text-xl text-primary mb-4">Keep Reading</h2>
          <ul className="space-y-3">
            {related.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/learn/${a.slug}`}
                  className="inline-flex items-center gap-2 py-1 text-on-surface-variant hover:text-primary transition-colors"
                >
                  <Icon name="arrow_forward" className="text-base" />
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </>
  );
}
