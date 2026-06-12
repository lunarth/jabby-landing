import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";

const faqs = [
  {
    question: "jabby est-elle une agence de recouvrement ?",
    answer:
      "Non. jabby est une plateforme technologique que vos équipes utilisent pour structurer le recouvrement amiable. Vous gardez la relation avec vos clients, la maîtrise des règles et la propriété de vos données."
  },
  {
    question: "À qui s'adresse la plateforme ?",
    answer:
      "Aux directions financières et aux équipes recouvrement et risque : sociétés de financement, microfinance, assurances, santé privée, éducation privée et entreprises B2B qui gèrent des volumes d'impayés récurrents."
  },
  {
    question: "Quels canaux de relance sont couverts ?",
    answer:
      "Le téléphone, WhatsApp, l'email et le SMS, ainsi que des liens de paiement intégrés aux relances. Chaque canal est activé selon vos règles, vos modèles approuvés et le cadre applicable."
  },
  {
    question: "Comment les données sont-elles protégées ?",
    answer:
      "Les données sont chiffrées en transit et au repos, l'accès est contrôlé par rôle, et chaque action est journalisée. Le traitement des données personnelles est aligné sur la loi 09-08 et les exigences de la CNDP."
  },
  {
    question: "Comment se déroule un déploiement ?",
    answer:
      "Un cadrage de votre portefeuille, la définition des stratégies de relance avec vos équipes, un import sécurisé des dossiers, puis une montée en charge progressive avec des points de contrôle réguliers."
  },
  {
    question: "Comment demander une démonstration ?",
    answer:
      "Via le formulaire de contact ou par email à contact@jabby.ma. Nous organisons un échange de 30 minutes centré sur vos volumes, vos segments et vos contraintes."
  }
];

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

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-jabby-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container-shell py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions fréquentes."
              lede="Les réponses que se posent le plus souvent les directions financières et les équipes recouvrement."
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="divide-y divide-jabby-border overflow-hidden rounded-2xl border border-jabby-border bg-white shadow-card">
              {faqs.map((faq) => (
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
      </div>
    </section>
  );
}
