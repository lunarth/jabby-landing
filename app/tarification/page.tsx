import type { Metadata } from "next";
import { CircleCheck } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { PageCta } from "@/components/ui/page-cta";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Tarification au succès",
  description:
    "Le modèle de tarification de jabby : aucun frais d'installation, aucun abonnement, une commission uniquement sur les montants effectivement recouvrés, définie au cadrage selon votre portefeuille.",
  alternates: { canonical: "/tarification" },
  openGraph: {
    title: "Tarification | jabby",
    description:
      "Vous ne payez qu'au résultat : pas de frais fixes, une commission sur le recouvré, des intérêts alignés."
  }
};

const principles = [
  {
    number: "01",
    title: "Zéro coût d'entrée",
    text: "Pas de frais d'installation, pas d'abonnement, pas de minimum facturé. Le cadrage et la mise en route sont inclus."
  },
  {
    number: "02",
    title: "Commission sur le recouvré",
    text: "Notre rémunération est un pourcentage des montants effectivement encaissés. Rien de recouvré, rien de facturé."
  },
  {
    number: "03",
    title: "Taux défini au cadrage",
    text: "Le taux dépend de l'ancienneté des créances, des montants unitaires et du volume confié. Il est fixé contractuellement, avant le premier dossier."
  }
];

const included = [
  "Orchestration multicanale : appels, WhatsApp, SMS, email",
  "Numéros et infrastructure d'envoi au nom de votre entreprise",
  "Négociation et suivi des promesses de paiement",
  "Liens de paiement sécurisés",
  "Tableau de bord en temps réel",
  "Journal d'audit complet et exportable",
  "Réconciliation des encaissements",
  "Reporting aligné sur vos clôtures"
];

const objections = [
  {
    question: "Et si vous ne récupérez rien ?",
    answer:
      "Vous ne payez rien. Le risque de performance est intégralement le nôtre : c'est le principe du modèle, et c'est ce qui garantit que nous ne prenons en charge que des portefeuilles où nous pensons pouvoir créer de la valeur."
  },
  {
    question: "Pourquoi ne pas afficher un taux public ?",
    answer:
      "Parce qu'un taux honnête dépend de votre portefeuille : une créance B2B de 60 jours et un arriéré de 18 mois n'ont ni le même travail, ni le même taux. Un chiffre unique affiché serait soit trompeur, soit défavorable pour vous. Le cadrage est gratuit et aboutit à une proposition écrite."
  },
  {
    question: "Y a-t-il des coûts cachés ?",
    answer:
      "Non. Les canaux, la plateforme, le reporting et l'export de vos données sont inclus. La commission sur les montants recouvrés est votre seul coût, défini au contrat."
  }
];

export default function TarificationPage() {
  return (
    <main>
      <PageHero
        eyebrow="Tarification"
        title="Vous ne payez qu'au résultat"
        lede="Pas de frais fixes, pas d'abonnement : une commission sur les montants effectivement recouvrés. Nos intérêts sont alignés avec les vôtres, dossier par dossier."
      />

      {/* Principes */}
      <section className="bg-white">
        <div className="container-shell py-16 lg:py-20">
          <div className="grid gap-x-8 gap-y-10 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <Reveal key={principle.number} delay={index * 80}>
                <article>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold tabular-nums text-jabby-orange">
                      {principle.number}
                    </span>
                    <span className="h-px flex-1 bg-jabby-border" aria-hidden />
                  </div>
                  <h2 className="mt-5 text-lg font-semibold tracking-normal text-jabby-ink">
                    {principle.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-7 text-jabby-muted">
                    {principle.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inclus */}
      <section className="border-y border-jabby-border bg-jabby-bg">
        <div className="container-shell py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Ce qui est inclus"
                title="Tout le service, sans option payante"
                lede="La commission couvre l'intégralité du dispositif. Aucune ligne de facturation additionnelle."
              />
            </Reveal>
            <Reveal delay={90}>
              <ul className="grid gap-x-8 gap-y-3.5 rounded-2xl border border-jabby-border bg-white p-7 shadow-card sm:grid-cols-2 sm:p-8">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[15px] leading-6 text-jabby-ink"
                  >
                    <CircleCheck
                      className="mt-0.5 h-[18px] w-[18px] shrink-0 text-jabby-success"
                      strokeWidth={1.8}
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Objections */}
      <section className="bg-white">
        <div className="container-shell py-20 lg:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="En toute transparence"
              title="Les questions que vous devez poser"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {objections.map((objection, index) => (
              <Reveal key={objection.question} delay={index * 80}>
                <article className="h-full rounded-2xl border border-jabby-border bg-white p-7 shadow-card">
                  <h3 className="text-base font-semibold text-jabby-ink">
                    {objection.question}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-jabby-muted">
                    {objection.answer}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Obtenez votre proposition"
        lede="Un cadrage gratuit de votre portefeuille, une proposition écrite avec un taux ferme. Sans engagement."
      />
    </main>
  );
}
