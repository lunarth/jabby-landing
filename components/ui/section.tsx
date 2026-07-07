import type { ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "light"
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-eyebrow ${
        tone === "dark" ? "text-white/70" : "text-jabby-blue"
      }`}
    >
      <span className="h-0.5 w-5 rounded-full bg-jabby-orange" aria-hidden />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "light",
  align = "left",
  className = ""
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto flex max-w-2xl flex-col items-center text-center" : "max-w-2xl"} ${className}`}
    >
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 text-3xl font-semibold leading-[1.12] tracking-normal sm:text-4xl ${
          tone === "dark" ? "text-white" : "text-jabby-ink"
        }`}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={`mt-5 text-lg leading-8 ${
            tone === "dark" ? "text-white/70" : "text-jabby-muted"
          }`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}

export function Logo({
  tone = "light",
  className = ""
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-baseline text-[22px] font-bold leading-none tracking-normal ${className}`}
    >
      <span className={tone === "dark" ? "text-white" : "text-jabby-blue"}>
        jabb
      </span>
      <span className="text-jabby-orange">y</span>
    </span>
  );
}
