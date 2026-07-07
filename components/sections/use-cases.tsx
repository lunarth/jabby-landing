import {
  ArrowRight,
  Briefcase,
  Building2,
  Coins,
  GraduationCap,
  HeartPulse,
  Landmark,
  Phone,
  Umbrella
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";

const useCases = [
  {
    icon: GraduationCap,
    title: "Éducation privée",
    text: "Scolarités impayées recouvrées avec tact, sans tension avec les familles"
  },
  {
    icon: HeartPulse,
    title: "Santé privée",
    text: "Restes à charge résolus sans mobiliser vos équipes soignantes"
  },
  {
    icon: Briefcase,
    title: "Distribution & B2B",
    text: "Factures en retard traitées avec constance, trésorerie protégée"
  },
  {
    icon: Coins,
    title: "Microfinance",
    text: "Portefeuilles granulaires, traités dossier par dossier avec respect"
  },
  {
    icon: Landmark,
    title: "Financement & leasing",
    text: "Volumes et échéanciers industrialisés, exigences réglementaires couvertes"
  },
  {
    icon: Umbrella,
    title: "Assurance",
    text: "Primes et quittances recouvrées avec la traçabilité qu'exige la conformité"
  },
  {
    icon: Building2,
    title: "Immobilier",
    text: "Loyers et charges suivis sans dégrader la relation locataire"
  },
  {
    icon: Phone,
    title: "Télécom",
    text: "Petites créances à fort volume, traitées à coût maîtrisé"
  }
];

export function UseCases() {
  return (
    <section id="secteurs" className="scroll-mt-20 bg-jabby-bg">
      <div className="container-shell py-20 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Secteurs"
              title="Pensé pour les réalités du Maroc"
            />
            <a
              href="/secteurs"
              className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-jabby-blue transition-colors hover:text-jabby-blueHover"
            >
              Explorer les secteurs
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-jabby-border bg-jabby-border sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, index) => {
            const CaseIcon = useCase.icon;
            return (
              <Reveal key={useCase.title} delay={(index % 4) * 60} className="h-full">
                <article className="h-full bg-white p-6 transition-colors duration-300 hover:bg-jabby-bg/70">
                  <CaseIcon
                    className="h-5 w-5 text-jabby-blue"
                    strokeWidth={1.7}
                    aria-hidden
                  />
                  <h3 className="mt-4 text-[15px] font-semibold tracking-normal text-jabby-ink">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-6 text-jabby-muted">
                    {useCase.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
