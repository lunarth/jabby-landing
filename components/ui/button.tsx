import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

const variants = {
  primary:
    "bg-jabby-blue text-white shadow-glowBlue hover:bg-jabby-blueHover hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-10px_rgba(27,75,155,0.55)] active:translate-y-0",
  secondary:
    "border border-jabby-border bg-white text-jabby-ink shadow-hairline hover:-translate-y-0.5 hover:border-jabby-blue/30 hover:text-jabby-blue hover:shadow-card active:translate-y-0",
  light:
    "bg-white text-jabby-navy shadow-toast hover:-translate-y-0.5 hover:bg-jabby-tintBlue active:translate-y-0",
  ghostLight:
    "border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 active:translate-y-0"
} as const;

const sizes = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-[15px]"
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className = ""
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  arrow?: boolean;
  className?: string;
}) {
  const ring = variant === "ghostLight" || variant === "light" ? "focus-ring-dark" : "focus-ring";

  return (
    <a
      href={href}
      className={`${ring} group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all duration-300 ease-out-expo ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {arrow ? (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover/btn:translate-x-1"
          strokeWidth={2}
          aria-hidden
        />
      ) : null}
    </a>
  );
}
