import type { Metadata } from "next";
import {
  Database,
  FileCheck,
  KeyRound,
  Lock,
  ScrollText,
  Server,
  ShieldCheck,
  UserCheck
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { PageCta } from "@/components/ui/page-cta";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";
import { AuditLog } from "@/components/visuals/audit-log";

export const metadata: Metadata = {
  title: "Sécurité et conformité",
  description:
    "Le dispositif de sécurité et de conformité de jabby : loi 09-08 et exigences CNDP, chiffrement, contrôle d'accès, journal d'audit exportable, supervision humaine, cadre contractuel de sous-traitance et réversibilité.",
  alternates: { canonical: "/securite" },
  openGraph: {
    title: "Sécurité et conformité | jabby",
    description:
      "Conçu pour des environnements régulés : traçabilité totale, protection des données, supervision humaine."
  }
};

const trustList = [
  {
    icon: ShieldCheck,
    title: "Loi 09-08 · CNDP",
    text: "Traitement des données personnelles aligné sur la loi 09-08 et les exigences de la CNDP, pour notre compte comme pour le vôtre."
  },
  {
    icon: FileCheck,
    title: "Cadre contractuel clair",
    text: "Mandat de recouvrement amiable et accord de traitement des données : jabby agit comme sous-traitant, avec des obligations explicites."
  },
  {
    icon: ScrollText,
    title: "Journal d'audit complet",
    text: "Chaque action horodatée, attribuée et exportable. Utilisable pour vos audits internes, externes et vos obligations déclaratives."
  },
  {
    icon: Lock,
    title: "Chiffrement",
    text: "Données chiffrées en transit et au repos, gestion stricte des clés et des secrets."
  },
  {
    icon: KeyRound,
    title: "Contrôle d'accès",
    text: "Permissions par rôle, authentification renforcée, séparation des environnements et principe du moindre privilège."
  },
  {
    icon: Database,
    title: "Conservation maîtrisée",
    text: "Politiques de rétention définies au contrat, suppressions documentées, droit d'accès et de rectification outillés."
  },
  {
    icon: UserCheck,
    title: "Supervision humaine",
    text: "Escalade systématique des litiges, situations de fragilité et dossiers à fort enjeu vers une revue humaine."
  },
  {
    icon: Server,
    title: "Réversibilité",
    text: "Vos créances, votre historique et votre journal d'audit sont exportables à tout moment, dans des formats ouverts."
  }
];

const channels = [
  {
    title: "Téléphonie",
    text: "Appels opérés sur une infrastructure de téléphonie cloud de niveau opérateur, avec numéros dédiés à votre entreprise"
  },
  {
    title: "WhatsApp",
    text: "Messages envoyés via la plateforme officielle WhatsApp Business, à travers un partenaire agréé, avec des modèles approuvés"
  },
  {
    title: "Paiement",
    text: "Liens de paiement sécurisés opérés avec les acteurs établis du paiement au Maroc, dont les réseaux NAPS et CMI"
  }
];

export default function SecuritePage() {
  return (
    <main>
      <PageHero
        eyebrow="Sécurité & conformité"
        title="Un dispositif conçu pour rendre des comptes"
        lede="Le recouvrement traite des données financières et personnelles sensibles. Notre dispositif est pensé pour votre direction des risques, vos auditeurs et vos régulateurs."
      />

      {/* Trust list */}
      <section className="bg-white">
        <div className="container-shell py-16 lg:py-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustList.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <Reveal key={item.title} delay={(index % 4) * 60}>
                  <article className="h-full rounded-2xl border border-jabby-border bg-white p-6 shadow-card">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-jabby-tintBlue text-jabby-blue">
                      <ItemIcon className="h-5 w-5" strokeWidth={1.7} aria-hidden />
                    </span>
                    <h2 className="mt-4 text-[15px] font-semibold text-jabby-ink">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-[13px] leading-6 text-jabby-muted">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journal d'audit */}
      <section className="border-y border-jabby-border bg-jabby-bg">
        <div className="container-shell py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <SectionHeading
                eyebrow="La preuve"
                title="Si ce n'est pas dans le journal, ce n'est pas arrivé"
                lede="Chaque appel, message, promesse et paiement est inscrit au journal d'audit : horodaté, attribué à un système ou à un opérateur, et exportable en un clic vers vos outils."
              />
            </Reveal>
            <Reveal delay={100}>
              <AuditLog />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Canaux officiels */}
      <section className="bg-white">
        <div className="container-shell py-20 lg:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Canaux officiels"
              title="Des canaux officiels, jamais de zones grises"
              lede="Toutes les communications passent par des infrastructures officielles et des partenaires établis. Aucun canal détourné, aucun numéro jetable."
            />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-jabby-border bg-jabby-border sm:grid-cols-3">
            {channels.map((channel) => (
              <div key={channel.title} className="bg-white p-7">
                <h3 className="text-base font-semibold text-jabby-ink">
                  {channel.title}
                </h3>
                <p className="mt-2.5 text-sm leading-6 text-jabby-muted">
                  {channel.text}
                </p>
              </div>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-8 rounded-2xl border border-jabby-blue/15 bg-jabby-tintBlue p-7">
              <p className="text-sm font-semibold text-jabby-blue">
                Votre rôle de responsable de traitement, préservé
              </p>
              <p className="mt-2.5 max-w-3xl text-[15px] leading-7 text-jabby-ink/85">
                Vous restez responsable de traitement de vos données clients ;
                jabby intervient comme sous-traitant, dans le périmètre défini
                par le mandat de recouvrement et l&apos;accord de traitement.
                Les débiteurs disposent d&apos;une page dédiée pour exercer
                leurs droits d&apos;accès, de rectification et d&apos;opposition.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <PageCta
        title="Votre équipe conformité a des questions"
        lede="Nous y répondons volontiers : documentation, cadre contractuel, revue du dispositif. Écrivez-nous."
      />
    </main>
  );
}
