import type { Metadata } from "next";
import { CircleCheck, X } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { PageCta } from "@/components/ui/page-cta";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";
import { CaseTimeline } from "@/components/visuals/case-timeline";
import { ChannelFlow } from "@/components/visuals/channel-flow";

export const metadata: Metadata = {
  title: "Comment ça marche",
  description:
    "Le parcours d'un dossier chez jabby : dépôt sécurisé, stratégie validée, relances multicanales au nom de votre entreprise, négociation, encaissement et réconciliation. Vous ne gérez rien.",
  alternates: { canonical: "/comment-ca-marche" },
  openGraph: {
    title: "Comment ça marche | jabby",
    description:
      "De votre fichier de créances à votre trésorerie : un service opéré de bout en bout, tracé à chaque action."
  }
};

const clientSide = [
  "Déposer les créances, par fichier sécurisé ou API",
  "Valider la stratégie de relance et les scripts",
  "Suivre le tableau de bord et encaisser"
];

const jabbySide = [
  "Vérification, déduplication et segmentation des dossiers",
  "Numéros, canaux et infrastructure d'envoi",
  "Appels, WhatsApp, SMS et email, au nom de votre entreprise",
  "Négociation des promesses et des échéanciers",
  "Liens de paiement sécurisés dans chaque relance",
  "Escalade humaine sur les cas sensibles",
  "Journalisation de chaque action",
  "Réconciliation des paiements et reporting"
];

const steps = [
  {
    number: "01",
    title: "Dépôt sécurisé",
    text: "Vous transmettez vos créances par fichier chiffré ou API. Nous vérifions, dédupliquons et segmentons chaque dossier : ancienneté, montant, historique, profil de débiteur."
  },
  {
    number: "02",
    title: "Stratégie validée ensemble",
    text: "Séquences, tonalité, scripts, plafonds de fréquence, plages horaires, règles d'escalade : rien ne part sans votre validation. Vous gardez le contrôle, nous portons l'exécution."
  },
  {
    number: "03",
    title: "Orchestration multicanale",
    text: "L'appel d'abord, puis WhatsApp, SMS et email en rattrapage. Chaque relance part au nom de votre entreprise et inclut un lien de paiement sécurisé. Les séquences s'adaptent aux réponses, dans le cadre défini."
  },
  {
    number: "04",
    title: "Résolution et promesses",
    text: "Les promesses de paiement sont négociées, enregistrées et suivies jusqu'à l'encaissement. Les litiges et situations de fragilité sont escaladés en revue humaine, immédiatement."
  },
  {
    number: "05",
    title: "Encaissement et réconciliation",
    text: "Les paiements sont réconciliés dossier par dossier et remontent dans votre tableau de bord et vos systèmes. Notre commission ne porte que sur les montants recouvrés."
  }
];

const humanAi = [
  {
    title: "Ce que la plateforme fait",
    items: [
      "Priorise les dossiers et cadence les séquences",
      "Exécute les relances aux moments prévus",
      "Adapte le canal selon les réponses, dans vos règles",
      "Journalise chaque action, sans exception"
    ]
  },
  {
    title: "Ce que l'humain décide",
    items: [
      "La stratégie et les scripts, validés avec vous",
      "Les cas sensibles : litiges, fragilité, fort enjeu",
      "Les négociations d'échéanciers complexes",
      "Les arbitrages de fin de parcours amiable"
    ]
  }
];

export default function CommentCaMarchePage() {
  return (
    <main>
      <PageHero
        eyebrow="Comment ça marche"
        title="De votre fichier de créances à votre trésorerie"
        lede="Un service opéré de bout en bout : vous déposez vos créances, nous orchestrons la résolution, vous suivez tout en temps réel."
      />

      {/* Vous / Nous */}
      <section className="bg-white">
        <div className="container-shell py-16 lg:py-20">
          <div className="grid gap-5 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <article className="h-full rounded-2xl border border-jabby-border bg-jabby-bg/60 p-7">
                <p className="text-xs font-semibold uppercase tracking-eyebrow text-jabby-faint">
                  Ce que vous faites
                </p>
                <ul className="mt-5 space-y-3.5">
                  {clientSide.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] leading-6 text-jabby-ink">
                      <CircleCheck
                        className="mt-0.5 h-[18px] w-[18px] shrink-0 text-jabby-blue"
                        strokeWidth={1.8}
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-jabby-border pt-5 text-sm font-semibold text-jabby-blue">
                  Trois actions. C&apos;est tout.
                </p>
              </article>
            </Reveal>
            <Reveal delay={90}>
              <article className="h-full rounded-2xl border border-jabby-border bg-white p-7 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-eyebrow text-jabby-faint">
                  Ce que nous opérons
                </p>
                <ul className="mt-5 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                  {jabbySide.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] leading-6 text-jabby-ink">
                      <CircleCheck
                        className="mt-0.5 h-[18px] w-[18px] shrink-0 text-jabby-success"
                        strokeWidth={1.8}
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5 étapes */}
      <section className="border-y border-jabby-border bg-jabby-bg">
        <div className="container-shell py-20 lg:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Le parcours"
              title="Cinq étapes, une exécution rigoureuse"
            />
          </Reveal>
          <ol className="mt-12 space-y-0">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 60}>
                <li className="grid gap-3 border-t border-jabby-border py-7 sm:grid-cols-[110px_260px_1fr] sm:gap-8 lg:py-8">
                  <span className="text-sm font-semibold tabular-nums text-jabby-orange">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold tracking-normal text-jabby-ink">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-7 text-jabby-muted">
                    {step.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Timeline + multicanal */}
      <section className="bg-white">
        <div className="container-shell py-20 lg:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Un dossier type"
              title="Huit jours, cinq actions, une preuve pour chacune"
              lede="Chaque étape est horodatée et inscrite au journal d'audit. Voici à quoi ressemble une résolution."
            />
          </Reveal>
          <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1fr_1.2fr]">
            <Reveal delay={80}>
              <CaseTimeline />
            </Reveal>
            <Reveal delay={140}>
              <ChannelFlow />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Humain / IA */}
      <section className="border-t border-jabby-border bg-jabby-bg">
        <div className="container-shell py-20 lg:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="La place de l'humain et de la technologie"
              title="La plateforme exécute, l'humain arbitre"
              lede="L'intelligence artificielle est un moyen : elle priorise et cadence. Les décisions sensibles restent humaines, par conception."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {humanAi.map((block, blockIndex) => (
              <Reveal key={block.title} delay={blockIndex * 90}>
                <article className="h-full rounded-2xl border border-jabby-border bg-white p-7 shadow-card">
                  <h3 className="text-base font-semibold text-jabby-ink">
                    {block.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[15px] leading-6 text-jabby-muted"
                      >
                        <span
                          className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-jabby-orange"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-jabby-blue/15 bg-jabby-tintBlue p-6">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-jabby-blue" strokeWidth={2} aria-hidden />
              <p className="text-[15px] leading-7 text-jabby-ink/85">
                Aucune action improvisée : la plateforme n&apos;exécute que des
                stratégies validées par vous. Tout écart passe par une revue
                humaine.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <PageCta />
    </main>
  );
}
