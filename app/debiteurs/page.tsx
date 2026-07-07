import type { Metadata } from "next";
import {
  HandHeart,
  Landmark,
  Lock,
  Mail,
  MessageCircle,
  ShieldCheck
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Vous avez été contacté au sujet d'un paiement",
  description:
    "Informations pour les personnes contactées dans le cadre d'un recouvrement amiable opéré par jabby : vérifier l'authenticité d'un message, payer en sécurité, demander un échéancier et exercer vos droits CNDP.",
  alternates: { canonical: "/debiteurs" },
  openGraph: {
    title: "Pour les débiteurs | jabby",
    description:
      "Vérifier un message, payer en sécurité, demander un échéancier, exercer vos droits. Nous sommes là pour trouver une solution, pas pour mettre la pression."
  }
};

const safety = [
  {
    icon: ShieldCheck,
    title: "Vérifier l'authenticité",
    text: "Les messages sont envoyés au nom de l'entreprise à laquelle vous devez un paiement, avec la référence de votre dossier. En cas de doute, contactez directement cette entreprise ou écrivez-nous : nous confirmons ou infirmons tout message."
  },
  {
    icon: Lock,
    title: "Payer en sécurité",
    text: "Les liens de paiement mènent exclusivement vers des pages de paiement sécurisées opérées avec des partenaires établis au Maroc. Nous ne demandons jamais de virement vers un compte personnel, ni vos codes bancaires par téléphone ou message."
  },
  {
    icon: MessageCircle,
    title: "Demander un échéancier",
    text: "Si vous ne pouvez pas régler en une fois, dites-le simplement lors d'un appel ou en répondant à un message : un échéancier adapté peut être convenu et sera respecté de notre côté."
  },
  {
    icon: HandHeart,
    title: "Signaler une difficulté",
    text: "Situation exceptionnelle, litige sur le montant, contestation : signalez-le. Les relances s'arrêtent le temps qu'une personne examine votre dossier."
  }
];

const rights = [
  {
    title: "Droit d'accès",
    text: "Savoir quelles données vous concernant sont traitées dans le cadre de votre dossier"
  },
  {
    title: "Droit de rectification",
    text: "Faire corriger une information inexacte, par exemple un montant déjà réglé"
  },
  {
    title: "Droit d'opposition",
    text: "Vous opposer à un traitement dans les conditions prévues par la loi 09-08"
  }
];

export default function DebiteursPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pour les débiteurs"
        title="Vous avez été contacté au sujet d'un paiement"
        lede="jabby accompagne des entreprises marocaines dans le suivi amiable de leurs paiements en retard. Si vous avez reçu un appel ou un message, cette page vous explique qui nous sommes, comment payer en sécurité et comment exercer vos droits."
      />

      {/* Qui sommes-nous */}
      <section className="bg-white">
        <div className="container-shell py-16 lg:py-20">
          <Reveal>
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Qui nous sommes"
                title="Un intermédiaire mandaté, pas un inconnu"
                lede="Nous intervenons uniquement à la demande de l'entreprise envers laquelle un paiement est dû, dans un cadre exclusivement amiable. Notre rôle est de trouver une solution qui convienne aux deux parties : un paiement, un échéancier, ou la clarification d'un désaccord."
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sécurité pratique */}
      <section className="border-y border-jabby-border bg-jabby-bg">
        <div className="container-shell py-20 lg:py-24">
          <div className="grid gap-5 sm:grid-cols-2">
            {safety.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <Reveal key={item.title} delay={(index % 2) * 80}>
                  <article className="h-full rounded-2xl border border-jabby-border bg-white p-7 shadow-card">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-jabby-tintBlue text-jabby-blue">
                      <ItemIcon className="h-5 w-5" strokeWidth={1.7} aria-hidden />
                    </span>
                    <h2 className="mt-4 text-base font-semibold text-jabby-ink">
                      {item.title}
                    </h2>
                    <p className="mt-2.5 text-[15px] leading-7 text-jabby-muted">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Droits CNDP */}
      <section className="bg-white">
        <div className="container-shell py-20 lg:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Vos droits"
              title="Vos droits sur vos données"
              lede="Conformément à la loi 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, vous disposez des droits suivants."
            />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-jabby-border bg-jabby-border sm:grid-cols-3">
            {rights.map((right) => (
              <div key={right.title} className="bg-white p-7">
                <Landmark className="h-5 w-5 text-jabby-blue" strokeWidth={1.7} aria-hidden />
                <h3 className="mt-4 text-base font-semibold text-jabby-ink">
                  {right.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-jabby-muted">
                  {right.text}
                </p>
              </div>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-jabby-blue/15 bg-jabby-tintBlue p-7 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-semibold text-jabby-blue">
                  Pour exercer vos droits ou poser une question
                </p>
                <p className="mt-1.5 text-[15px] leading-7 text-jabby-ink/85">
                  Écrivez-nous en précisant la référence de votre dossier. Nous
                  répondons sous 48 heures ouvrées.
                </p>
              </div>
              <a
                href="mailto:debiteurs@jabby.io"
                className="focus-ring inline-flex h-11 shrink-0 items-center gap-2 rounded-lg bg-jabby-blue px-5 text-sm font-semibold text-white transition-colors hover:bg-jabby-blueHover"
              >
                <Mail className="h-4 w-4" strokeWidth={1.8} aria-hidden />
                debiteurs@jabby.io
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Engagement */}
      <section className="border-t border-jabby-border bg-jabby-navy">
        <div className="container-shell py-16 lg:py-20">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-eyebrow text-white/60">
                Notre engagement
              </p>
              <p className="mt-5 text-2xl font-semibold leading-[1.3] tracking-normal text-white sm:text-[28px]">
                Un retard de paiement est une situation à résoudre, pas une
                faute à punir
              </p>
              <p className="mt-4 text-base leading-7 text-white/70">
                Nos échanges sont fondés sur le respect et la recherche de
                solution. Jamais de pression, jamais de menace, jamais de
                contact en dehors des horaires convenables.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
