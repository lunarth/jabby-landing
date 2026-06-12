import { CircleCheck, Mail } from "lucide-react";
import { DemoForm } from "@/components/ui/demo-form";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";

const expectations = [
  "Un échange de 30 minutes avec notre équipe",
  "Un cadrage de votre portefeuille et de vos segments",
  "Une démonstration sur des cas proches des vôtres",
  "Sans engagement"
];

function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
      <path d="M7 10v7" />
      <path d="M7 7.2v.1" />
      <path d="M11 17v-4a3 3 0 016 0v4" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white">
      <div className="container-shell py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Échangeons sur vos enjeux de recouvrement."
              lede="Notre équipe vous répond sous 24 heures ouvrées."
            />

            <ul className="mt-9 space-y-3.5">
              {expectations.map((expectation) => (
                <li
                  key={expectation}
                  className="flex items-start gap-2.5 text-[15px] text-jabby-ink/85"
                >
                  <CircleCheck
                    className="mt-0.5 h-[18px] w-[18px] shrink-0 text-jabby-blue"
                    strokeWidth={1.8}
                    aria-hidden
                  />
                  {expectation}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4 border-t border-jabby-border pt-7">
              <a
                href="mailto:contact@jabby.ma"
                className="focus-ring inline-flex items-center gap-2.5 rounded-md text-[15px] font-medium text-jabby-ink transition-colors hover:text-jabby-blue"
              >
                <Mail className="h-4 w-4 text-jabby-blue" strokeWidth={1.8} aria-hidden />
                contact@jabby.ma
              </a>
              <a
                href="https://www.linkedin.com/company/jabby"
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2.5 rounded-md text-[15px] font-medium text-jabby-ink transition-colors hover:text-jabby-blue"
              >
                <LinkedInIcon className="h-4 w-4 text-jabby-blue" />
                jabby sur LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <DemoForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
