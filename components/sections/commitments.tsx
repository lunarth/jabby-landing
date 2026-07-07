import {
  Database,
  HeartHandshake,
  ScrollText,
  SlidersHorizontal
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";

const commitments = [
  {
    number: "01",
    icon: SlidersHorizontal,
    title: "Aucune action non prévue",
    text: "Nous n'exécutons que des stratégies que vous avez validées."
  },
  {
    number: "02",
    icon: ScrollText,
    title: "Tout est journalisé",
    text: "Si une action n'est pas dans le journal d'audit, elle n'a pas eu lieu."
  },
  {
    number: "03",
    icon: Database,
    title: "Vos données restent les vôtres",
    text: "Exportables à tout moment, dans des formats ouverts."
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Respect du débiteur",
    text: "La constance et le respect, jamais la pression. C'est ce qui protège votre marque."
  }
];

export function Commitments() {
  return (
    <section id="engagements" className="scroll-mt-20 border-y border-jabby-border bg-jabby-bg">
      <div className="container-shell py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Engagements"
            title="Une activité sensible exige des engagements clairs"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((commitment, index) => {
            const CommitmentIcon = commitment.icon;
            return (
              <Reveal key={commitment.number} delay={index * 70}>
                <article className="group h-full rounded-2xl border border-jabby-border bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-lift">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-jabby-tintBlue text-jabby-blue transition-colors duration-300 group-hover:bg-jabby-blue group-hover:text-white">
                      <CommitmentIcon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                    </span>
                    <span className="text-sm font-semibold tabular-nums text-jabby-orange">
                      {commitment.number}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold tracking-normal text-jabby-ink">
                    {commitment.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-jabby-muted">
                    {commitment.text}
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
