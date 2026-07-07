import { Fingerprint, Lock, ScrollText, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Conformité CNDP",
    text: "Pensé dès la conception pour les exigences marocaines de protection des données personnelles."
  },
  {
    icon: Lock,
    title: "Données chiffrées",
    text: "Chiffrement des données en transit et au repos. Vos créances restent confidentielles."
  },
  {
    icon: ScrollText,
    title: "Journal d'audit",
    text: "Chaque relance, promesse et paiement est horodaté et traçable, prêt pour vos contrôles."
  },
  {
    icon: Fingerprint,
    title: "Contrôle d'accès",
    text: "Rôles et permissions par équipe : chacun ne voit que ce qu'il doit voir."
  }
];

export function Security() {
  return (
    <section
      id="securite"
      className="relative scroll-mt-20 overflow-hidden bg-[linear-gradient(160deg,#0A1E40_0%,#0F2C5C_60%,#123468_100%)] py-24 lg:py-32"
    >
      <div className="navy-grid absolute inset-0" aria-hidden />
      <div
        className="absolute -top-32 left-1/2 h-96 w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(46,106,209,0.25),transparent_65%)] blur-2xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-24 right-[10%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(232,101,26,0.14),transparent_70%)] blur-2xl"
        aria-hidden
      />

      <div className="container-shell relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-jabby-orange">Sécurité &amp; conformité</p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-normal text-white sm:text-[44px] sm:leading-[1.1]">
            Conçu pour la confiance, dès le premier jour.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Le recouvrement touche à vos données les plus sensibles. jabby les
            traite avec le niveau d&apos;exigence d&apos;une infrastructure financière.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const PillarIcon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={index * 90}>
                <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.09]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-colors duration-300 group-hover:bg-jabby-orange group-hover:text-white">
                    <PillarIcon className="h-5 w-5" strokeWidth={1.9} aria-hidden />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{pillar.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <p className="mt-12 text-center text-sm font-medium text-white/50">
            Vos données restent protégées, conformes et traçables — à chaque étape.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
