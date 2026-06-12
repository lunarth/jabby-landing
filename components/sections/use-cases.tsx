import {
  Briefcase,
  Coins,
  GraduationCap,
  HeartPulse,
  Landmark,
  Umbrella
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";

const useCases = [
  {
    icon: Landmark,
    title: "Sociétés de financement & leasing",
    text: "Volumes importants, échéanciers, exigences réglementaires : industrialisez la relance sans dégrader la relation client."
  },
  {
    icon: Coins,
    title: "Microfinance",
    text: "Des portefeuilles à forte granularité, traités avec constance et respect — dossier par dossier, sans exception."
  },
  {
    icon: Umbrella,
    title: "Assurances",
    text: "Primes et quittances impayées recouvrées avec la traçabilité qu'exigent vos fonctions conformité et audit."
  },
  {
    icon: HeartPulse,
    title: "Santé privée",
    text: "Cliniques et groupes de santé : recouvrez les restes à charge avec tact, sans mobiliser vos équipes soignantes."
  },
  {
    icon: GraduationCap,
    title: "Éducation privée",
    text: "Écoles et universités : des rappels de scolarité réguliers et mesurés, qui préservent la relation avec les familles."
  },
  {
    icon: Briefcase,
    title: "B2B & services",
    text: "Factures en retard, relances qui s'éternisent : un processus constant qui protège la trésorerie et les marges."
  }
];

export function UseCases() {
  return (
    <section id="secteurs" className="scroll-mt-20 bg-white">
      <div className="container-shell py-24 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Secteurs"
            title="Pensé pour les réalités du Maroc."
            lede="Chaque secteur a ses volumes, ses contraintes réglementaires et sa relation client. Les stratégies de recouvrement s'adaptent — la rigueur reste la même."
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-jabby-border bg-jabby-border sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => {
            const CaseIcon = useCase.icon;
            return (
              <Reveal key={useCase.title} delay={(index % 3) * 60} className="h-full">
                <article className="h-full bg-white p-7 transition-colors duration-300 hover:bg-jabby-bg/70">
                  <CaseIcon
                    className="h-5 w-5 text-jabby-blue"
                    strokeWidth={1.7}
                    aria-hidden
                  />
                  <h3 className="mt-4 text-base font-semibold tracking-[-0.01em] text-jabby-ink">
                    {useCase.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-jabby-muted">
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
