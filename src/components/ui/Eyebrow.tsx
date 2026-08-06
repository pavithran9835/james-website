import clsx from "clsx";

interface EyebrowProps {
  children: string;
  className?: string;
  withRule?: boolean;
}

export function Eyebrow({ children, className, withRule }: EyebrowProps) {
  return (
    <div className={clsx("flex items-center gap-4", className)}>
      {withRule && <span className="h-[1px] w-12 bg-tertiary-fixed-dim" />}
      <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-on-surface-variant">
        {children}
      </span>
    </div>
  );
}
