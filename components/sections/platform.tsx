import {
  ChartSpline,
  CreditCard,
  GitBranch,
  Plug,
  ScrollText,
  SlidersHorizontal
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";

const modules = [
  {
    icon: GitBranch,
    title: "Orchestration multicanale",
    text: "Coordonnez vos relances par téléphone, WhatsApp, email et SMS dans des séquences définies à l'avance — cohérentes d'un canal à l'autre."
  },
  {
    icon: SlidersHorizontal,
    title: "Moteur de décision",
    text: "Chaque dossier suit une stratégie explicite : la bonne action, sur le bon canal, au bon moment. Rien n'est laissé à l'improvisation."
  },
  {
    icon: CreditCard,
    title: "Liens de paiement",
    text: "Chaque relance peut inclure un lien de paiement sécurisé, pour réduire la friction entre l'engagement et l'encaissement."
  },
  {
    icon: ChartSpline,
    title: "Pilotage en temps réel",
    text: "Encours, promesses, encaissements, performance par segment : une vision claire et continue de votre portefeuille."
  },
  {
    icon: ScrollText,
    title: "Journal d'audit",
    text: "Chaque action est horodatée, attribuée et exportable. Vous pouvez démontrer ce qui a été fait, quand, et selon quelle règle."
  },
  {
    icon: Plug,
    title: "Intégrations & API",
    text: "Connectez vos systèmes ERP, comptables et métiers via API, webhooks ou imports sécurisés. Vos données restent synchronisées."
  }
];

export function Platform() {
  return (
    <section id="plateforme" className="scroll-mt-20 bg-jabby-bg">
      <div className="container-shell py-24 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="La plateforme"
            title="Tout le cycle de recouvrement, sur une seule plateforme."
            lede="De l'import des créances à la réconciliation des paiements, jabby structure chaque étape — sans remplacer vos équipes, en les outillant."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => {
            const ModuleIcon = module.icon;
            return (
              <Reveal key={module.title} delay={(index % 3) * 70}>
                <article className="group h-full rounded-2xl border border-jabby-border bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-lift">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-jabby-tintBlue text-jabby-blue">
                    <ModuleIcon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em] text-jabby-ink">
                    {module.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-jabby-muted">
                    {module.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
