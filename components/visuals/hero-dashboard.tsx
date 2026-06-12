import {
  Banknote,
  ChartSpline,
  CircleCheck,
  Clock,
  ScrollText,
  Settings2,
  ShieldCheck,
  Workflow
} from "lucide-react";
import { Logo } from "@/components/ui/section";

const kpis = [
  { label: "Encours suivi", value: "48,2 M MAD", delta: null },
  { label: "Recouvré — 30 j", value: "3,46 M MAD", delta: "+12,8 %" },
  { label: "Promesses actives", value: "1,92 M MAD", delta: null },
  { label: "Dossiers actifs", value: "12 480", delta: null }
];

const events = [
  {
    icon: CircleCheck,
    iconClass: "bg-jabby-tintGreen text-jabby-success",
    title: "Paiement reçu",
    detail: "Dossier #8412 · 12 400 MAD",
    time: "09:41",
    badge: { label: "Réconcilié", className: "bg-jabby-tintGreen text-jabby-success" }
  },
  {
    icon: Clock,
    iconClass: "bg-jabby-tintBlue text-jabby-blue",
    title: "Promesse enregistrée",
    detail: "Dossier #8367 · échéance 24 juin",
    time: "09:38",
    badge: { label: "Suivie", className: "bg-jabby-tintBlue text-jabby-blue" }
  },
  {
    icon: Workflow,
    iconClass: "bg-jabby-tintBlue text-jabby-blue",
    title: "Relance délivrée",
    detail: "Dossier #8401 · séquence standard",
    time: "09:32",
    badge: { label: "Journalisée", className: "bg-jabby-bg text-jabby-muted" }
  },
  {
    icon: Settings2,
    iconClass: "bg-jabby-tintOrange text-jabby-orangeDark",
    title: "Dossier escaladé",
    detail: "Dossier #8323 · revue humaine",
    time: "09:24",
    badge: { label: "À traiter", className: "bg-jabby-tintOrange text-jabby-orangeDark" }
  }
];

const sidebarItems = [
  { label: "Vue d'ensemble", icon: ChartSpline, active: true },
  { label: "Dossiers", icon: ScrollText, active: false },
  { label: "Séquences", icon: Workflow, active: false },
  { label: "Encaissements", icon: Banknote, active: false },
  { label: "Journal d'audit", icon: ShieldCheck, active: false }
];

function KpiCard({ kpi }: { kpi: (typeof kpis)[number] }) {
  return (
    <div className="rounded-xl border border-jabby-border bg-white p-3">
      <p className="truncate text-[11px] font-medium text-jabby-muted">
        {kpi.label}
      </p>
      <div className="mt-1.5 flex items-baseline justify-between gap-2">
        <p className="whitespace-nowrap text-[15px] font-semibold tabular-nums tracking-[-0.01em] text-jabby-ink">
          {kpi.value}
        </p>
        {kpi.delta ? (
          <span className="shrink-0 rounded-full bg-jabby-tintGreen px-1.5 py-0.5 text-[10px] font-semibold tabular-nums text-jabby-success">
            {kpi.delta}
          </span>
        ) : null}
      </div>
    </div>
  );
}

function CollectionsChart() {
  const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"];

  return (
    <div className="rounded-xl border border-jabby-border bg-white p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-[13px] font-semibold text-jabby-ink">
            Encaissements cumulés
          </h3>
          <p className="mt-0.5 text-[11px] text-jabby-muted">
            Semestre en cours · MAD
          </p>
        </div>
        <span className="rounded-full bg-jabby-tintBlue px-2 py-0.5 text-[11px] font-semibold tabular-nums text-jabby-blue">
          +24,3 %
        </span>
      </div>
      <svg
        viewBox="0 0 520 170"
        className="mt-3 h-auto w-full"
        role="img"
        aria-label="Courbe des encaissements cumulés sur le semestre"
      >
        <defs>
          <linearGradient id="hero-chart-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#1B4B9B" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#1B4B9B" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[24, 66, 108].map((y) => (
          <line
            key={y}
            x1="8"
            x2="512"
            y1={y}
            y2={y}
            stroke="#E5E7EB"
            strokeWidth="1"
          />
        ))}
        <path
          d="M8 126 C60 120, 96 114, 140 108 C190 101, 224 88, 272 80 C320 72, 354 60, 400 48 C444 37, 478 30, 512 24 L512 150 L8 150 Z"
          fill="url(#hero-chart-fill)"
        />
        <path
          d="M8 126 C60 120, 96 114, 140 108 C190 101, 224 88, 272 80 C320 72, 354 60, 400 48 C444 37, 478 30, 512 24"
          fill="none"
          stroke="#1B4B9B"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="chart-line"
        />
        <circle cx="512" cy="24" r="4" fill="#E8651A" />
        {months.map((month, index) => (
          <text
            key={month}
            x={8 + index * 100.8}
            y="166"
            fill="#9CA3AF"
            fontSize="10"
            fontWeight="500"
          >
            {month}
          </text>
        ))}
      </svg>
    </div>
  );
}

export function HeroDashboard() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-jabby-border bg-white shadow-mockup">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-jabby-border bg-jabby-bg/70 px-4 py-2.5">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-jabby-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-jabby-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-jabby-border" />
          </div>
          <div className="rounded-md border border-jabby-border bg-white px-3 py-1 text-[11px] font-medium text-jabby-muted">
            app.jabby.ma
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-jabby-tintGreen px-2 py-0.5 text-[10px] font-semibold text-jabby-success">
            <span className="h-1.5 w-1.5 rounded-full bg-jabby-success" aria-hidden />
            Production
          </span>
        </div>

        <div className="grid lg:grid-cols-[176px_1fr]">
          {/* Sidebar */}
          <aside className="hidden border-r border-jabby-border bg-jabby-bg/50 p-4 lg:block">
            <Logo className="!text-[17px]" />
            <ul className="mt-5 space-y-0.5">
              {sidebarItems.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <li
                    key={item.label}
                    className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12px] font-medium ${
                      item.active
                        ? "bg-jabby-blue text-white"
                        : "text-jabby-muted"
                    }`}
                  >
                    <ItemIcon className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden />
                    {item.label}
                  </li>
                );
              })}
            </ul>
            <div className="mt-8 rounded-lg border border-jabby-border bg-white p-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-eyebrow text-jabby-faint">
                Conformité
              </p>
              <p className="mt-1 text-[11px] font-medium leading-4 text-jabby-muted">
                1 284 actions journalisées ce mois
              </p>
            </div>
          </aside>

          {/* Main panel */}
          <div className="p-4 sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-[15px] font-semibold tracking-[-0.01em] text-jabby-ink">
                  Vue d&apos;ensemble
                </h2>
                <p className="mt-0.5 text-[11px] text-jabby-muted">
                  Portefeuille principal · mise à jour en continu
                </p>
              </div>
              <span className="whitespace-nowrap rounded-lg border border-jabby-border px-2.5 py-1.5 text-[11px] font-medium text-jabby-muted">
                Juin 2026
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {kpis.map((kpi) => (
                <KpiCard key={kpi.label} kpi={kpi} />
              ))}
            </div>

            <div className="mt-3">
              <CollectionsChart />
            </div>

            <div className="mt-3 rounded-xl border border-jabby-border bg-white">
              <div className="flex items-center justify-between border-b border-jabby-border px-4 py-2.5">
                <h3 className="text-[13px] font-semibold text-jabby-ink">
                  Activité du portefeuille
                </h3>
                <span className="text-[11px] font-medium text-jabby-blue">
                  Temps réel
                </span>
              </div>
              <ul className="divide-y divide-jabby-border/70">
                {events.map((event) => {
                  const EventIcon = event.icon;
                  return (
                    <li
                      key={event.title}
                      className="flex items-center gap-3 px-4 py-2.5"
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${event.iconClass}`}
                      >
                        <EventIcon className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[12px] font-semibold text-jabby-ink">
                          {event.title}
                        </p>
                        <p className="truncate text-[11px] tabular-nums text-jabby-muted">
                          {event.detail}
                        </p>
                      </div>
                      <span
                        className={`hidden shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold sm:inline ${event.badge.className}`}
                      >
                        {event.badge.label}
                      </span>
                      <span className="shrink-0 text-[11px] tabular-nums text-jabby-faint">
                        {event.time}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Floating audit chip — one quiet touch of depth */}
      <div className="absolute -bottom-5 left-6 hidden items-center gap-2.5 rounded-xl border border-jabby-border bg-white px-3.5 py-2.5 shadow-lift sm:flex">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-jabby-tintBlue text-jabby-blue">
          <ShieldCheck className="h-4 w-4" strokeWidth={1.8} aria-hidden />
        </span>
        <div>
          <p className="text-[12px] font-semibold text-jabby-ink">
            Journal d&apos;audit complet
          </p>
          <p className="text-[11px] text-jabby-muted">
            Chaque action horodatée et exportable
          </p>
        </div>
      </div>
    </div>
  );
}
