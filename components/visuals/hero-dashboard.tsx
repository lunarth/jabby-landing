"use client";

import { useEffect, useState } from "react";
import { CalendarCheck, CircleCheck } from "lucide-react";
import { Counter } from "@/components/ui/counter";
import { Logo } from "@/components/site/navbar";

const kpis = [
  { label: "Recouvré ce mois", value: 68400, suffix: " MAD", change: "+18%" },
  { label: "Recouvré total", value: 284700, suffix: " MAD" },
  { label: "Promesses ce mois", value: 45200, suffix: " MAD" },
  { label: "Taux de recouvrement", value: 34, suffix: "%" }
] as const;

const feedItems = [
  { tone: "bg-jabby-success", text: "Paiement reçu : 12 000 MAD", time: "à l'instant" },
  { tone: "bg-jabby-blue", text: "Promesse de paiement enregistrée", time: "il y a 2 min" },
  { tone: "bg-jabby-orange", text: "47 nouveaux dossiers importés", time: "il y a 8 min" },
  { tone: "bg-jabby-blue", text: "Relance WhatsApp envoyée", time: "il y a 12 min" },
  { tone: "bg-jabby-success", text: "Paiement partiel reçu : 2 100 MAD", time: "il y a 15 min" },
  { tone: "bg-jabby-blue", text: "Lien de paiement ouvert", time: "il y a 21 min" }
] as const;

function LiveFeed() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return;
    }
    const id = window.setInterval(
      () => setOffset((value) => (value + 1) % feedItems.length),
      3200
    );
    return () => window.clearInterval(id);
  }, []);

  const visible = Array.from(
    { length: 4 },
    (_, index) => feedItems[(offset + index) % feedItems.length]
  );

  return (
    <div className="space-y-2.5">
      {visible.map((item, index) => (
        <div
          key={`${item.text}-${offset}`}
          className={`flex items-start gap-2.5 ${index === 0 ? "feed-in" : ""}`}
        >
          <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${item.tone}`} aria-hidden />
          <div className="min-w-0">
            <p className="truncate text-xs font-medium leading-4 text-jabby-ink">{item.text}</p>
            <p className="text-[10px] text-jabby-faint">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function RecoveryChart() {
  const points: Array<[number, number]> = [
    [16, 118],
    [104, 104],
    [192, 108],
    [280, 76],
    [368, 52],
    [444, 30]
  ];
  const line =
    "M16 118 C48 112, 76 102, 104 104 C136 106, 164 112, 192 108 C228 102, 248 84, 280 76 C316 66, 336 60, 368 52 C400 44, 424 34, 444 30";

  return (
    <div className="relative">
      <svg
        viewBox="0 0 460 160"
        className="h-full w-full"
        role="img"
        aria-label="Courbe des paiements récupérés sur cinq mois, en progression"
      >
        <defs>
          <linearGradient id="heroChartFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#1B4B9B" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#1B4B9B" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[28, 76, 124].map((y) => (
          <line key={y} x1="8" x2="452" y1={y} y2={y} stroke="#EEF1F5" strokeWidth="1" />
        ))}
        <path d={`${line} L444 140 L16 140 Z`} fill="url(#heroChartFill)" className="chart-fill" />
        <path
          d={line}
          fill="none"
          stroke="#1B4B9B"
          strokeWidth="3"
          strokeLinecap="round"
          className="chart-line"
        />
        {points.map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="3.5" fill="#fff" stroke="#1B4B9B" strokeWidth="2" />
        ))}
        <circle cx="444" cy="30" r="5" fill="#E8651A" />
        {["Jan", "Fév", "Mar", "Avr", "Mai"].map((month, index) => (
          <text
            key={month}
            x={16 + index * 107}
            y="156"
            fill="#9CA3AF"
            fontSize="10"
            fontWeight="600"
          >
            {month}
          </text>
        ))}
      </svg>
      <span
        className="animate-ping-ring absolute right-[8px] top-[24px] h-3 w-3 rounded-full bg-jabby-orange/60"
        aria-hidden
      />
    </div>
  );
}

export function HeroDashboard() {
  return (
    <div className="relative isolate lg:pl-4">
      {/* Soft backdrop glow */}
      <div
        className="absolute -inset-x-8 top-8 -z-10 hidden h-[85%] rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(27,75,155,0.10),transparent_65%)] blur-2xl lg:block"
        aria-hidden
      />

      {/* Window */}
      <div className="relative overflow-hidden rounded-2xl border border-jabby-border bg-white shadow-mockup ring-1 ring-white/60">
        <div className="flex items-center justify-between border-b border-jabby-border bg-gradient-to-b from-white to-jabby-bg/70 px-4 py-2.5 sm:px-5">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-jabby-tintBlue px-3 py-1 text-[11px] font-semibold text-jabby-blue">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-jabby-blue" aria-hidden />
            Recouvrement live
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.52fr_1.48fr]">
          <aside className="hidden border-r border-jabby-border bg-jabby-bg/70 p-5 lg:block">
            <Logo />
            <div className="mt-6 space-y-1.5">
              {["Dashboard", "Dossiers", "Débiteurs", "Paiements"].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-lg px-3 py-2 text-[13px] font-medium ${
                    index === 0 ? "bg-jabby-blue text-white shadow-hairline" : "text-jabby-muted"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>

          <div className="p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-jabby-blue">Pilotage recouvrement</p>
                <h2 className="mt-0.5 text-lg font-bold tracking-tight text-jabby-ink">
                  Vue d&apos;ensemble
                </h2>
              </div>
              <div className="rounded-lg border border-jabby-border bg-white px-2.5 py-1.5 text-[11px] font-medium text-jabby-muted">
                Aujourd&apos;hui
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-xl border border-jabby-border bg-white p-3 shadow-card"
                >
                  <div className="truncate text-[11px] font-medium text-jabby-muted">
                    {kpi.label}
                  </div>
                  <div className="mt-1.5 flex items-baseline justify-between gap-1.5">
                    <Counter
                      value={kpi.value}
                      suffix={kpi.suffix}
                      className="whitespace-nowrap text-[15px] font-bold tracking-tight text-jabby-ink"
                    />
                    {"change" in kpi ? (
                      <span className="shrink-0 rounded-full bg-jabby-tintGreen px-1.5 py-0.5 text-[10px] font-bold text-jabby-success">
                        {kpi.change}
                      </span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2.5 grid gap-2.5 sm:grid-cols-[1.25fr_0.75fr]">
              <div className="rounded-xl border border-jabby-border bg-white p-3 shadow-card">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="truncate whitespace-nowrap text-xs font-bold text-jabby-ink">
                    Paiements récupérés
                  </h3>
                  <span className="shrink-0 text-[11px] font-bold text-jabby-success">+24%</span>
                </div>
                <div className="mt-2">
                  <RecoveryChart />
                </div>
              </div>

              <div className="rounded-xl border border-jabby-border bg-white p-3 shadow-card">
                <h3 className="text-xs font-bold text-jabby-ink">Activité récente</h3>
                <div className="mt-2.5">
                  <LiveFeed />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating notifications */}
      <div
        className="animate-float absolute -left-7 -top-6 hidden items-center gap-3 rounded-2xl border border-jabby-border/80 bg-white/95 py-3 pl-3 pr-4 shadow-toast backdrop-blur-sm xl:flex"
        aria-hidden
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-jabby-tintGreen text-jabby-success">
          <CircleCheck className="h-5 w-5" strokeWidth={2} />
        </span>
        <div>
          <p className="text-[13px] font-bold leading-4 text-jabby-ink">Paiement reçu</p>
          <p className="text-xs font-medium text-jabby-muted">+12 000 MAD · dossier prioritaire</p>
        </div>
      </div>

      <div
        className="animate-float-late absolute -right-5 -bottom-6 hidden items-center gap-3 rounded-2xl border border-jabby-border/80 bg-white/95 py-3 pl-3 pr-4 shadow-toast backdrop-blur-sm xl:flex"
        aria-hidden
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-jabby-tintBlue text-jabby-blue">
          <CalendarCheck className="h-5 w-5" strokeWidth={2} />
        </span>
        <div>
          <p className="text-[13px] font-bold leading-4 text-jabby-ink">Promesse de paiement</p>
          <p className="text-xs font-medium text-jabby-muted">Échéance confirmée</p>
        </div>
      </div>
    </div>
  );
}
