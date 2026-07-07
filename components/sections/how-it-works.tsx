"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode
} from "react";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section";

/* -------------------------------------------------------------------------
 * A dossier's journey: file in, strategy validated, sequences operated,
 * cash reconciled. One stage per step; the connector flows between them
 * and each step's mini-visual plays when the progression reaches it.
 * ------------------------------------------------------------------------- */

const STAGE_INTERVAL = 950;

function delayed(active: boolean, ms: number): CSSProperties {
  return { transitionDelay: active ? `${ms}ms` : "0ms" };
}

/* ------------------------------ Step visuals ------------------------------ */

function VisualShell({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 flex min-h-[104px] flex-col justify-center overflow-hidden rounded-lg border border-jabby-border/80 bg-jabby-bg/70 px-3 py-3">
      {children}
    </div>
  );
}

function DepositVisual({ active }: { active: boolean }) {
  const rows = [
    { ref: "#2143", amount: "18 400 MAD" },
    { ref: "#2167", amount: "6 250 MAD" }
  ];
  return (
    <VisualShell>
      <div className="space-y-1.5">
        {rows.map((row, index) => (
          <div
            key={row.ref}
            className={`flex items-center justify-between rounded-md border border-jabby-border/70 bg-white px-2.5 py-1.5 text-[10.5px] tabular-nums transition-all duration-500 ${
              active ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
            }`}
            style={delayed(active, 150 + index * 160)}
          >
            <span className="text-jabby-muted">{row.ref}</span>
            <span className="font-semibold text-jabby-ink">{row.amount}</span>
            <svg
              viewBox="0 0 12 12"
              className={`h-3 w-3 text-jabby-success transition-all duration-300 ${
                active ? "scale-100 opacity-100" : "scale-50 opacity-0"
              }`}
              style={delayed(active, 380 + index * 160)}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M2.5 6.5l2.5 2.5 4.5-5.5" />
            </svg>
          </div>
        ))}
      </div>
      <span
        className={`mt-2 self-start rounded-full bg-jabby-tintGreen px-2 py-0.5 text-[10px] font-semibold text-jabby-success transition-all duration-400 ${
          active ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
        style={delayed(active, 700)}
      >
        Données vérifiées
      </span>
    </VisualShell>
  );
}

function StrategyVisual({ active }: { active: boolean }) {
  const rules = ["Cadence", "Tonalité", "Escalade"];
  return (
    <VisualShell>
      <div className="space-y-1.5">
        {rules.map((rule, index) => (
          <div
            key={rule}
            className={`flex items-center justify-between rounded-md border border-jabby-border/70 bg-white px-2.5 py-1.5 transition-all duration-500 ${
              active ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
            }`}
            style={delayed(active, 150 + index * 160)}
          >
            <span className="text-[10.5px] font-medium text-jabby-ink">
              {rule}
            </span>
            <span
              className={`rounded-full bg-jabby-tintBlue px-1.5 py-0.5 text-[9px] font-semibold text-jabby-blue transition-all duration-300 ${
                active ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
              style={delayed(active, 400 + index * 160)}
            >
              Validé
            </span>
          </div>
        ))}
      </div>
    </VisualShell>
  );
}

function OperateVisual({ active }: { active: boolean }) {
  const channels = [
    { icon: Phone, label: "Appel" },
    { icon: MessageCircle, label: "WhatsApp" },
    { icon: Mail, label: "Email" }
  ];
  return (
    <VisualShell>
      <div className="flex flex-wrap gap-1">
        {channels.map((channel, index) => {
          const ChannelIcon = channel.icon;
          return (
            <span
              key={channel.label}
              className={`inline-flex items-center gap-1 rounded-full border border-jabby-blue/20 bg-jabby-tintBlue px-1.5 py-1 text-[10px] font-semibold text-jabby-blue transition-all duration-500 ${
                active ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
              }`}
              style={delayed(active, 150 + index * 180)}
            >
              <ChannelIcon className="h-3 w-3" strokeWidth={1.8} aria-hidden />
              {channel.label}
            </span>
          );
        })}
      </div>
      <div
        className={`mt-2.5 flex items-center justify-between rounded-md border border-jabby-border/70 bg-white px-2.5 py-1.5 transition-all duration-500 ${
          active ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
        }`}
        style={delayed(active, 720)}
      >
        <span className="text-[10.5px] font-medium text-jabby-ink">
          Promesse enregistrée
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-jabby-faint">
          Journalisé
        </span>
      </div>
    </VisualShell>
  );
}

function CashVisual({ active }: { active: boolean }) {
  return (
    <VisualShell>
      <div className="flex items-baseline justify-between">
        <p
          className={`text-[19px] font-semibold tabular-nums tracking-normal text-jabby-success transition-all duration-600 ${
            active ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
          style={delayed(active, 250)}
        >
          + 42 000 MAD
        </p>
        <span
          className={`text-[9px] font-medium uppercase tracking-[0.08em] text-jabby-faint transition-opacity duration-500 ${
            active ? "opacity-100" : "opacity-0"
          }`}
          style={delayed(active, 900)}
        >
          Illustration
        </span>
      </div>
      <div
        className={`mt-2.5 flex items-center justify-between rounded-md border border-jabby-border/70 bg-white px-2.5 py-1.5 transition-all duration-500 ${
          active ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
        }`}
        style={delayed(active, 550)}
      >
        <span className="text-[10.5px] font-medium text-jabby-ink">
          Paiement réconcilié
        </span>
        <span className="rounded-full bg-jabby-tintGreen px-1.5 py-0.5 text-[9px] font-semibold text-jabby-success">
          Payé
        </span>
      </div>
    </VisualShell>
  );
}

/* ------------------------------ Timeline parts ---------------------------- */

function AnimatedConnector({
  active,
  filling,
  orientation
}: {
  active: boolean;
  filling: boolean;
  orientation: "horizontal" | "vertical";
}) {
  if (orientation === "vertical") {
    return (
      <span
        className="absolute -bottom-10 left-[17px] top-12 w-px bg-jabby-border lg:hidden"
        aria-hidden
      >
        <span
          className="block w-full bg-jabby-blue transition-[height] duration-[850ms] ease-out"
          style={{ height: active ? "100%" : "0%" }}
        />
      </span>
    );
  }

  return (
    <span
      className="relative ml-3 mr-3 hidden h-px flex-1 bg-jabby-border lg:block"
      aria-hidden
    >
      <span
        className="absolute inset-y-0 left-0 bg-jabby-blue transition-[width] duration-[850ms] ease-out"
        style={{ width: active ? "100%" : "0%" }}
      >
        <span
          className={`absolute -right-[3px] -top-[2.5px] h-1.5 w-1.5 rounded-full bg-jabby-orange shadow-[0_0_0_3px_rgba(232,101,26,0.18)] transition-opacity duration-200 ${
            filling ? "opacity-100" : "opacity-0"
          }`}
        />
      </span>
    </span>
  );
}

function StepMarker({
  number,
  active,
  isLast
}: {
  number: string;
  active: boolean;
  isLast: boolean;
}) {
  return (
    <span
      className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[13px] font-semibold tabular-nums transition-all duration-300 ${
        active
          ? isLast
            ? "border-jabby-success bg-jabby-success text-white shadow-[0_0_0_6px_rgba(21,128,61,0.14)]"
            : "border-jabby-blue bg-jabby-blue text-white shadow-[0_0_0_6px_rgba(27,75,155,0.12)]"
          : "scale-90 border-jabby-border bg-white text-jabby-faint"
      }`}
    >
      {isLast && active ? (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path
            d="M5 12.5l4.5 5 9-11"
            style={{
              strokeDasharray: 24,
              strokeDashoffset: 24,
              animation: "draw-stroke 0.45s ease-out 0.15s forwards"
            }}
          />
        </svg>
      ) : (
        number
      )}
    </span>
  );
}

const steps = [
  {
    number: "01",
    title: "Déposez vos créances",
    text: "Fichier sécurisé ou API. Données vérifiées et segmentées.",
    Visual: DepositVisual
  },
  {
    number: "02",
    title: "Validez la stratégie",
    text: "Cadence, tonalité, plafonds et escalade, définis avec vous.",
    Visual: StrategyVisual
  },
  {
    number: "03",
    title: "Nous opérons",
    text: "Relances multicanales, promesses négociées. Tout est journalisé.",
    Visual: OperateVisual
  },
  {
    number: "04",
    title: "Vous encaissez",
    text: "Paiements réconciliés, reporting continu, commission sur le recouvré.",
    Visual: CashVisual
  }
];

function ProcessStep({
  step,
  index,
  stage
}: {
  step: (typeof steps)[number];
  index: number;
  stage: number;
}) {
  const k = index + 1;
  const isLast = index === steps.length - 1;
  const active = stage >= k;
  const filling = stage === k && !isLast;
  const { Visual } = step;

  return (
    <li className="relative flex gap-5 lg:block">
      {!isLast ? (
        <AnimatedConnector active={active} filling={filling} orientation="vertical" />
      ) : null}

      <div className="flex items-center lg:mb-5">
        <StepMarker number={step.number} active={active} isLast={isLast} />
        {!isLast ? (
          <AnimatedConnector active={active} filling={filling} orientation="horizontal" />
        ) : null}
      </div>

      <div
        className={`group min-w-0 flex-1 rounded-xl border bg-white p-5 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-jabby-blue/30 hover:shadow-lift lg:mr-6 ${
          active
            ? "translate-y-0 border-jabby-border opacity-100 shadow-card"
            : "translate-y-1.5 border-jabby-border/60 opacity-40"
        }`}
      >
        <h3 className="text-[16px] font-semibold tracking-normal text-jabby-ink">
          {step.title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-5 text-jabby-muted">
          {step.text}
        </p>
        <Visual active={active} />
      </div>
    </li>
  );
}

function ProcessTimeline({
  stage,
  timelineRef
}: {
  stage: number;
  timelineRef: React.RefObject<HTMLOListElement>;
}) {
  return (
    <ol ref={timelineRef} className="mt-12 grid gap-y-10 lg:grid-cols-4 lg:gap-y-0">
      {steps.map((step, index) => (
        <ProcessStep key={step.number} step={step} index={index} stage={stage} />
      ))}
    </ol>
  );
}

/* --------------------------------- Section -------------------------------- */

export function HowItWorks() {
  const ref = useRef<HTMLOListElement>(null);
  // SSR and reduced motion render the completed state (stage 4).
  const [stage, setStage] = useState(4);
  const [armed, setArmed] = useState(false);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    // Intentional pre-paint reset: SSR shows the completed pipeline (for
    // crawlers and no-JS); before first paint we rewind to stage 0 so the
    // sequence can play from the start without flashing the end state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStage(0);
    setArmed(true);
  }, []);

  useEffect(() => {
    if (!armed) {
      return;
    }
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setStage(4);
      return;
    }

    const timeouts: Array<ReturnType<typeof setTimeout>> = [];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }
          observer.disconnect();
          for (let s = 1; s <= steps.length; s += 1) {
            timeouts.push(
              setTimeout(() => setStage(s), 250 + (s - 1) * STAGE_INTERVAL)
            );
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, [armed]);

  return (
    <section className="bg-jabby-bg">
      <div className="container-shell py-20 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Comment ça marche"
              title="De votre fichier à votre trésorerie"
            />
            <a
              href="/comment-ca-marche"
              className="focus-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold text-jabby-blue transition-colors hover:text-jabby-blueHover"
            >
              Voir le parcours détaillé
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </a>
          </div>
        </Reveal>

        <ProcessTimeline stage={stage} timelineRef={ref} />
      </div>
    </section>
  );
}
