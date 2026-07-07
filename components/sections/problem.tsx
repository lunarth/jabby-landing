import type { ReactNode } from "react";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";

const stats: Array<{ value: ReactNode; label: string }> = [
  {
    value: (
      <>
        <Counter value={97.4} decimals={1} className="tracking-tight" />
        <span className="ml-1.5 text-lg font-bold text-jabby-muted">Mds MAD</span>
      </>
    ),
    label: "de créances en souffrance au Maroc (données marché 2024)"
  },
  {
    value: <span className="tracking-tight">Loi 69-21</span>,
    label: "renforcement réglementaire des délais de paiement"
  },
  {
    value: (
      <>
        <span className="tracking-tight">60–120</span>
        <span className="ml-1.5 text-lg font-bold text-jabby-muted">jours</span>
      </>
    ),
    label: "de délais de paiement fréquemment constatés"
  },
  {
    value: (
      <>
        <Counter value={250000} className="tracking-tight" />
        <span className="ml-1.5 text-lg font-bold text-jabby-muted">MAD</span>
      </>
    ),
    label: "d'amendes possibles pour non-conformité"
  }
];

export function Problem() {
  return (
    <section className="section-pad relative bg-white py-24 lg:py-32">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-jabby-orange">Le marché</p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-normal text-jabby-ink sm:text-[44px] sm:leading-[1.1]">
            Le recouvrement est devenu
            <span className="text-jabby-blue"> un enjeu stratégique.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-jabby-muted sm:text-xl sm:leading-9">
            Les retards de paiement fragilisent la trésorerie des entreprises
            marocaines, mobilisent les équipes finance et exposent à une
            pression réglementaire croissante. Les traiter au tableur ne
            suffit plus.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90}>
              <article className="card-hover group relative h-full overflow-hidden rounded-2xl border border-jabby-border bg-gradient-to-b from-white to-jabby-bg/50 p-6 shadow-card">
                <span
                  className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-jabby-blue/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <h3 className="text-[28px] font-bold leading-tight text-jabby-ink">
                  {stat.value}
                </h3>
                <p className="mt-3 text-sm leading-6 text-jabby-muted">{stat.label}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
