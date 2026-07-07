import type { Metadata } from "next";
import {
  Briefcase,
  Building2,
  Coins,
  GraduationCap,
  HeartPulse,
  Landmark,
  Phone,
  Umbrella
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { PageCta } from "@/components/ui/page-cta";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Secteurs",
  description:
    "Recouvrement amiable opéré pour l'éducation privée, la santé privée, la distribution B2B, la microfinance, le financement, l'assurance, l'immobilier et les télécoms au Maroc.",
  alternates: { canonical: "/secteurs" },
  openGraph: {
    title: "Secteurs | jabby",
    description:
      "Chaque secteur a ses créances, ses contraintes et sa relation client. La rigueur reste la même."
  }
};

const sectors = [
  {
    icon: GraduationCap,
    title: "Éducation privée",
    pain: "Des scolarités impayées qui s'accumulent, et des équipes administratives mal à l'aise pour relancer des familles qu'elles côtoient.",
    claims: "Frais de scolarité, transport, cantine, activités",
    angle: "Rappels réguliers et mesurés au nom de l'établissement, échéanciers proposés avant l'escalade",
    benefit: "La trésorerie rentre, la relation avec les familles reste intacte"
  },
  {
    icon: HeartPulse,
    title: "Santé privée",
    pain: "Des restes à charge dispersés sur des milliers de patients, que personne n'a le temps de suivre après la sortie.",
    claims: "Restes à charge, dépassements, actes non couverts",
    angle: "Relances discrètes et respectueuses, lien de paiement immédiat, aucun soignant mobilisé",
    benefit: "Des encaissements récupérés sans friction avec les patients"
  },
  {
    icon: Briefcase,
    title: "Distribution & services B2B",
    pain: "Des factures à 60, 90, 120 jours, des relances commerciales gênées par la relation d'affaires, un DSO qui dérive.",
    claims: "Factures commerciales, situations de travaux, prestations récurrentes",
    angle: "Constance professionnelle au nom de votre société, promesses datées et suivies",
    benefit: "Un DSO repris en main sans brûler la relation commerciale"
  },
  {
    icon: Coins,
    title: "Microfinance",
    pain: "Des portefeuilles très granulaires où chaque dirham de coût de recouvrement compte, et où le respect de l'emprunteur est réglementairement scruté.",
    claims: "Échéances de microcrédits, arriérés early-stage",
    angle: "Séquences à coût maîtrisé, darija et français, escalade humaine sur la fragilité",
    benefit: "Un coût par dossier soutenable, une conduite irréprochable"
  },
  {
    icon: Landmark,
    title: "Sociétés de financement & leasing",
    pain: "Des volumes importants, des échéanciers complexes et des exigences de reporting que les prestataires classiques ne savent pas documenter.",
    claims: "Loyers de leasing, échéances de crédit, indemnités",
    angle: "Industrialisation des relances early-stage, journal d'audit aligné sur vos contrôles",
    benefit: "Du volume traité avec la traçabilité qu'exige votre régulateur"
  },
  {
    icon: Umbrella,
    title: "Assurance",
    pain: "Des primes impayées qui érodent le portefeuille, et une fonction conformité qui exige des preuves sur chaque contact.",
    claims: "Primes et quittances, franchises, indus",
    angle: "Relances documentées de bout en bout, conservation maîtrisée des échanges",
    benefit: "Un recouvrement défendable en audit interne comme externe"
  },
  {
    icon: Building2,
    title: "Immobilier",
    pain: "Des loyers et charges en retard, et des gestionnaires pris entre la pression des propriétaires et la relation locataire.",
    claims: "Loyers, charges de copropriété, indemnités d'occupation",
    angle: "Relances neutres et régulières au nom du gestionnaire, échéanciers cadrés",
    benefit: "Des encaissements réguliers sans conflit de voisinage"
  },
  {
    icon: Phone,
    title: "Télécom & abonnements",
    pain: "Des petites créances massives dont le coût de traitement dépasse vite le montant unitaire.",
    claims: "Factures d'abonnement, terminaux, résiliations",
    angle: "Automatisation complète du early-stage, paiement en un clic",
    benefit: "Un segment enfin rentable à recouvrer"
  }
];

export default function SecteursPage() {
  return (
    <main>
      <PageHero
        eyebrow="Secteurs"
        title="Chaque secteur a ses créances, la rigueur reste la même"
        lede="Les stratégies de relance, la tonalité et les canaux s'adaptent à votre métier. Le socle ne change pas : identité first-party, traçabilité totale, respect du débiteur, rémunération au succès."
      />

      <section className="bg-white">
        <div className="container-shell py-16 lg:py-20">
          <div className="grid gap-5 lg:grid-cols-2">
            {sectors.map((sector, index) => {
              const SectorIcon = sector.icon;
              return (
                <Reveal key={sector.title} delay={(index % 2) * 80}>
                  <article className="h-full rounded-2xl border border-jabby-border bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-lift sm:p-8">
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-jabby-tintBlue text-jabby-blue">
                        <SectorIcon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                      </span>
                      <h2 className="text-lg font-semibold tracking-normal text-jabby-ink">
                        {sector.title}
                      </h2>
                    </div>
                    <p className="mt-5 text-[15px] leading-7 text-jabby-muted">
                      {sector.pain}
                    </p>
                    <dl className="mt-6 space-y-3 border-t border-jabby-border pt-5 text-sm">
                      <div className="grid grid-cols-[110px_1fr] gap-3">
                        <dt className="font-semibold text-jabby-faint">Créances</dt>
                        <dd className="leading-6 text-jabby-ink/85">{sector.claims}</dd>
                      </div>
                      <div className="grid grid-cols-[110px_1fr] gap-3">
                        <dt className="font-semibold text-jabby-faint">Approche</dt>
                        <dd className="leading-6 text-jabby-ink/85">{sector.angle}</dd>
                      </div>
                      <div className="grid grid-cols-[110px_1fr] gap-3">
                        <dt className="font-semibold text-jabby-faint">Résultat</dt>
                        <dd className="font-medium leading-6 text-jabby-blue">
                          {sector.benefit}
                        </dd>
                      </div>
                    </dl>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <PageCta
        title="Votre secteur a ses spécificités"
        lede="Parlons de vos créances, de vos contraintes réglementaires et de votre relation client. Nous adaptons la stratégie au cadrage."
      />
    </main>
  );
}
