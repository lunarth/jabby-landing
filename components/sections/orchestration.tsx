import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";
import { OrchestrationTimeline } from "@/components/visuals/orchestration-timeline";

const principles = [
  {
    title: "Déterministe",
    text: "Les séquences suivent des règles explicites, validées par vos équipes avant toute exécution."
  },
  {
    title: "Supervisé",
    text: "Les situations sensibles — litiges, fragilité, absence de réponse — sont escaladées vers une revue humaine."
  },
  {
    title: "Tracé",
    text: "Chaque action est inscrite au journal d'audit, horodatée et exportable pour vos contrôles internes et externes."
  }
];

export function Orchestration() {
  return (
    <section id="orchestration" className="scroll-mt-20 bg-jabby-bg">
      <div className="container-shell py-24 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Orchestration"
            title="Déterministe par conception."
            lede="Pas de relances au hasard. Chaque action est décidée par des règles que vous avez validées, exécutée au moment prévu, et inscrite au journal d'audit."
          />
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <OrchestrationTimeline />
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-jabby-border bg-jabby-border sm:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="bg-white p-7">
              <h3 className="text-base font-semibold text-jabby-ink">
                {principle.title}
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-jabby-muted">
                {principle.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
