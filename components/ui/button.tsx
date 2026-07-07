import type { ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "onDark" | "ghostDark";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-jabby-blue text-white shadow-hairline hover:bg-jabby-blueHover focus-ring",
  secondary:
    "border border-jabby-border bg-white text-jabby-ink shadow-hairline hover:border-jabby-blue/40 hover:text-jabby-blue focus-ring",
  onDark:
    "bg-white text-jabby-blue shadow-hairline hover:bg-jabby-tintBlue focus-ring-dark",
  ghostDark:
    "border border-white/25 text-white hover:border-white/60 hover:bg-white/5 focus-ring-dark"
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = ""
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: "md" | "lg";
  className?: string;
}) {
  const sizing = size === "lg" ? "h-12 px-6 text-[15px]" : "h-10 px-4 text-sm";
  const classes = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-colors duration-200 ${sizing} ${variants[variant]} ${className}`;

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
