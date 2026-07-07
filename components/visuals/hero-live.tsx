"use client";

import { useEffect, useRef, useState } from "react";
import { Banknote, Clock, MessageCircle, Phone } from "lucide-react";

type LiveEvent = {
  icon: "phone" | "message" | "clock" | "banknote";
  title: string;
  detail: string;
  badge: string;
  badgeClass: string;
  amount?: number;
};

const BASE_TOTAL = 1_243_600;

const events: LiveEvent[] = [
  {
    icon: "phone",
    title: "Appel de relance effectué",
    detail: "Dossier 4821 · au nom de votre entreprise",
    badge: "Journalisé",
    badgeClass: "bg-jabby-bg text-jabby-muted"
  },
  {
    icon: "message",
    title: "Message WhatsApp délivré",
    detail: "Dossier 3310 · lien de paiement inclus",
    badge: "Délivré",
    badgeClass: "bg-jabby-tintBlue text-jabby-blue"
  },
  {
    icon: "clock",
    title: "Promesse de paiement enregistrée",
    detail: "Dossier 4821 · échéance sous 7 jours",
    badge: "Suivie",
    badgeClass: "bg-jabby-tintBlue text-jabby-blue"
  },
  {
    icon: "banknote",
    title: "Paiement reçu",
    detail: "Dossier 3310 · 12 400 MAD",
    badge: "Réconcilié",
    badgeClass: "bg-jabby-tintGreen text-jabby-success",
    amount: 12_400
  },
  {
    icon: "banknote",
    title: "Paiement reçu",
    detail: "Dossier 4821 · 8 150 MAD",
    badge: "Réconcilié",
    badgeClass: "bg-jabby-tintGreen text-jabby-success",
    amount: 8_150
  }
];

const icons = {
  phone: Phone,
  message: MessageCircle,
  clock: Clock,
  banknote: Banknote
};

function formatMad(value: number) {
  return new Intl.NumberFormat("fr-FR").format(value).replace(/[  ]/g, " ");
}

export function HeroLive() {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [total, setTotal] = useState(BASE_TOTAL);
  const [displayTotal, setDisplayTotal] = useState(BASE_TOTAL);

  // Play the scripted sequence once when the panel enters the viewport.
  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let timeouts: Array<ReturnType<typeof setTimeout>> = [];

    if (reduced || typeof IntersectionObserver === "undefined") {
      timeouts.push(
        setTimeout(() => {
          setVisibleCount(events.length);
          const finalTotal =
            BASE_TOTAL + events.reduce((sum, e) => sum + (e.amount ?? 0), 0);
          setTotal(finalTotal);
          setDisplayTotal(finalTotal);
        }, 0)
      );
      return () => timeouts.forEach(clearTimeout);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }
          observer.disconnect();
          events.forEach((event, index) => {
            timeouts.push(
              setTimeout(() => {
                setVisibleCount(index + 1);
                if (event.amount) {
                  setTotal((current) => current + event.amount!);
                }
              }, 700 + index * 1150)
            );
          });
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
      timeouts = [];
    };
  }, []);

  // Smoothly animate the displayed total toward the target total.
  useEffect(() => {
    if (displayTotal === total) {
      return;
    }
    const from = displayTotal;
    const delta = total - from;
    const startedAt = performance.now();
    const duration = 900;
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayTotal(Math.round(from + delta * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  return (
    <div ref={ref} className="relative">
      <div className="overflow-hidden rounded-2xl border border-jabby-border bg-white shadow-mockup">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-jabby-border bg-jabby-bg/70 px-4 py-2.5">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-jabby-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-jabby-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-jabby-border" />
          </div>
          <div className="rounded-md border border-jabby-border bg-white px-3 py-1 text-[11px] font-medium text-jabby-muted">
            app.jabby.io
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-jabby-tintGreen px-2 py-0.5 text-[10px] font-semibold text-jabby-success">
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-jabby-success"
              aria-hidden
            />
            En direct
          </span>
        </div>

        <div className="p-5 sm:p-6">
          {/* Recovered total */}
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-jabby-faint">
                Récupéré ce trimestre
              </p>
              <p className="mt-1.5 text-[32px] font-semibold leading-none tabular-nums tracking-normal text-jabby-ink">
                {formatMad(displayTotal)}
                <span className="ml-1.5 text-base font-medium text-jabby-muted">
                  MAD
                </span>
              </p>
            </div>
            <div className="flex gap-6 border-l border-jabby-border pl-6">
              <div>
                <p className="text-[11px] font-medium text-jabby-muted">
                  Encours confié
                </p>
                <p className="mt-1 text-[15px] font-semibold tabular-nums text-jabby-ink">
                  9,8 M MAD
                </p>
              </div>
              <div>
                <p className="text-[11px] font-medium text-jabby-muted">
                  Promesses actives
                </p>
                <p className="mt-1 text-[15px] font-semibold tabular-nums text-jabby-ink">
                  486 300 MAD
                </p>
              </div>
            </div>
          </div>

          {/* Live feed */}
          <div className="mt-5 rounded-xl border border-jabby-border bg-white">
            <div className="flex items-center justify-between border-b border-jabby-border px-4 py-2.5">
              <h3 className="text-[13px] font-semibold text-jabby-ink">
                Résolution en cours
              </h3>
              <span className="text-[11px] font-medium text-jabby-muted">
                Chaque action journalisée
              </span>
            </div>
            <ul className="divide-y divide-jabby-border/70" aria-live="polite">
              {events.map((event, index) => {
                const EventIcon = icons[event.icon];
                const visible = index < visibleCount;
                return (
                  <li
                    key={`${event.title}-${index}`}
                    className={`flex items-center gap-3 px-4 py-2.5 transition-all duration-500 ease-out ${
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-1.5 opacity-0"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                        event.icon === "banknote"
                          ? "bg-jabby-tintGreen text-jabby-success"
                          : event.icon === "clock"
                            ? "bg-jabby-tintBlue text-jabby-blue"
                            : "bg-jabby-tintBlue text-jabby-blue"
                      }`}
                    >
                      <EventIcon
                        className="h-3.5 w-3.5"
                        strokeWidth={1.8}
                        aria-hidden
                      />
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
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${event.badgeClass}`}
                    >
                      {event.badge}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
