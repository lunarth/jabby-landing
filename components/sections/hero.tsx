import type { CSSProperties } from "react";
import { ArrowRight, Banknote, ScrollText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroLive } from "@/components/visuals/hero-live";

const trustPoints = [
  { icon: Banknote, label: "Rémunération au succès" },
  { icon: ScrollText, label: "Chaque action journalisée" },
  { icon: ShieldCheck, label: "Loi 09-08 · CNDP" }
];

function delay(seconds: number): CSSProperties {
  return { "--d": `${seconds}s` } as CSSProperties;
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-grid absolute inset-0" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(27,75,155,0.07),transparent)]"
        aria-hidden
      />

      <div className="container-shell relative grid items-center gap-14 pb-24 pt-16 sm:pt-20 lg:grid-cols-[0.96fr_1.04fr] lg:gap-12 lg:pb-28 lg:pt-24">
        <div className="min-w-0">
          <div className="hero-item" style={delay(0.05)}>
            <div className="inline-flex max-w-full items-start gap-2 rounded-full border border-jabby-border bg-white px-3.5 py-1.5 shadow-hairline">
              <span className="h-1.5 w-1.5 rounded-full bg-jabby-orange" aria-hidden />
              <span className="min-w-0 text-[13px] font-medium leading-5 text-jabby-ink">
                Recouvrement amiable opéré, conçu pour le Maroc
              </span>
            </div>
          </div>

          <h1 className="mt-7 max-w-full text-[34px] font-semibold leading-[1.08] tracking-normal text-jabby-ink sm:text-5xl lg:text-[44px] xl:text-[47px]">
            <span className="hero-line">
              <span style={delay(0.12)}>Confiez vos créances</span>
            </span>
            <span className="hero-line text-jabby-blue">
              <span style={delay(0.24)}>Récupérez votre trésorerie</span>
            </span>
          </h1>

          <p
            className="hero-item mt-6 max-w-xl text-lg leading-8 text-jabby-muted"
            style={delay(0.42)}
          >
            jabby opère votre recouvrement amiable de bout en bout, au nom de
            votre entreprise : relances, négociation, encaissement,
            réconciliation. Chaque action est tracée. Vous ne payez
            qu&apos;au résultat.
          </p>

          <div
            className="hero-item mt-9 flex flex-col gap-3 sm:flex-row"
            style={delay(0.54)}
          >
            <Button href="/contact" size="lg">
              Demander une démo
            </Button>
            <Button href="/comment-ca-marche" variant="secondary" size="lg">
              Comment ça marche
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </Button>
          </div>

          <ul className="mt-10 flex flex-col gap-x-7 gap-y-3 border-t border-jabby-border pt-6 sm:flex-row sm:flex-wrap">
            {trustPoints.map((point, index) => {
              const PointIcon = point.icon;
              return (
                <li
                  key={point.label}
                  className="hero-item flex items-center gap-2 text-sm font-medium text-jabby-ink/80"
                  style={delay(0.68 + index * 0.09)}
                >
                  <PointIcon
                    className="h-4 w-4 text-jabby-blue"
                    strokeWidth={1.8}
                    aria-hidden
                  />
                  {point.label}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hero-item min-w-0" style={delay(0.35)}>
          <HeroLive />
        </div>
      </div>
    </section>
  );
}
