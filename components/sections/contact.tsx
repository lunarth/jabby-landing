"use client";

import { useState, type FormEvent } from "react";
import { Clock, Mail, Send } from "lucide-react";

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import { Reveal } from "@/components/ui/reveal";

const inputClass =
  "w-full rounded-xl border border-jabby-border bg-white px-4 py-3 text-sm text-jabby-ink shadow-hairline outline-none transition-all duration-200 placeholder:text-jabby-faint focus:border-jabby-blue focus:ring-2 focus:ring-jabby-blue/15";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("Vos informations restent confidentielles. Aucun engagement.");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    if (name.trim().length < 2 || !email.includes("@")) {
      setSubmitState("error");
      setFeedback("Merci de renseigner un nom et un email professionnel valides.");
      return;
    }

    setSubmitState("submitting");
    setFeedback("Envoi en cours...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(result?.message || "Impossible d'envoyer la demande pour le moment.");
      }

      setSubmitState("success");
      setFeedback("Merci, votre demande a bien été envoyée. Notre équipe vous répond sous 24 h.");
      form.reset();
    } catch (error) {
      setSubmitState("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Impossible d'envoyer la demande pour le moment."
      );
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-jabby-border/70 bg-jabby-bg/60 py-24 lg:py-32">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="eyebrow text-jabby-orange">Contact</p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-normal text-jabby-ink sm:text-[40px]">
            Parlons de vos créances.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-8 text-jabby-muted">
            Expliquez-nous votre situation : volume d&apos;impayés, secteur,
            outils actuels. On vous montre ce que jabby peut récupérer.
          </p>

          <ul className="mt-8 space-y-4">
            <li>
              <a
                href="mailto:contact@jabby.io"
                className="focus-ring group inline-flex items-center gap-3 rounded-lg text-[15px] font-medium text-jabby-ink transition-colors hover:text-jabby-blue"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-jabby-border bg-white text-jabby-blue shadow-hairline transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-card">
                  <Mail className="h-4 w-4" strokeWidth={2} aria-hidden />
                </span>
                contact@jabby.io
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/jabby"
                target="_blank"
                rel="noreferrer"
                className="focus-ring group inline-flex items-center gap-3 rounded-lg text-[15px] font-medium text-jabby-ink transition-colors hover:text-jabby-blue"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-jabby-border bg-white text-jabby-blue shadow-hairline transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-card">
                  <LinkedinIcon />
                </span>
                jabby sur LinkedIn
              </a>
            </li>
            <li className="inline-flex items-center gap-3 text-[15px] font-medium text-jabby-muted">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-jabby-border bg-white text-jabby-orange shadow-hairline">
                <Clock className="h-4 w-4" strokeWidth={2} aria-hidden />
              </span>
              Réponse sous 24 h, garantie.
            </li>
          </ul>
        </Reveal>

        <Reveal delay={140}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-jabby-border bg-white p-7 shadow-pop sm:p-9"
          >
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-[13px] font-semibold text-jabby-ink">
                    Nom complet
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Votre nom"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-[13px] font-semibold text-jabby-ink">
                    Email professionnel
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="vous@entreprise.ma"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-[13px] font-semibold text-jabby-ink">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Décrivez votre besoin : volume de créances, secteur, outils actuels…"
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitState === "submitting"}
              className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-jabby-blue px-6 text-[15px] font-semibold text-white shadow-glowBlue transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-jabby-blueHover active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {submitState === "submitting" ? "Envoi en cours..." : "Envoyer ma demande"}
              <Send className="h-4 w-4" strokeWidth={2} aria-hidden />
            </button>

            <p
              className={`mt-4 text-center text-xs leading-5 ${
                submitState === "success"
                  ? "text-jabby-success"
                  : submitState === "error"
                    ? "text-jabby-orange"
                    : "text-jabby-faint"
              }`}
              aria-live="polite"
            >
              {feedback}
              {submitState === "error" ? (
                <>
                  {" "}
                  <a className="font-semibold underline" href="mailto:contact@jabby.io">
                    Écrivez-nous directement.
                  </a>
                </>
              ) : null}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
