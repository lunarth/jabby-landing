import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function PageHero({
  eyebrow,
  title,
  lede,
  children
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-jabby-border bg-white">
      <div className="hero-grid absolute inset-0" aria-hidden />
      <div className="container-shell relative py-16 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-4 text-[34px] font-semibold leading-[1.1] tracking-normal text-jabby-ink sm:text-[42px]">
              {title}
            </h1>
            {lede ? (
              <p className="mt-5 max-w-2xl text-lg leading-8 text-jabby-muted">
                {lede}
              </p>
            ) : null}
          </div>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
