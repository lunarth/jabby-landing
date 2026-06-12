import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";

const commitments = [
  {
    number: "01",
    title: "Aucune action non prévue",
    text: "La plateforme n'exécute que des stratégies que vous avez définies et validées. Aucune relance n'est improvisée."
  },
  {
    number: "02",
    title: "Tout est journalisé",
    text: "Si une action n'est pas dans le journal d'audit, elle n'a pas eu lieu. C'est notre règle de conception la plus stricte."
  },
  {
    number: "03",
    title: "Vos données restent les vôtres",
    text: "Exportables à tout moment, dans des formats ouverts. La réversibilité fait partie du contrat, pas de la négociation."
  },
  {
    number: "04",
    title: "Respect du débiteur",
    text: "Le recouvrement amiable repose sur la constance et le respect, pas sur la pression. C'est aussi ce qui protège votre marque."
  }
];

export function Commitments() {
  return (
    <section id="engagements" className="scroll-mt-20 border-b border-jabby-border bg-white">
      <div className="container-shell py-24 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Engagements"
            title="Une activité sensible exige des engagements clairs."
            lede="Le recouvrement engage votre marque, votre conformité et votre relation client. Voici ce que nous garantissons, par conception."
          />
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((commitment, index) => (
            <Reveal key={commitment.number} delay={index * 70}>
              <article>
                <p className="text-sm font-semibold tabular-nums text-jabby-orange">
                  {commitment.number}
                </p>
                <h3 className="mt-3 text-base font-semibold tracking-[-0.01em] text-jabby-ink">
                  {commitment.title}
                </h3>
                <p className="mt-2.5 text-sm leading-6 text-jabby-muted">
                  {commitment.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
