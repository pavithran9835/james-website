// Structured-data helper. Per the Next.js docs, JSON-LD belongs in a native
// <script> tag (not next/script), with `<` escaped to prevent HTML injection.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
