import {
  Banknote,
  CircleCheck,
  Mail,
  MessageCircle,
  Phone,
  Upload
} from "lucide-react";

const steps = [
  {
    day: "J+0",
    icon: Upload,
    iconClass: "bg-jabby-tintBlue text-jabby-blue",
    title: "Dossier importé et segmenté",
    detail: "Validation des données · stratégie « B2B standard » assignée",
    badge: { label: "Validé", className: "bg-jabby-tintBlue text-jabby-blue" },
    stamp: "04 juin · 09:12"
  },
  {
    day: "J+2",
    icon: Mail,
    iconClass: "bg-jabby-tintBlue text-jabby-blue",
    title: "Rappel de paiement — email",
    detail: "Échéance rappelée, lien de paiement inclus",
    badge: { label: "Délivré", className: "bg-jabby-bg text-jabby-muted" },
    stamp: "06 juin · 10:00"
  },
  {
    day: "J+5",
    icon: MessageCircle,
    iconClass: "bg-jabby-tintBlue text-jabby-blue",
    title: "Relance — WhatsApp",
    detail: "Message conforme au modèle approuvé",
    badge: { label: "Lu", className: "bg-jabby-bg text-jabby-muted" },
    stamp: "09 juin · 11:30"
  },
  {
    day: "J+8",
    icon: Phone,
    iconClass: "bg-jabby-tintOrange text-jabby-orangeDark",
    title: "Appel de suivi",
    detail: "Promesse de paiement enregistrée au 13 juin",
    badge: {
      label: "Promesse",
      className: "bg-jabby-tintOrange text-jabby-orangeDark"
    },
    stamp: "12 juin · 14:05"
  },
  {
    day: "J+9",
    icon: Banknote,
    iconClass: "bg-jabby-tintGreen text-jabby-success",
    title: "Paiement reçu — 14 200 MAD",
    detail: "Encaissement réconcilié, dossier clôturé",
    badge: { label: "Recouvré", className: "bg-jabby-tintGreen text-jabby-success" },
    stamp: "13 juin · 09:41"
  }
];

const rules = [
  "Une relance maximum par canal toutes les 72 heures",
  "Escalade en revue humaine après deux relances sans réponse",
  "Arrêt immédiat de la séquence en cas de litige déclaré",
  "Envois limités aux jours ouvrés, de 9 h à 19 h"
];

export function OrchestrationTimeline() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
      {/* Case timeline */}
      <div className="overflow-hidden rounded-2xl border border-jabby-border bg-white shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-jabby-border bg-jabby-bg/60 px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-jabby-ink">
              Dossier #2847
            </p>
            <p className="mt-0.5 text-xs tabular-nums text-jabby-muted">
              Créance 14 200 MAD · Segment B2B · Séquence standard
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-jabby-tintGreen px-2.5 py-1 text-xs font-semibold text-jabby-success">
            <CircleCheck className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
            Recouvré en 9 jours
          </span>
        </div>

        <ol className="px-5 py-4">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <li key={step.title} className="relative flex gap-4 pb-1">
                {!isLast ? (
                  <span
                    className="absolute left-[17px] top-9 h-[calc(100%-28px)] w-px bg-jabby-border"
                    aria-hidden
                  />
                ) : null}
                <span
                  className={`relative z-10 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-jabby-border bg-white`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full ${step.iconClass}`}
                  >
                    <StepIcon className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden />
                  </span>
                </span>
                <div className={`min-w-0 flex-1 ${isLast ? "pb-1" : "pb-4"}`}>
                  <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                    <p className="text-[13px] font-semibold text-jabby-ink">
                      <span className="mr-2 inline-block w-8 tabular-nums text-jabby-faint">
                        {step.day}
                      </span>
                      {step.title}
                    </p>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${step.badge.className}`}
                    >
                      {step.badge.label}
                    </span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 pl-10">
                    <p className="text-xs leading-5 text-jabby-muted">
                      {step.detail}
                    </p>
                    <p className="text-[10px] tabular-nums text-jabby-faint">
                      Journalisé · {step.stamp}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Active rules */}
      <div className="flex flex-col gap-5">
        <div className="flex-1 rounded-2xl border border-jabby-border bg-white p-5 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-eyebrow text-jabby-faint">
            Règles appliquées
          </p>
          <ul className="mt-4 space-y-3.5">
            {rules.map((rule) => (
              <li key={rule} className="flex items-start gap-2.5">
                <CircleCheck
                  className="mt-0.5 h-4 w-4 shrink-0 text-jabby-blue"
                  strokeWidth={1.8}
                  aria-hidden
                />
                <span className="text-[13px] leading-5 text-jabby-ink">
                  {rule}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-jabby-blue/15 bg-jabby-tintBlue p-5">
          <p className="text-sm font-semibold text-jabby-blue">
            Aucune action improvisée
          </p>
          <p className="mt-2 text-[13px] leading-6 text-jabby-ink/80">
            La plateforme exécute uniquement les stratégies que vous avez
            définies et validées. Chaque écart passe par une revue humaine.
          </p>
        </div>
      </div>
    </div>
  );
}
