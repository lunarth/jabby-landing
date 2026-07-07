"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { faqs } from "./faq-data";

function FaqItem({
  question,
  answer,
  open,
  onToggle
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`transition-colors duration-300 ${open ? "bg-jabby-tintBlue/40" : "bg-white"}`}>
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="focus-ring flex w-full items-center justify-between gap-5 rounded-lg p-6 text-left text-base font-bold text-jabby-ink transition-colors hover:text-jabby-blue"
        >
          {question}
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ease-out-expo ${
              open
                ? "rotate-45 border-jabby-blue bg-jabby-blue text-white"
                : "border-jabby-border bg-white text-jabby-blue"
            }`}
            aria-hidden
          >
            <Plus className="h-4 w-4" strokeWidth={2} />
          </span>
        </button>
      </h3>
      <div
        className={`grid transition-all duration-[420ms] ease-out-expo ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl px-6 pb-6 text-[15px] leading-7 text-jabby-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-white py-24 lg:py-32">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-jabby-orange">FAQ</p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-normal text-jabby-ink sm:text-[44px]">
            Les questions qu&apos;on nous pose souvent.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-4xl divide-y divide-jabby-border overflow-hidden rounded-3xl border border-jabby-border bg-white shadow-card">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                open={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
