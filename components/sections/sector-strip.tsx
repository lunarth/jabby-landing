const sectors = [
  "Sociétés de financement",
  "Microfinance",
  "Assurance",
  "Santé privée",
  "Éducation privée",
  "Télécoms",
  "B2B & services",
  "Immobilier"
];

export function SectorStrip() {
  return (
    <section
      aria-label="Secteurs couverts"
      className="border-y border-jabby-border bg-white"
    >
      <div className="container-shell py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-eyebrow text-jabby-faint">
          Conçu pour les organisations qui gèrent des volumes d&apos;impayés
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
          {sectors.map((sector, index) => (
            <li key={sector} className="flex items-center gap-x-2">
              <span className="px-2 text-[15px] font-medium text-jabby-muted">
                {sector}
              </span>
              {index < sectors.length - 1 ? (
                <span
                  className="hidden h-1 w-1 rounded-full bg-jabby-border sm:block"
                  aria-hidden
                />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
