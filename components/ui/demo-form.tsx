"use client";

import { useState, type FormEvent } from "react";

const inputClassName =
  "w-full rounded-lg border border-jabby-border bg-white px-3.5 py-2.5 text-[15px] text-jabby-ink placeholder:text-jabby-faint outline-none transition-colors focus:border-jabby-blue focus:ring-2 focus:ring-jabby-blue/15";

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(
      `Demande de démo — ${company || name}`
    );
    const body = encodeURIComponent(
      `Nom : ${name}\nSociété : ${company}\nEmail : ${email}\n\n${message}`
    );

    window.location.href = `mailto:contact@jabby.ma?subject=${subject}&body=${body}`;
    setSubmitted(true);
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
      </div>

      <div className="mt-5">
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
          placeholder="Secteur, volume de créances, organisation actuelle du recouvrement…"
          className={`${inputClassName} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="focus-ring mt-6 inline-flex h-12 w-full items-center justify-center rounded-lg bg-jabby-blue px-6 text-[15px] font-semibold text-white transition-colors hover:bg-jabby-blueHover"
      >
        Envoyer la demande
      </button>

      <p className="mt-4 text-center text-[13px] leading-5 text-jabby-muted" aria-live="polite">
        {submitted
          ? "Votre client email s'est ouvert avec la demande préremplie. Vous pouvez aussi nous écrire directement."
          : "L'envoi ouvre votre client email avec la demande préremplie."}{" "}
        <a
          href="mailto:contact@jabby.ma"
          className="focus-ring rounded font-medium text-jabby-blue"
        >
          contact@jabby.ma
        </a>
      </p>
    </form>
  );
}
