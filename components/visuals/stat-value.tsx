"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

export type StatPart = { text: string } | { count: number };

function formatFr(value: number) {
  return new Intl.NumberFormat("fr-FR").format(value).replace(/[  ]/g, " ");
}

/*
 * Animated stat: numbers count up and an orange underline sweeps in,
 * both driven by the same eased progress, when the stat enters the
 * viewport. Server-renders the final state so crawlers and no-JS
 * visitors always see the real numbers.
 */
export function StatValue({
  parts,
  srValue,
  duration = 1500,
  delay = 0
}: {
  parts: StatPart[];
  srValue: string;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // 1 = final state (SSR and reduced motion); animated from 0 after mount.
  const [progress, setProgress] = useState(1);
  const [armed, setArmed] = useState(false);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    // Intentional pre-paint reset: the SSR markup shows the final numbers
    // (for crawlers and no-JS); before first paint we rewind to 0 so the
    // count-up starts from a clean state without flashing the final value.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgress(0);
    setArmed(true);
  }, []);

  useEffect(() => {
    if (!armed) {
      return;
    }
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setProgress(1);
      return;
    }

    let frame = 0;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }
          observer.disconnect();
          timeout = setTimeout(() => {
            const startedAt = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - startedAt) / duration, 1);
              setProgress(1 - Math.pow(1 - p, 3));
              if (p < 1) {
                frame = requestAnimationFrame(tick);
              }
            };
            frame = requestAnimationFrame(tick);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (timeout) clearTimeout(timeout);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [armed, delay, duration]);

  return (
    <div ref={ref} role="text" aria-label={srValue}>
      <p
        aria-hidden
        className="text-[26px] font-semibold tabular-nums tracking-normal text-jabby-ink"
      >
        {parts.map((part, index) =>
          "text" in part ? (
            <span key={index}>{part.text}</span>
          ) : (
            <span key={index}>{formatFr(Math.round(part.count * progress))}</span>
          )
        )}
      </p>
      <span
        aria-hidden
        className="mt-3 block h-0.5 w-10 origin-left rounded-full bg-jabby-orange"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
