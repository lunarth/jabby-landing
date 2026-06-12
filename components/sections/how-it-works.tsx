import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";

const steps = [
  {
    number: "01",
    title: "Connectez vos créances",
    text: "Importez vos dossiers par fichier sécurisé ou via API. Les données sont validées, dédupliquées et segmentées automatiquement."
  },
  {
    number: "02",
    title: "Définissez vos stratégies",
    text: "Séquences de relance, tonalité, plafonds, règles d'escalade : vous gardez la maîtrise de chaque paramètre, par segment de portefeuille."
  },
  {
    number: "03",
    title: "jabby orchestre l'exécution",
    text: "Les actions sont exécutées selon vos règles, suivies en temps réel et journalisées automatiquement. Les cas sensibles remontent en revue humaine."
  },
  {
    number: "04",
    title: "Encaissez et réconciliez",
    text: "Paiements, promesses et litiges remontent dans votre tableau de bord et dans vos systèmes. Votre comptabilité reste alignée."
  }
];

export function HowItWorks() {
  return (
    <section id="fonctionnement" className="scroll-mt-20 bg-white">
      <div className="container-shell py-24 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Fonctionnement"
            title="De l'import du dossier à l'encaissement."
            lede="Un déploiement progressif, cadré avec vos équipes — sans refonte de vos processus existants."
          />
        </Reveal>

        <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
              <li className="relative">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold tabular-nums text-jabby-orange">
                    {step.number}
                  </span>
                  <span className="h-px flex-1 bg-jabby-border" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em] text-jabby-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-jabby-muted">
                  {step.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
