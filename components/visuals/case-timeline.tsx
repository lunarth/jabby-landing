import {
  Banknote,
  CircleCheck,
  MessageCircle,
  Phone,
  Upload
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    day: "J+0",
    icon: Upload,
    iconClass: "bg-jabby-tintBlue text-jabby-blue",
    title: "Créance déposée et vérifiée",
    detail: "Données validées, stratégie assignée, aucun effort côté client",
    badge: { label: "Pris en charge", className: "bg-jabby-tintBlue text-jabby-blue" },
    stamp: "09:12"
  },
  {
    day: "J+1",
    icon: Phone,
    iconClass: "bg-jabby-tintBlue text-jabby-blue",
    title: "Appel de relance",
    detail: "Au nom de votre entreprise, selon le script validé",
    badge: { label: "Journalisé", className: "bg-jabby-bg text-jabby-muted" },
    stamp: "10:40"
  },
  {
    day: "J+3",
    icon: MessageCircle,
    iconClass: "bg-jabby-tintBlue text-jabby-blue",
    title: "Relance WhatsApp",
    detail: "Lien de paiement sécurisé inclus",
    badge: { label: "Lu", className: "bg-jabby-bg text-jabby-muted" },
    stamp: "11:05"
  },
  {
    day: "J+6",
    icon: Phone,
    iconClass: "bg-jabby-tintOrange text-jabby-orangeDark",
    title: "Négociation et promesse",
    detail: "Échéancier convenu, promesse enregistrée et suivie",
    badge: {
      label: "Promesse",
      className: "bg-jabby-tintOrange text-jabby-orangeDark"
    },
    stamp: "14:22"
  },
  {
    day: "J+8",
    icon: Banknote,
    iconClass: "bg-jabby-tintGreen text-jabby-success",
    title: "Paiement reçu, 14 200 MAD",
    detail: "Encaissement réconcilié, dossier résolu",
    badge: { label: "Résolu", className: "bg-jabby-tintGreen text-jabby-success" },
    stamp: "09:41"
  }
];

export function CaseTimeline() {
  return (
    <div className="overflow-hidden rounded-2xl border border-jabby-border bg-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-jabby-border bg-jabby-bg/60 px-5 py-4">
        <div>
          <p className="text-sm font-semibold text-jabby-ink">Dossier type</p>
          <p className="mt-0.5 text-xs tabular-nums text-jabby-muted">
            Créance 14 200 MAD · Segment B2B
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-jabby-tintGreen px-2.5 py-1 text-xs font-semibold text-jabby-success">
          <CircleCheck className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
          Résolu en 8 jours
        </span>
      </div>

      <ol className="px-5 py-4">
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          const isLast = index === steps.length - 1;

          return (
            <Reveal key={step.title} delay={150 + index * 190}>
              <li className="relative flex gap-4">
                {!isLast ? (
                  <span
                    className="timeline-connector absolute left-[17px] top-10 h-[calc(100%-32px)] w-px bg-jabby-border"
                    aria-hidden
                  />
                ) : null}
                <span className="relative z-10 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-jabby-border bg-white">
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full ${step.iconClass}`}
                  >
                    <StepIcon
                      className="h-3.5 w-3.5"
                      strokeWidth={1.8}
                      aria-hidden
                    />
                  </span>
                </span>
                <div className={`min-w-0 flex-1 ${isLast ? "pb-1" : "pb-5"}`}>
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
            </Reveal>
          );
        })}
      </ol>
    </div>
  );
}
