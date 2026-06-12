import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";

const stats = [
  {
    value: "97,4 Mds MAD",
    label: "de créances en souffrance dans le système bancaire marocain"
  },
  {
    value: "60 à 120 jours",
    label: "de délais de paiement couramment constatés entre entreprises"
  },
  {
    value: "Loi 69-21",
    label: "un cadre renforcé sur les délais de paiement, avec sanctions"
  },
  {
    value: "250 000 MAD",
    label: "d'amende encourue en cas de non-conformité déclarative"
  }
];

const frictions = [
  {
    title: "Des relances dispersées",
    text: "Tableurs, boîtes mail, appels non tracés : le recouvrement repose sur des efforts individuels, impossibles à industrialiser."
  },
  {
    title: "Aucune traçabilité",
    text: "Qui a relancé qui, quand, sur quel canal, avec quel résultat ? Sans journal d'audit, personne ne peut le démontrer."
  },
  {
    title: "Des prestataires opaques",
    text: "Externaliser sans visibilité expose votre marque et votre relation client à des pratiques que vous ne contrôlez pas."
  }
];

export function Problem() {
  return (
    <section id="constat" className="scroll-mt-20 bg-white">
      <div className="container-shell py-24 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Le constat"
            title="Les retards de paiement sont devenus un risque structurel."
            lede="Au Maroc, les délais s'allongent, la pression réglementaire augmente, et les méthodes traditionnelles ne suffisent plus à protéger la trésorerie."
          />
        </Reveal>

        <Reveal delay={80}>
          <dl className="mt-14 grid divide-y divide-jabby-border border-y border-jabby-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {stats.map((stat) => (
              <div key={stat.value} className="px-1 py-7 sm:px-6 lg:first:pl-0">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <p className="text-[26px] font-semibold tabular-nums tracking-[-0.02em] text-jabby-ink">
                    {stat.value}
                  </p>
                  <p className="mt-2.5 text-sm leading-6 text-jabby-muted">
                    {stat.label}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {frictions.map((friction, index) => (
            <Reveal key={friction.title} delay={index * 70}>
              <article className="h-full rounded-2xl border border-jabby-border bg-jabby-bg/60 p-7">
                <span
                  className="block h-0.5 w-8 rounded-full bg-jabby-orange"
                  aria-hidden
                />
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em] text-jabby-ink">
                  {friction.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-jabby-muted">
                  {friction.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
