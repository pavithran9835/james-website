import { Reveal } from "@/components/ui/Reveal";

interface VideoBannerProps {
  src: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function VideoBanner({ src, eyebrow, title, description }: VideoBannerProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-primary">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-primary/20" />

      <Reveal className="relative z-10 text-center text-surface px-margin-mobile md:px-margin-desktop max-w-2xl">
        <span className="font-label-caps text-label-caps uppercase tracking-[0.3em] text-inverse-primary mb-6 block">
          {eyebrow}
        </span>
        <h2 className="font-headline-lg text-headline-lg md:text-display-lg font-display-lg mb-6">
          {title}
        </h2>
        {description && (
          <p className="text-surface/80 font-body-lg text-body-lg leading-relaxed">
            {description}
          </p>
        )}
      </Reveal>
    </section>
  );
}
