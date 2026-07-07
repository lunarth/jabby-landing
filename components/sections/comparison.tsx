import type { CSSProperties } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";

const rows = [
  {
    dimension: "Identité",
    jabby: "Relances au nom de votre entreprise",
    other: "Relances au nom d'un tiers inconnu"
  },
  {
    dimension: "Traçabilité",
    jabby: "Journal d'audit horodaté et exportable",
    other: "Reporting mensuel, sans preuve détaillée"
  },
  {
    dimension: "Méthode",
    jabby: "Séquences validées, aucune improvisation",
    other: "Pratiques non contrôlées par le créancier"
  },
  {
    dimension: "Visibilité",
    jabby: "Tableau de bord en temps réel",
    other: "Silence entre deux points d'étape"
  },
  {
    dimension: "Données",
    jabby: "Exportables à tout moment, réversibles",
    other: "Verrouillées chez le prestataire"
  },
  {
    dimension: "Respect du débiteur",
    jabby: "Constance et respect, votre marque protégée",
    other: "Pression, au détriment de votre image"
  }
];

function vars(values: Record<string, string>): CSSProperties {
  return values as CSSProperties;
}

function DrawnCheck({ delaySeconds }: { delaySeconds: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#15803D"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110"
      aria-hidden
    >
      <path
        className="glyph-draw"
        style={vars({ "--len": "28", "--d": `${delaySeconds}s` })}
        d="M4.5 12.5l5 5.5 10-11.5"
      />
    </svg>
  );
}

function FadedX({ delaySeconds }: { delaySeconds: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#DC2626"
      strokeWidth={2}
      strokeLinecap="round"
      className="cmp-fade mt-0.5 h-4 w-4 shrink-0 opacity-80"
      style={vars({ "--d": `${delaySeconds}s` })}
      aria-hidden
    >
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

function ComparisonRow({
  row,
  index
}: {
  row: (typeof rows)[number];
  index: number;
}) {
  const rowDelay = 0.15 + index * 0.1;
  return (
    <div
      className="cmp-row group grid grid-cols-[0.8fr_1.1fr_1.1fr] border-t border-jabby-border bg-white text-[13px] transition-colors duration-300"
      style={vars({ "--d": `${rowDelay}s` })}
    >
      <div className="flex items-center px-5 py-4 font-semibold text-jabby-ink transition-colors duration-300 group-hover:bg-jabby-bg/50 group-hover:text-jabby-blue">
        {row.dimension}
      </div>
      <div className="flex items-start gap-2.5 border-l border-jabby-blue/15 bg-jabby-tintBlue/40 px-5 py-4 shadow-[inset_1px_0_0_rgba(27,75,155,0.06)] transition-colors duration-300 group-hover:bg-jabby-tintBlue/80">
        <DrawnCheck delaySeconds={rowDelay + 0.3} />
        <span className="leading-5 text-jabby-ink">{row.jabby}</span>
      </div>
      <div className="flex items-start gap-2.5 border-l border-jabby-border px-5 py-4 transition-colors duration-300 group-hover:bg-jabby-bg/50">
        <FadedX delaySeconds={rowDelay + 0.4} />
        <span className="leading-5 text-jabby-muted">{row.other}</span>
      </div>
    </div>
  );
}

function ComparisonTable() {
  return (
    <div className="hidden overflow-hidden rounded-2xl border border-jabby-border shadow-card sm:block">
      <div
        className="cmp-row grid grid-cols-[0.8fr_1.1fr_1.1fr] bg-jabby-bg/70 text-[13px] font-semibold"
        style={vars({ "--d": "0.05s" })}
      >
        <div className="px-5 py-3.5 text-jabby-faint" />
        <div className="border-l border-jabby-blue/15 bg-jabby-blue px-5 py-3.5 text-white shadow-[0_6px_16px_-6px_rgba(27,75,155,0.45)]">
          jabby
        </div>
        <div className="border-l border-jabby-border px-5 py-3.5 text-jabby-muted">
          Prestataire traditionnel
        </div>
      </div>
      {rows.map((row, index) => (
        <ComparisonRow key={row.dimension} row={row} index={index} />
      ))}
    </div>
  );
}

function MobileComparisonCard({
  row,
  index
}: {
  row: (typeof rows)[number];
  index: number;
}) {
  const rowDelay = 0.1 + index * 0.09;
  return (
    <article
      className="cmp-row group overflow-hidden rounded-xl border border-jabby-border bg-white shadow-card"
      style={vars({ "--d": `${rowDelay}s` })}
    >
      <p className="border-b border-jabby-border bg-jabby-bg/70 px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-jabby-ink">
        {row.dimension}
      </p>
      <div className="flex items-start gap-2.5 bg-jabby-tintBlue/40 px-4 py-3.5">
        <DrawnCheck delaySeconds={rowDelay + 0.25} />
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-jabby-blue">
            jabby
          </p>
          <p className="mt-0.5 text-[13px] leading-5 text-jabby-ink">
            {row.jabby}
          </p>
        </div>
      </div>
      <div className="flex items-start gap-2.5 border-t border-jabby-border px-4 py-3.5">
        <FadedX delaySeconds={rowDelay + 0.35} />
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-jabby-faint">
            Prestataire traditionnel
          </p>
          <p className="mt-0.5 text-[13px] leading-5 text-jabby-muted">
            {row.other}
          </p>
        </div>
      </div>
    </article>
  );
}

export function Comparison() {
  return (
    <section className="bg-white">
      <div className="container-shell py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Le modèle"
            title="Un modèle différent du recouvrement traditionnel"
            lede="Une infrastructure qui opère pour votre compte, sous vos règles, avec une preuve pour chaque action."
            align="center"
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mx-auto mt-12 max-w-4xl">
            <ComparisonTable />
            <div className="space-y-4 sm:hidden">
              {rows.map((row, index) => (
                <MobileComparisonCard key={row.dimension} row={row} index={index} />
              ))}
            </div>
            <p
              className="cmp-fade mx-auto mt-7 max-w-2xl text-center text-sm leading-6 text-jabby-muted"
              style={vars({ "--d": "0.9s" })}
            >
              jabby n&apos;externalise pas votre relation client : vos relances,
              sous vos règles, au nom de votre marque, avec une preuve pour
              chaque action.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
