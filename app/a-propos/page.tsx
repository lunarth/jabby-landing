import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { PageCta } from "@/components/ui/page-cta";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Pourquoi jabby existe : redonner aux entreprises marocaines le contrôle de leur trésorerie, avec un recouvrement amiable opéré, tracé et respectueux. Notre mission et nos engagements.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À propos | jabby",
    description:
      "Le recouvrement amiable méritait une infrastructure moderne. Nous la construisons au Maroc."
  }
};

const beliefs = [
  {
    number: "01",
    title: "Le résultat d'abord",
    text: "Une entreprise ne devrait payer son recouvrement que lorsqu'il produit du cash. Notre modèle au succès n'est pas un argument commercial : c'est notre discipline."
  },
  {
    number: "02",
    title: "La preuve plutôt que la promesse",
    text: "Chaque action est journalisée et chaque indicateur est traçable jusqu'au dossier. Ce qui ne peut pas être démontré n'est pas affirmé."
  },
  {
    number: "03",
    title: "Le respect comme méthode",
    text: "Un débiteur traité avec constance et respect paie plus souvent, et reste un client. La pression détruit de la valeur pour tout le monde."
  },
  {
    number: "04",
    title: "La technologie comme moyen",
    text: "Plateforme propriétaire, orchestration, intelligence artificielle : sous le capot, au service d'une seule chose, résoudre les dossiers proprement."
  }
];

export default function AProposPage() {
  return (
    <main>
      <PageHero
        eyebrow="À propos"
        title="Le recouvrement amiable méritait une infrastructure moderne"
        lede="jabby est né d'un constat simple : au Maroc, des dizaines de milliards de dirhams de créances attendent, tandis que les entreprises n'ont le choix qu'entre des relances artisanales et des prestataires opaques. Nous construisons la troisième voie."
      />

      {/* Mission */}
      <section className="bg-white">
        <div className="container-shell py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Notre mission"
                title="Redonner aux entreprises le contrôle de leur trésorerie"
              />
            </Reveal>
            <Reveal delay={80}>
              <div className="space-y-5 text-[17px] leading-8 text-jabby-muted">
                <p>
                  Les retards de paiement ne sont pas une fatalité comptable.
                  Ce sont des dossiers concrets, résolubles un par un, à
                  condition d&apos;y appliquer de la constance, de la méthode
                  et du respect.
                </p>
                <p>
                  Nous avons construit une plateforme qui opère cette méthode à
                  grande échelle : des séquences multicanales au nom de nos
                  clients, une négociation suivie jusqu&apos;à
                  l&apos;encaissement, et une preuve d&apos;audit pour chaque
                  action. Nos clients déposent leurs créances ; nous leur
                  rendons du cash et de la visibilité.
                </p>
                <p>
                  Nous commençons par le Maroc, où le besoin est immense et où
                  la relation client se joue sur WhatsApp et au téléphone, en
                  darija comme en français. L&apos;ambition est régionale :
                  faire du recouvrement amiable une infrastructure de confiance
                  pour l&apos;Afrique du Nord.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Convictions */}
      <section className="border-y border-jabby-border bg-jabby-bg">
        <div className="container-shell py-20 lg:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Nos convictions"
              title="Quatre principes qui ne se négocient pas"
            />
          </Reveal>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {beliefs.map((belief, index) => (
              <Reveal key={belief.number} delay={(index % 2) * 80}>
                <article>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold tabular-nums text-jabby-orange">
                      {belief.number}
                    </span>
                    <span className="h-px flex-1 bg-jabby-border" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-normal text-jabby-ink">
                    {belief.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-jabby-muted">
                    {belief.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCta />
    </main>
  );
}
