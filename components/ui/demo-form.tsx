"use client";

import { useState, type FormEvent } from "react";

const inputClassName =
  "w-full rounded-lg border border-jabby-border bg-white px-3.5 py-2.5 text-[15px] text-jabby-ink placeholder:text-jabby-faint outline-none transition-colors focus:border-jabby-blue focus:ring-2 focus:ring-jabby-blue/15";

const sectors = [
  "Éducation privée",
  "Santé privée",
  "Distribution & services B2B",
  "Microfinance",
  "Sociétés de financement & leasing",
  "Assurance",
  "Immobilier",
  "Télécom",
  "Autre"
];

const volumes = [
  "Moins de 1 M MAD",
  "1 à 5 M MAD",
  "5 à 20 M MAD",
  "20 à 100 M MAD",
  "Plus de 100 M MAD"
];

type SubmitState = "idle" | "sending" | "success" | "error";

export function DemoForm() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState(
    "Vos informations sont envoyées de manière sécurisée à notre équipe."
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const get = (key: string) => String(data.get(key) ?? "");
    const email = get("email").trim();
    const name = get("name").trim();

    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setFeedback("Merci de renseigner un nom et un email professionnel valides.");
      return;
    }

    setStatus("sending");
    setFeedback("Envoi en cours...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          role: get("role"),
          company: get("company"),
          email,
          sector: get("sector"),
          volume: get("volume"),
          message: get("message")
        })
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(result?.message || "L'envoi n'a pas abouti.");
      }

      setStatus("success");
      setFeedback(
        result?.message ||
          "Merci, votre demande a bien été envoyée. Nous revenons vers vous rapidement."
      );
      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "L'envoi n'a pas abouti. Écrivez-nous directement."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-jabby-border bg-white p-7 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-[13px] font-medium text-jabby-ink"
          >
            Nom complet
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Votre nom"
            className={inputClassName}
          />
        </div>
        <div>
          <label
            htmlFor="contact-role"
            className="mb-1.5 block text-[13px] font-medium text-jabby-ink"
          >
            Fonction
          </label>
          <input
            id="contact-role"
            name="role"
            type="text"
            autoComplete="organization-title"
            placeholder="DAF, recouvrement, risques…"
            className={inputClassName}
          />
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-company"
            className="mb-1.5 block text-[13px] font-medium text-jabby-ink"
          >
            Société
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            placeholder="Nom de votre société"
            className={inputClassName}
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-[13px] font-medium text-jabby-ink"
          >
            Email professionnel
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="vous@entreprise.ma"
            className={inputClassName}
          />
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-sector"
            className="mb-1.5 block text-[13px] font-medium text-jabby-ink"
          >
            Secteur
          </label>
          <select
            id="contact-sector"
            name="sector"
            required
            defaultValue=""
            className={`${inputClassName} appearance-none`}
          >
            <option value="" disabled>
              Sélectionnez votre secteur
            </option>
            {sectors.map((sector) => (
              <option key={sector} value={sector}>
                {sector}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="contact-volume"
            className="mb-1.5 block text-[13px] font-medium text-jabby-ink"
          >
            Créances en cours
          </label>
          <select
            id="contact-volume"
            name="volume"
            defaultValue=""
            className={`${inputClassName} appearance-none`}
          >
            <option value="" disabled>
              Ordre de grandeur
            </option>
            {volumes.map((volume) => (
              <option key={volume} value={volume}>
                {volume}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-[13px] font-medium text-jabby-ink"
        >
          Votre contexte
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="Type de créances, ancienneté, organisation actuelle du recouvrement…"
          className={`${inputClassName} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="focus-ring mt-6 inline-flex h-12 w-full items-center justify-center rounded-lg bg-jabby-blue px-6 text-[15px] font-semibold text-white transition-colors hover:bg-jabby-blueHover disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Envoi..." : "Envoyer la demande"}
      </button>

      <p
        className={`mt-4 text-center text-[13px] leading-5 ${
          status === "success"
            ? "text-jabby-success"
            : status === "error"
              ? "text-jabby-orangeDark"
              : "text-jabby-muted"
        }`}
        aria-live="polite"
      >
        {feedback}{" "}
        <a
          href="mailto:contact@jabby.io"
          className="focus-ring rounded font-medium text-jabby-blue"
        >
          contact@jabby.io
        </a>
      </p>
      <p className="mt-3 text-center text-[12px] leading-5 text-jabby-faint">
        Vos informations ne sont utilisées que pour traiter votre demande,
        conformément à la loi 09-08. Aucune prospection sans votre accord.
      </p>
    </form>
  );
}
