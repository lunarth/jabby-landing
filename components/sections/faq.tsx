import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";
import { homeFaqs } from "@/lib/faqs";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-white">
      <div className="container-shell py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Les questions d'un comité d'achat"
              lede="Les réponses complètes, sans détour, aux objections les plus fréquentes."
            />
            <a
              href="/faq"
              className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-jabby-blue transition-colors hover:text-jabby-blueHover"
            >
              Voir la FAQ complète
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </a>
          </Reveal>

          <Reveal delay={100}>
            <div className="divide-y divide-jabby-border overflow-hidden rounded-2xl border border-jabby-border bg-white shadow-card">
              {homeFaqs.map((faq) => (
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
