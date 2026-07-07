import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";
import { JabbyLoop } from "@/components/visuals/jabby-loop";

function vars(values: Record<string, string>): CSSProperties {
  return values as CSSProperties;
}

/* Cash glyph: bars grow in sequence, the orange dot lands on the peak */
function CashGlyph() {
  return (
    <svg viewBox="0 0 44 44" fill="none" className="h-7 w-7" aria-hidden>
      <path d="M5 39.5h34" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" />
      <rect className="glyph-grow" style={vars({ "--d": "0.15s" })} x="7" y="28" width="6" height="11.5" rx="1.5" fill="#1B4B9B" opacity="0.45" />
      <rect className="glyph-grow" style={vars({ "--d": "0.27s" })} x="16" y="22" width="6" height="17.5" rx="1.5" fill="#1B4B9B" opacity="0.65" />
      <rect className="glyph-grow" style={vars({ "--d": "0.39s" })} x="25" y="15" width="6" height="24.5" rx="1.5" fill="#1B4B9B" opacity="0.85" />
      <rect className="glyph-grow" style={vars({ "--d": "0.51s" })} x="34" y="8" width="6" height="31.5" rx="1.5" fill="#1B4B9B" />
      <circle className="glyph-pop" style={vars({ "--d": "0.85s" })} cx="37" cy="4" r="2.6" fill="#E8651A" />
    </svg>
  );
}

/* Audit glyph: the journal draws itself, entries write in, the stamp lands */
function AuditGlyph() {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      stroke="#1B4B9B"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden
    >
      <rect className="glyph-draw" style={vars({ "--len": "120", "--d": "0.1s" })} x="9" y="4.5" width="26" height="35" rx="4" />
      <path className="glyph-draw" style={vars({ "--len": "16", "--d": "0.5s" })} d="M15 14h14" />
      <path className="glyph-draw" style={vars({ "--len": "16", "--d": "0.63s" })} d="M15 20.5h14" />
      <path className="glyph-draw" style={vars({ "--len": "10", "--d": "0.76s" })} d="M15 27h8" />
      <path className="glyph-draw" style={vars({ "--len": "15", "--d": "1s" })} d="M24.5 30.5l3.2 3.2 5.8-6.4" stroke="#E8651A" />
    </svg>
  );
}

/* Success glyph: the ring draws to full, the percent lands */
function SuccessGlyph() {
  return (
    <svg viewBox="0 0 44 44" fill="none" className="h-7 w-7" aria-hidden>
      <circle
        className="glyph-draw"
        style={vars({ "--len": "105", "--d": "0.12s" })}
        cx="22"
        cy="22"
        r="16.5"
        stroke="#1B4B9B"
        strokeWidth="1.8"
        transform="rotate(-90 22 22)"
      />
      <path
        className="glyph-draw"
        style={vars({ "--len": "18", "--d": "0.62s" })}
        d="M16.5 28L27.5 15"
        stroke="#1B4B9B"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle className="glyph-pop" style={vars({ "--d": "0.88s" })} cx="16.5" cy="16.5" r="2.4" fill="#E8651A" />
      <circle className="glyph-pop" style={vars({ "--d": "0.98s" })} cx="27.5" cy="27.5" r="2.4" fill="#1B4B9B" />
    </svg>
  );
}

const pillars: Array<{ glyph: ReactNode; title: string; text: string }> = [
  {
    glyph: <CashGlyph />,
    title: "Du cash, plus tôt",
    text: "Des séquences constantes, un lien de paiement dans chaque relance, des promesses suivies jusqu'à l'encaissement."
  },
  {
    glyph: <AuditGlyph />,
    title: "Contrôle et traçabilité",
    text: "Un tableau de bord en temps réel et un journal d'audit horodaté, attribué et exportable."
  },
  {
    glyph: <SuccessGlyph />,
    title: "Zéro effort, au succès",
    text: "Vous déposez vos créances. Nous opérons tout. Vous ne payez que sur les montants recouvrés."
  }
];

export function Solution() {
  return (
    <section className="bg-jabby-bg">
      <div className="container-shell py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Le service"
            title={
              <>
                Vous déposez vos créances
                <span className="block text-jabby-blue">
                  Nous faisons tout le reste
                </span>
              </>
            }
            lede="Un service opéré de bout en bout, porté par une plateforme propriétaire : votre équipe ne gère ni relances, ni appels, ni suivi."
          />
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <JabbyLoop />
        </Reveal>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 80}>
              <article className="h-full rounded-2xl border border-jabby-border bg-white p-7 shadow-card">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-jabby-tintBlue">
                  {pillar.glyph}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-normal text-jabby-ink">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-jabby-muted">
                  {pillar.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
