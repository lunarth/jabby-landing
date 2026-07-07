import type { CSSProperties } from "react";
import {
  Banknote,
  ChartSpline,
  Clock,
  ScrollText,
  Workflow
} from "lucide-react";

const nodes = [
  {
    icon: ScrollText,
    label: "Factures impayées",
    sub: "déposées",
    chip: "bg-jabby-tintOrange text-jabby-orangeDark"
  },
  {
    icon: Workflow,
    label: "Relances structurées",
    sub: "multicanal",
    chip: "bg-jabby-tintBlue text-jabby-blue"
  },
  {
    icon: Clock,
    label: "Promesses",
    sub: "suivies",
    chip: "bg-jabby-tintBlue text-jabby-blue"
  },
  {
    icon: Banknote,
    label: "Paiements",
    sub: "réconciliés",
    chip: "bg-jabby-tintGreen text-jabby-success"
  },
  {
    icon: ChartSpline,
    label: "Dashboard",
    sub: "temps réel",
    chip: "bg-jabby-tintBlue text-jabby-blue"
  }
];

function seconds(value: number): CSSProperties {
  return { animationDelay: `${value}s` };
}

/*
 * The jabby loop: a continuously animated orchestration strip. Dashes flow
 * along the tracks, a dossier dot hands off from segment to segment, and
 * each node pulses when the dot reaches it. Pure CSS, 8s period, disabled
 * under prefers-reduced-motion.
 */
export function JabbyLoop() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-jabby-border bg-white shadow-card">
      <div className="relative flex items-center justify-between border-b border-jabby-border/70 px-6 py-3.5">
        <p className="text-xs font-semibold uppercase tracking-eyebrow text-jabby-faint">
          La boucle jabby
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-jabby-tintGreen px-2.5 py-1 text-[11px] font-semibold text-jabby-success">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-jabby-success" aria-hidden />
          En continu
        </span>
      </div>

      {/* Desktop: horizontal loop */}
      <div className="relative hidden items-center gap-0 px-6 py-7 md:flex">
        {nodes.map((node, index) => {
          const NodeIcon = node.icon;
          const isLast = index === nodes.length - 1;
          return (
            <div key={node.label} className="contents">
              <div className="flex w-[110px] shrink-0 flex-col items-center rounded-xl border border-white/70 bg-white/75 px-2 py-4 text-center shadow-hairline backdrop-blur-sm lg:w-[132px]">
                <span
                  className={`loop-node flex h-10 w-10 items-center justify-center rounded-xl ${node.chip}`}
                  style={seconds(index === 0 ? 0 : index * 2 - 0.3)}
                >
                  <NodeIcon className="h-[18px] w-[18px]" strokeWidth={1.8} aria-hidden />
                </span>
                <p className="mt-2.5 text-[12.5px] font-semibold leading-4 tracking-normal text-jabby-ink">
                  {node.label}
                </p>
                <p className="mt-0.5 text-[11px] text-jabby-muted">{node.sub}</p>
              </div>
              {!isLast ? (
                <div className="relative mx-1.5 min-w-6 flex-1" aria-hidden>
                  <div className="loop-track-x w-full" />
                  <span className="loop-dot" style={seconds(index * 2)} />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* Mobile: vertical loop */}
      <div className="relative flex flex-col items-stretch gap-0 px-5 py-6 md:hidden">
        {nodes.map((node, index) => {
          const NodeIcon = node.icon;
          const isLast = index === nodes.length - 1;
          return (
            <div key={node.label} className="contents">
              <div className="flex items-center gap-3.5 rounded-xl border border-white/70 bg-white/75 px-4 py-3 shadow-hairline backdrop-blur-sm">
                <span
                  className={`loop-node flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${node.chip}`}
                  style={seconds(index === 0 ? 0 : index * 2 - 0.3)}
                >
                  <NodeIcon className="h-4 w-4" strokeWidth={1.8} aria-hidden />
                </span>
                <div>
                  <p className="text-[13px] font-semibold leading-4 text-jabby-ink">
                    {node.label}
                  </p>
                  <p className="mt-0.5 text-[11px] text-jabby-muted">{node.sub}</p>
                </div>
              </div>
              {!isLast ? (
                <div className="loop-track-y mx-auto h-6" aria-hidden />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
