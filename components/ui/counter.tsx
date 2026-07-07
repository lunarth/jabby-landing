"use client";

import { useEffect, useRef, useState } from "react";

function formatValue(value: number, decimals: number) {
  return value.toLocaleString("fr-FR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

/**
 * Animated count-up. Starts when the element enters the viewport,
 * eases out, respects prefers-reduced-motion, and renders the final
 * value on the server so the page reads correctly without JS.
 */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1600,
  className = ""
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => formatValue(value, decimals));
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      return;
    }

    let frame = 0;
    const run = () => {
      if (started.current) {
        return;
      }
      started.current = true;
      const startTime = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setDisplay(formatValue(value * eased, decimals));
        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      };

      setDisplay(formatValue(0, decimals));
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run();
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, decimals, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
