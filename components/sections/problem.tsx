import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";
import { StatValue, type StatPart } from "@/components/visuals/stat-value";

const stats: Array<{
  parts: StatPart[];
  srValue: string;
  label: string;
}> = [
  {
    parts: [{ text: "≈ " }, { count: 100 }, { text: " Mds MAD" }],
    srValue: "Environ 100 milliards de dirhams",
    label: "de créances en souffrance dans le système bancaire marocain"
  },
  {
    parts: [{ count: 60 }, { text: " à " }, { count: 120 }, { text: " jours" }],
    srValue: "60 à 120 jours",
    label: "de délais de paiement couramment constatés entre entreprises"
  },
  {
    parts: [{ text: "Loi 69-21" }],
    srValue: "Loi 69-21",
    label: "déclarations obligatoires sur les délais de paiement, avec sanctions"
  },
  {
    parts: [{ count: 250000 }, { text: " MAD" }],
    srValue: "250 000 dirhams",
    label: "d'amende encourue en cas de non-conformité déclarative"
  }
];

const frictions = [
  "Relances dispersées entre tableurs, emails et appels non tracés",
  "Prestataires opaques qui exposent votre marque",
  "Aucune preuve de ce qui a été fait, quand, et par qui"
];

export function Problem() {
  return (
    <section id="constat" className="scroll-mt-20 bg-white">
      <div className="container-shell py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Le constat"
            title="Les impayés sont devenus un risque structurel"
            lede="Les délais s'allongent, la pression réglementaire augmente, et les méthodes traditionnelles ne protègent plus la trésorerie."
          />
        </Reveal>

        <Reveal delay={80}>
          <dl className="mt-12 grid divide-y divide-jabby-border border-y border-jabby-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {stats.map((stat, index) => (
              <div key={stat.label} className="px-1 py-7 sm:px-6 lg:first:pl-0">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <StatValue
                    parts={stat.parts}
                    srValue={stat.srValue}
                    delay={index * 140}
                  />
                  <p className="mt-2.5 text-sm leading-6 text-jabby-muted">
                    {stat.label}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={140}>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {frictions.map((friction) => (
              <li
                key={friction}
                className="flex items-center gap-2.5 text-sm font-medium text-jabby-ink/75"
              >
                <span className="h-1 w-1 rounded-full bg-jabby-orange" aria-hidden />
                {friction}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
