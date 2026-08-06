import clsx from "clsx";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "space-y-4 mb-16",
        align === "center" && "text-center mx-auto",
        className,
      )}
    >
      <h2 className="font-headline-lg text-headline-lg text-primary">{title}</h2>
      {description && (
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
