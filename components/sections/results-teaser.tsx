import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";

const principles = [
  {
    title: "Mesuré sur vos données",
    text: "Cohortes définies ensemble, comparées à votre processus actuel. Pas de chiffres décoratifs."
  },
  {
    title: "Des indicateurs vérifiables",
    text: "Taux de résolution, délai de premier paiement, DSO : chaque métrique est traçable jusqu'au dossier."
  },
  {
    title: "Payé au résultat",
    text: "Notre rémunération dépend du recouvré. Si nous ne performons pas, vous ne payez pas."
  }
];

export function ResultsTeaser() {
  return (
    <section className="bg-white">
      <div className="container-shell py-20 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Résultats"
              title="La preuve avant la promesse"
              lede="Nous ne publions aucun chiffre que nous ne pouvons pas démontrer. Notre logique de mesure est publique."
            />
            <a
              href="/resultats"
              className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-jabby-blue transition-colors hover:text-jabby-blueHover"
            >
              Notre méthode de mesure
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-jabby-border bg-jabby-border sm:grid-cols-3">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 70} className="h-full">
              <article className="h-full bg-white p-7">
                <h3 className="text-base font-semibold text-jabby-ink">
                  {principle.title}
                </h3>
                <p className="mt-2.5 text-sm leading-6 text-jabby-muted">
                  {principle.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
