import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { PageCta } from "@/components/ui/page-cta";
import { Reveal } from "@/components/ui/reveal";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Les réponses aux questions d'un comité d'achat : modèle au succès, canaux de relance, place de l'IA, protection des données CNDP, cadre contractuel, réversibilité et démarrage.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | jabby",
    description:
      "Modèle, opérations, conformité, démarrage : les réponses complètes, sans détour."
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

const categories = ["Modèle", "Opérations", "Conformité & données", "Démarrage"] as const;

export default function FaqPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Les questions d'un comité d'achat"
        lede="Modèle, opérations, conformité, démarrage : les réponses complètes, sans détour. Si la vôtre n'y figure pas, écrivez-nous."
      />

      <section className="bg-white">
        <div className="container-shell py-16 lg:py-20">
          <div className="space-y-14">
            {categories.map((category) => (
              <div key={category} className="grid gap-6 lg:grid-cols-[240px_1fr]">
                <Reveal>
                  <h2 className="text-xs font-semibold uppercase tracking-eyebrow text-jabby-blue">
                    {category}
                  </h2>
                </Reveal>
                <Reveal delay={60}>
                  <div className="divide-y divide-jabby-border overflow-hidden rounded-2xl border border-jabby-border bg-white shadow-card">
                    {faqs
                      .filter((faq) => faq.category === category)
                      .map((faq) => (
                        <details key={faq.question} className="group">
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-left text-[15px] font-semibold text-jabby-ink transition-colors hover:bg-jabby-bg/60 [&::-webkit-details-marker]:hidden">
                            {faq.question}
                            <span
                              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-jabby-border text-jabby-blue transition-transform duration-200 group-open:rotate-45"
                              aria-hidden
                            >
                              +
                            </span>
                          </summary>
                          <p className="px-6 pb-6 text-[15px] leading-7 text-jabby-muted">
                            {faq.answer}
                          </p>
                        </details>
                      ))}
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta />
    </main>
  );
}
