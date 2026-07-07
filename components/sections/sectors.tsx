const sectors = [
  "Finance",
  "Leasing",
  "Assurance",
  "B2B & Services",
  "Retail",
  "Télécoms",
  "Fintech",
  "Immobilier",
  "Distribution"
];

export function SectorStrip() {
  return (
    <section className="border-y border-jabby-border/70 bg-jabby-bg/60 py-9" aria-label="Secteurs couverts">
      <p className="eyebrow mb-6 text-center text-jabby-faint">
        Conçu pour les équipes qui gèrent des impayés
      </p>
      <div className="marquee-viewport overflow-hidden">
        <div className="marquee-track flex w-max items-center whitespace-nowrap">
          {[...sectors, ...sectors].map((sector, index) => (
            <span key={`${sector}-${index}`} className="flex items-center">
              <span className="px-7 text-[17px] font-semibold text-jabby-navy/70 transition-colors hover:text-jabby-blue">
                {sector}
              </span>
              <span className="h-1 w-1 rounded-full bg-jabby-orange/70" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
