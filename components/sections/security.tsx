"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Database,
  KeyRound,
  Lock,
  Plus,
  ScrollText,
  ShieldCheck,
  UserCheck
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";

const items = [
  {
    icon: ShieldCheck,
    title: "Loi 09-08 · CNDP",
    detail:
      "Traitement des données personnelles aligné sur la loi 09-08 et les exigences de la CNDP, encadré par un mandat de recouvrement et un accord de traitement des données."
  },
  {
    icon: ScrollText,
    title: "Journal d'audit complet",
    detail:
      "Chaque appel, message, promesse et paiement est horodaté, attribué et exportable, pour vos audits internes comme externes."
  },
  {
    icon: Lock,
    title: "Chiffrement en transit et au repos",
    detail:
      "Données chiffrées de bout en bout, avec une gestion stricte des clés et des secrets."
  },
  {
    icon: KeyRound,
    title: "Contrôle d'accès par rôle",
    detail:
      "Permissions par rôle, authentification renforcée, séparation des environnements et principe du moindre privilège."
  },
  {
    icon: Database,
    title: "Données réversibles, exportables",
    detail:
      "Vos créances, votre historique et votre journal d'audit sont exportables à tout moment, dans des formats ouverts."
  },
  {
    icon: UserCheck,
    title: "Supervision humaine des cas sensibles",
    detail:
      "Litiges, situations de fragilité et dossiers à fort enjeu sont escaladés systématiquement vers une revue humaine."
  }
];

export function Security() {
  const [open, setOpen] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Any click outside the grid, or Escape, closes the open popover.
  useEffect(() => {
    if (open === null) {
      return;
    }
    const onClick = (event: MouseEvent) => {
      if (!gridRef.current?.contains(event.target as Node)) {
        setOpen(null);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(null);
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section id="securite" className="scroll-mt-20 bg-jabby-navy">
      <div className="relative">
        <div
          className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_55%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent)]"
          aria-hidden
        />
        <div className="container-shell relative py-20 lg:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                tone="dark"
                eyebrow="Sécurité & conformité"
                title="Conçu pour des environnements régulés"
                lede="Le recouvrement traite des données sensibles. Cliquez sur chaque garantie pour le détail du dispositif."
              />
              <a
                href="/securite"
                className="focus-ring-dark inline-flex items-center gap-2 rounded-md text-sm font-semibold text-white transition-colors hover:text-white/80"
              >
                Voir le dispositif complet
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
              </a>
            </div>
          </Reveal>

          <div ref={gridRef} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => {
              const ItemIcon = item.icon;
              const isOpen = open === index;
              return (
                <Reveal key={item.title} delay={(index % 3) * 70}>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`security-detail-${index}`}
                      className={`focus-ring-dark flex h-full w-full items-center gap-4 rounded-2xl border px-6 py-5 text-left transition-colors duration-300 ${
                        isOpen
                          ? "border-white/30 bg-white/10"
                          : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
                      }`}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                        <ItemIcon className="h-5 w-5" strokeWidth={1.7} aria-hidden />
                      </span>
                      <span className="flex-1 text-[15px] font-semibold leading-6 text-white">
                        {item.title}
                      </span>
                      <Plus
                        className={`h-4 w-4 shrink-0 text-white/50 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        strokeWidth={2}
                        aria-hidden
                      />
                    </button>

                    {isOpen ? (
                      <div
                        id={`security-detail-${index}`}
                        role="region"
                        className="absolute inset-x-0 top-[calc(100%+8px)] z-30 rounded-xl border border-jabby-border bg-white p-4 shadow-lift"
                        style={{ animation: "fade-up-soft 0.3s cubic-bezier(0.16,1,0.3,1) both" }}
                      >
                        <p className="text-[13px] leading-6 text-jabby-ink/85">
                          {item.detail}
                        </p>
                        <a
                          href="/securite"
                          className="focus-ring mt-2.5 inline-flex items-center gap-1.5 rounded text-[12px] font-semibold text-jabby-blue"
                        >
                          Le dispositif complet
                          <ArrowRight className="h-3 w-3" strokeWidth={2} aria-hidden />
                        </a>
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
