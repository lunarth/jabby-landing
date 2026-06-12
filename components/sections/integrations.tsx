import { CreditCard, Database, Phone, Webhook } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";

const categories = [
  {
    icon: CreditCard,
    title: "Paiement",
    text: "Liens de paiement et partenaires d'encaissement du marché marocain."
  },
  {
    icon: Phone,
    title: "Téléphonie & messagerie",
    text: "Canaux voix, WhatsApp, email et SMS opérés via des partenaires établis."
  },
  {
    icon: Database,
    title: "ERP & comptabilité",
    text: "Synchronisation des créances et des encaissements avec vos systèmes de gestion."
  },
  {
    icon: Webhook,
    title: "API & webhooks",
    text: "Une API documentée et des webhooks temps réel pour vos équipes techniques."
  }
];

const guarantees = [
  "API REST documentée",
  "Webhooks temps réel",
  "Imports et exports sécurisés",
  "Environnement de test dédié"
];

export function Integrations() {
  return (
    <section id="integrations" className="scroll-mt-20 bg-jabby-bg">
      <div className="container-shell py-24 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Intégrations"
            title="Votre système d'information reste au centre."
            lede="jabby se connecte à vos outils existants plutôt que de les remplacer. Les données circulent dans les deux sens, de manière contrôlée."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <Reveal key={category.title} delay={index * 60}>
                <article className="h-full rounded-2xl border border-jabby-border bg-white p-6 shadow-card">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-jabby-tintBlue text-jabby-blue">
                    <CategoryIcon className="h-5 w-5" strokeWidth={1.7} aria-hidden />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-jabby-ink">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-jabby-muted">
                    {category.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-jabby-border pt-7">
            {guarantees.map((guarantee) => (
              <li
                key={guarantee}
                className="flex items-center gap-2.5 text-sm font-medium text-jabby-ink/75"
              >
                <span className="h-1 w-1 rounded-full bg-jabby-orange" aria-hidden />
                {guarantee}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
