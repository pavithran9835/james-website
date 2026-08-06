import clsx from "clsx";

interface IconProps {
  name: string;
  className?: string;
  fill?: boolean;
}

export function Icon({ name, className, fill }: IconProps) {
  return (
    <span
      className={clsx("material-symbols-outlined", fill && "icon-fill", className)}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
