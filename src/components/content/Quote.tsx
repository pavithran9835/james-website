interface QuoteProps {
  quote: string;
  author: string;
  role: string;
}

export function Quote({ quote, author, role }: QuoteProps) {
  return (
    <div className="max-w-[1000px] mx-auto px-margin-mobile md:px-margin-desktop text-center space-y-10">
      <blockquote className="font-headline-lg text-headline-md md:text-headline-lg italic text-primary leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex flex-col items-center">
        <div className="w-12 h-[1px] bg-tertiary-fixed-dim mb-4" />
        <span className="font-label-caps text-label-caps tracking-widest text-on-surface-variant">
          {author}
        </span>
        <span className="text-xs text-on-surface-variant/60 mt-1 uppercase tracking-tighter">
          {role}
        </span>
      </div>
    </div>
  );
}
