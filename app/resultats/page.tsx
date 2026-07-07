import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { PageCta } from "@/components/ui/page-cta";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Résultats et méthode de mesure",
  description:
    "Comment jabby mesure sa performance de recouvrement : cohortes comparées, indicateurs vérifiables jusqu'au dossier, rémunération au résultat. Aucun chiffre que nous ne pouvons démontrer.",
  alternates: { canonical: "/resultats" },
  openGraph: {
    title: "Résultats | jabby",
    description:
      "La preuve avant la promesse : notre logique de mesure est publique, nos indicateurs sont traçables jusqu'au dossier."
  }
};

const method = [
  {
    number: "01",
    title: "Cohorte figée au cadrage",
    text: "Un lot représentatif de créances, défini avant la première relance"
  },
  {
    number: "02",
    title: "Comparaison honnête",
    text: "Mesurée contre votre processus actuel, à périmètre égal"
  },
  {
    number: "03",
    title: "Traçable jusqu'au dossier",
    text: "Chaque indicateur se décompose action par action, dans le journal"
  }
];

const segments = [
  { label: "Encaissé", value: 46, className: "bg-jabby-success", text: "text-jabby-success" },
  { label: "Promesses en cours", value: 22, className: "bg-jabby-blue", text: "text-jabby-blue" },
  { label: "Litiges identifiés", value: 9, className: "bg-jabby-orange", text: "text-jabby-orangeDark" },
  { label: "À relancer", value: 23, className: "bg-jabby-faint", text: "text-jabby-muted" }
];

function CohortVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-jabby-border bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-jabby-border bg-jabby-bg/60 px-5 py-3.5">
        <p className="text-sm font-semibold text-jabby-ink">Lecture d&apos;une cohorte</p>
        <span className="rounded-full bg-jabby-tintBlue px-2.5 py-1 text-[11px] font-semibold text-jabby-blue">
          Exemple illustratif
        </span>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex h-4 w-full gap-0.5 overflow-hidden rounded-full">
          {segments.map((segment) => (
            <div
              key={segment.label}
              className={segment.className}
              style={{ width: `${segment.value}%` }}
            />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
          {segments.map((segment) => (
            <div key={segment.label}>
              <p className={`text-lg font-semibold tabular-nums tracking-normal ${segment.text}`}>
                {segment.value} %
              </p>
              <p className="mt-0.5 text-[12px] leading-4 text-jabby-muted">
                {segment.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-5 border-t border-jabby-border pt-4 text-[12px] leading-5 text-jabby-faint">
          Répartition illustrative d&apos;un portefeuille, en montant. Vos
          chiffres réels, chaque semaine, dossier par dossier.
        </p>
      </div>
    </div>
  );
}

const indicators = [
  { name: "Taux de résolution", definition: "Part des créances confiées, encaissée" },
  { name: "Délai de premier paiement", definition: "Du dépôt au premier encaissement" },
  { name: "Impact DSO", definition: "Évolution du délai moyen de recouvrement" },
  { name: "Taux de contact", definition: "Débiteurs effectivement joints, tous canaux" },
  { name: "Tenue des promesses", definition: "Promesses honorées à l'échéance" },
  { name: "Coût par dirham recouvré", definition: "La commission, votre seul coût" }
];

const commitments = [
  {
    title: "Premier contact sous 48 h",
    label: "Engagement de service",
    text: "Les premières relances partent sous deux jours ouvrés après validation du lot"
  },
  {
    title: "100 % des actions journalisées",
    label: "Par conception",
    text: "Horodatées, attribuées, exportables à tout moment"
  },
  {
    title: "Reporting continu",
    label: "Engagement de service",
    text: "Tableau de bord en temps réel, synthèse alignée sur vos clôtures"
  }
];

export default function ResultatsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Résultats"
        title="La preuve avant la promesse"
        lede="Aucun chiffre de performance que nous ne pouvons démontrer sur des données réelles. Voici comment nous mesurons."
      />

      {/* Méthode + visuel de cohorte */}
      <section className="bg-white">
        <div className="container-shell py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="La méthode"
                  title="Une mesure que votre audit peut refaire"
                />
              </Reveal>
              <div className="mt-9 space-y-7">
                {method.map((item, index) => (
                  <Reveal key={item.number} delay={index * 80}>
                    <div className="flex gap-4">
                      <span className="text-sm font-semibold tabular-nums text-jabby-orange">
                        {item.number}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold tracking-normal text-jabby-ink">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-jabby-muted">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={120}>
              <CohortVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Indicateurs */}
      <section className="border-y border-jabby-border bg-jabby-bg">
        <div className="container-shell py-16 lg:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="Les indicateurs"
              title="Six indicateurs, une définition publique"
            />
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-jabby-border bg-jabby-border sm:grid-cols-2 lg:grid-cols-3">
            {indicators.map((indicator, index) => (
              <Reveal key={indicator.name} delay={(index % 3) * 60} className="h-full">
                <article className="h-full bg-white p-6">
                  <h3 className="text-[15px] font-semibold text-jabby-ink">
                    {indicator.name}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-5 text-jabby-muted">
                    {indicator.definition}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="bg-white">
        <div className="container-shell py-16 lg:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="Nos engagements"
              title="Garantis dès le premier jour"
              lede="Des engagements de service, pas des performances passées. Les résultats clients seront publiés ici avec leur accord écrit."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {commitments.map((commitment, index) => (
              <Reveal key={commitment.title} delay={index * 80}>
                <article className="h-full rounded-2xl border border-jabby-border bg-white p-6 shadow-card">
                  <span className="inline-flex rounded-full bg-jabby-tintBlue px-2.5 py-1 text-[11px] font-semibold text-jabby-blue">
                    {commitment.label}
                  </span>
                  <h3 className="mt-3.5 text-[17px] font-semibold tracking-normal text-jabby-ink">
                    {commitment.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-jabby-muted">
                    {commitment.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <div className="mt-8 rounded-2xl border border-jabby-blue/15 bg-jabby-tintBlue p-6">
              <p className="text-sm font-semibold text-jabby-blue">
                L&apos;alignement, notre meilleure garantie
              </p>
              <p className="mt-2 max-w-3xl text-[15px] leading-7 text-jabby-ink/85">
                Notre rémunération ne porte que sur les montants effectivement
                recouvrés. Si nous ne performons pas, vous ne payez pas.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <PageCta
        title="Évaluons votre portefeuille"
        lede="Un extrait anonymisé de vos créances suffit pour cadrer la cohorte de mesure. Sans engagement."
      />
    </main>
  );
}
