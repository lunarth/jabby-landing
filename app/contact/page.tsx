import type { Metadata } from "next";
import { CircleCheck, Mail } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { DemoForm } from "@/components/ui/demo-form";

export const metadata: Metadata = {
  title: "Demander une démo",
  description:
    "Parlons de votre portefeuille de créances : un échange de 30 minutes, un cadrage gratuit et une proposition au succès. Réponse sous 24 heures ouvrées.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Demander une démo | jabby",
    description:
      "Un échange de 30 minutes centré sur vos volumes, vos segments et vos contraintes. Sans engagement."
  }
};

const expectations = [
  "Un échange de 30 minutes avec notre équipe",
  "Un cadrage gratuit de votre portefeuille",
  "Une démonstration sur des cas proches des vôtres",
  "Une proposition écrite au succès, sans engagement"
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre portefeuille"
        lede="Réponse sous 24 heures ouvrées. Aucune donnée de débiteur n'est nécessaire à ce stade."
      />

      <section className="bg-white">
        <div className="container-shell py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
            <Reveal>
              <h2 className="text-xl font-semibold tracking-normal text-jabby-ink">
                Ce qui vous attend
              </h2>
              <ul className="mt-7 space-y-3.5">
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

              <div className="mt-10 border-t border-jabby-border pt-7">
                <a
                  href="mailto:contact@jabby.io"
                  className="focus-ring inline-flex items-center gap-2.5 rounded-md text-[15px] font-medium text-jabby-ink transition-colors hover:text-jabby-blue"
                >
                  <Mail
                    className="h-4 w-4 text-jabby-blue"
                    strokeWidth={1.8}
                    aria-hidden
                  />
                  contact@jabby.io
                </a>
                <p className="mt-4 text-sm leading-6 text-jabby-muted">
                  Vous êtes un particulier contacté au sujet d&apos;un
                  paiement ?{" "}
                  <a
                    href="/debiteurs"
                    className="focus-ring rounded font-medium text-jabby-blue"
                  >
                    Consultez la page dédiée
                  </a>
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <DemoForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
