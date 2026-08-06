import Link from "next/link";
import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "text";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-surface hover:bg-primary-container hover:scale-[1.02] active:scale-[0.98] transition-all duration-300",
  secondary:
    "border border-tertiary-fixed-dim text-primary hover:bg-surface-container-low hover:scale-[1.02] active:scale-[0.98] transition-all duration-300",
  text: "text-primary border-b border-primary hover:text-secondary hover:border-secondary transition-colors",
};

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

interface ButtonAsButton
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

interface ButtonAsLink extends BaseProps {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-label-caps text-label-caps uppercase tracking-widest px-8 py-4 whitespace-nowrap";

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = clsx(
    baseClasses,
    variant !== "text" && variantClasses[variant],
    variant === "text" && clsx(variantClasses.text, "px-0 py-1 normal-case"),
    className,
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
