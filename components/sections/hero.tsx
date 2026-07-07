import { FileCheck, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HeroDashboard } from "@/components/visuals/hero-dashboard";

const trustPoints = [
  { icon: ShieldCheck, label: "Conforme CNDP" },
  { icon: Lock, label: "Données chiffrées" },
  { icon: FileCheck, label: "Chaque action journalisée" }
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-grid absolute inset-0" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_55%_50%_at_50%_0%,rgba(27,75,155,0.08),transparent)]"
        aria-hidden
      />
      <div
        className="absolute right-[8%] top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(232,101,26,0.07),transparent_70%)] blur-xl"
        aria-hidden
      />

      <div className="container-shell relative grid items-center gap-14 pb-20 pt-14 sm:pt-18 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28 lg:pt-20">
        <div className="min-w-0">
          <Reveal>
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-jabby-border bg-white/90 px-3.5 py-1.5 shadow-hairline backdrop-blur-sm">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="animate-ping-ring absolute inline-flex h-full w-full rounded-full bg-jabby-orange/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-jabby-orange" />
              </span>
              <span className="min-w-0 text-[13px] font-semibold leading-5 text-jabby-ink">
                Infrastructure de recouvrement amiable — conçue pour le Maroc
              </span>
            </div>
          </Reveal>

          <h1 className="mt-7 break-words text-4xl font-bold leading-[1.05] tracking-normal text-jabby-ink min-[400px]:text-[42px] sm:text-[52px] lg:break-normal lg:text-[52px] xl:text-[56px] 2xl:text-[60px]">
            <Reveal as="span" className="block">
              Recouvrez plus.
            </Reveal>
            <Reveal as="span" delay={120} className="block text-jabby-blue">
              Automatiquement.
            </Reveal>
          </h1>

          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-lg leading-8 text-jabby-muted">
              Les retards de paiement détruisent votre trésorerie. jabby
              transforme vos impayés en paiements : relances multicanales
              orchestrées, suivi de chaque dossier en temps réel, chaque
              action tracée — du premier rappel à l&apos;encaissement.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" size="lg">
                Demander une démo
              </Button>
              <Button href="#plateforme" variant="secondary" size="lg" arrow>
                Découvrir la plateforme
              </Button>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <ul className="mt-10 flex flex-col gap-x-7 gap-y-3 border-t border-jabby-border/80 pt-6 sm:flex-row sm:flex-wrap">
              {trustPoints.map((point) => {
                const PointIcon = point.icon;
                return (
                  <li
                    key={point.label}
                    className="flex items-center gap-2 text-sm font-medium text-jabby-ink/80"
                  >
                    <PointIcon className="h-4 w-4 text-jabby-blue" strokeWidth={2} aria-hidden />
                    {point.label}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <HeroDashboard />
        </Reveal>
      </div>
    </section>
  );
}
