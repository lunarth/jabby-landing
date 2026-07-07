import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";
import { ChannelFlow } from "@/components/visuals/channel-flow";

const points = [
  {
    title: "Meilleure délivrabilité",
    text: "Un numéro et un nom connus du débiteur : plus de réponses, moins de rejets."
  },
  {
    title: "Votre marque protégée",
    text: "Le débiteur reste dans votre relation client, jamais face à un tiers inconnu."
  },
  {
    title: "Robustesse réglementaire",
    text: "Un cadre contractuel clair : mandat de recouvrement et accord de traitement des données."
  }
];

export function FirstParty() {
  return (
    <section className="bg-white">
      <div className="container-shell py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Identité first-party"
            title="Chaque relance part au nom de votre entreprise"
            lede="Jamais au nom d'un tiers. C'est un choix structurel de confiance, de délivrabilité et de conformité."
          />
        </Reveal>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal delay={100}>
            <ChannelFlow />
          </Reveal>

          <div className="flex flex-col gap-4">
            {points.map((point, index) => (
              <Reveal key={point.title} delay={140 + index * 80}>
                <article className="rounded-2xl border border-jabby-border bg-jabby-bg/60 p-6">
                  <h3 className="text-base font-semibold text-jabby-ink">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-jabby-muted">
                    {point.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
