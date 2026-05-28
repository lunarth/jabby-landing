"use client";

import { Check } from "lucide-react";
import { useEffect, useState } from "react";

const payments = [
  { amount: "+8 200 MAD", company: "Maroc Leasing" },
  { amount: "+12 500 MAD", company: "Wafasalaf" },
  { amount: "+6 750 MAD", company: "Inwi Business" },
  { amount: "+9 200 MAD", company: "Eqdom" },
  { amount: "+4 800 MAD", company: "Lydec" },
  { amount: "+15 300 MAD", company: "Sofac" }
];

const total = 56750;
const cycleMs = 7200;
const rowStepMs = 350;
const totalStartMs = 2250;
const countDurationMs = 1800;

function formatMad(value: number) {
  return new Intl.NumberFormat("fr-FR").format(value).replace(/\u202f/g, " ");
}

function getPrefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function RecoveredPaymentsVisual() {
  const [prefersReducedMotion] = useState(getPrefersReducedMotion);
  const [visibleRows, setVisibleRows] = useState(() =>
    prefersReducedMotion ? payments.length : 0
  );
  const [totalVisible, setTotalVisible] = useState(prefersReducedMotion);
  const [counter, setCounter] = useState(() => (prefersReducedMotion ? total : 0));

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let timeouts: Array<ReturnType<typeof setTimeout>> = [];
    let frame = 0;

    const runCycle = () => {
      timeouts.forEach(clearTimeout);
      timeouts = [];
      if (frame) {
        cancelAnimationFrame(frame);
      }

      setVisibleRows(0);
      setTotalVisible(false);
      setCounter(0);

      payments.forEach((_, index) => {
        timeouts.push(
          setTimeout(() => {
            setVisibleRows(index + 1);
          }, index * rowStepMs)
        );
      });

      timeouts.push(
        setTimeout(() => {
          setTotalVisible(true);
          const startedAt = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - startedAt) / countDurationMs, 1);
            if (progress >= 1) {
              setCounter(total);
              return;
            }

            const eased = 1 - Math.pow(1 - progress, 3);
            setCounter(Math.round(total * eased));

            frame = requestAnimationFrame(tick);
          };

          frame = requestAnimationFrame(tick);
        }, totalStartMs)
      );
    };

    runCycle();
    const interval = setInterval(runCycle, cycleMs);

    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [prefersReducedMotion]);

  return (
    <div className="mt-5 flex min-h-0 flex-1 flex-col rounded-2xl border border-jabby-border bg-[#FBFCFE] p-4">
      <div className="space-y-1">
        {payments.map((payment, index) => (
          <div
            key={payment.company}
            className={`flex items-center gap-2 rounded-lg border border-jabby-border bg-white px-3.5 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.05)] transition-all duration-500 ease-out ${
              visibleRows > index
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-jabby-lightGreen text-jabby-success">
              <Check className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            </span>
            <p className="min-w-0 flex-1 truncate text-[12px] leading-4">
              <span className="font-semibold text-jabby-blue">{payment.amount}</span>
              <span className="text-jabby-muted"> — {payment.company}</span>
            </p>
          </div>
        ))}
      </div>

      <div
        className={`mt-auto rounded-xl p-3.5 shadow-[0_14px_30px_rgba(27,75,155,0.18)] transition-all duration-700 ease-out ${
          totalVisible
            ? "translate-y-0 bg-jabby-blue opacity-100"
            : "translate-y-2 bg-white opacity-0"
        }`}
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/80">
          Total récupéré
        </p>
        <p className="mt-1 text-2xl font-bold text-white">+{formatMad(counter)} MAD</p>
      </div>
    </div>
  );
}
