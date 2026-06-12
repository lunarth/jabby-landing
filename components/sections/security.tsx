import {
  Database,
  KeyRound,
  Lock,
  ScrollText,
  ShieldCheck,
  UserCheck
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";

const items = [
  {
    icon: ShieldCheck,
    title: "Protection des données",
    text: "Traitement des données personnelles aligné sur la loi 09-08 et les exigences de la CNDP."
  },
  {
    icon: ScrollText,
    title: "Journal d'audit complet",
    text: "Chaque action horodatée, attribuée et exportable — pour vos audits internes comme externes."
  },
  {
    icon: Lock,
    title: "Chiffrement",
    text: "Données chiffrées en transit et au repos, avec une gestion stricte des clés."
  },
  {
    icon: KeyRound,
    title: "Contrôle d'accès",
    text: "Permissions par rôle, authentification renforcée et séparation des environnements."
  },
  {
    icon: Database,
    title: "Conservation maîtrisée",
    text: "Politiques de rétention définies avec vous, exports et suppressions documentés."
  },
  {
    icon: UserCheck,
    title: "Supervision humaine",
    text: "Des points de contrôle humains sur les opérations sensibles, par conception."
  }
];

export function Security() {
  return (
    <section id="securite" className="scroll-mt-20 bg-jabby-navy">
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_55%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent)]"
          aria-hidden
        />
        <div className="container-shell relative py-24 lg:py-28">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Sécurité & conformité"
              title="Conçu pour des environnements régulés."
              lede="Le recouvrement traite des données sensibles. jabby est construit pour des organisations qui doivent rendre des comptes — à leur direction, à leurs auditeurs et à leurs régulateurs."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <Reveal key={item.title} delay={(index % 3) * 70}>
                  <article className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors duration-300 hover:bg-white/[0.07]">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                      <ItemIcon className="h-5 w-5" strokeWidth={1.7} aria-hidden />
                    </span>
                    <h3 className="mt-5 text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-6 text-white/65">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
