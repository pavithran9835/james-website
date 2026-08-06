import type { ReactNode } from "react";

interface StatRowProps {
  figure: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function StatRow({ figure, title, description, className }: StatRowProps) {
  return (
    <div className={className}>
      <div className="flex items-start gap-6">
        <div className="text-4xl font-display-lg text-secondary shrink-0">{figure}</div>
        <div className="space-y-2">
          <h4 className="font-body-lg font-bold text-primary uppercase tracking-wider">
            {title}
          </h4>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
