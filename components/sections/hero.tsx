import { ArrowRight, Lock, ScrollText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HeroDashboard } from "@/components/visuals/hero-dashboard";

const trustPoints = [
  { icon: ShieldCheck, label: "Conçu pour les exigences CNDP" },
  { icon: ScrollText, label: "Chaque action journalisée" },
  { icon: Lock, label: "Données chiffrées" }
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-grid absolute inset-0" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(27,75,155,0.07),transparent)]"
        aria-hidden
      />

      <div className="container-shell relative grid items-center gap-14 pb-24 pt-16 sm:pt-20 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12 lg:pb-28 lg:pt-24">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-jabby-border bg-white px-3.5 py-1.5 shadow-hairline">
            <span className="h-1.5 w-1.5 rounded-full bg-jabby-orange" aria-hidden />
            <span className="text-[13px] font-medium text-jabby-ink">
              Plateforme de recouvrement amiable — conçue pour le Maroc
            </span>
          </div>

          <h1 className="mt-7 text-[38px] font-semibold leading-[1.08] tracking-[-0.03em] text-jabby-ink sm:text-5xl lg:text-[44px] xl:text-[47px]">
            L&apos;infrastructure du
            <span className="block text-jabby-blue">
              recouvrement amiable.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-jabby-muted">
            jabby aide les directions financières et les équipes recouvrement à
            orchestrer leurs relances sur tous les canaux, suivre chaque
            dossier en temps réel et tracer chaque action — du premier rappel à
            l&apos;encaissement.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" size="lg">
              Demander une démo
            </Button>
            <Button href="#plateforme" variant="secondary" size="lg">
              Découvrir la plateforme
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </Button>
          </div>

          <ul className="mt-10 flex flex-col gap-x-7 gap-y-3 border-t border-jabby-border pt-6 sm:flex-row sm:flex-wrap">
            {trustPoints.map((point) => {
              const PointIcon = point.icon;
              return (
                <li
                  key={point.label}
                  className="flex items-center gap-2 text-sm font-medium text-jabby-ink/80"
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
        </Reveal>

        <Reveal delay={140}>
          <HeroDashboard />
        </Reveal>
      </div>
    </section>
  );
}
