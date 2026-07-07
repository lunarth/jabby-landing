import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  FileUp,
  Mail,
  MessageCircle,
  Phone,
  RefreshCw,
  ScrollText,
  Sparkles,
  Workflow
} from "lucide-react";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";

function BentoCard({
  icon: CardIcon,
  title,
  text,
  className = "",
  children
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <article
      className={`card-hover group flex h-full max-w-full flex-col overflow-hidden rounded-3xl border border-jabby-border bg-white p-5 shadow-card sm:p-6 ${className}`}
    >
      <div className="bento-icon">
        <CardIcon className="h-5 w-5" strokeWidth={1.9} aria-hidden />
      </div>
      <h3 className="mt-4 text-lg font-bold tracking-tight text-jabby-ink">{title}</h3>
      <p className="mt-1.5 text-sm leading-6 text-jabby-muted">{text}</p>
      <div className="mt-5 flex-1">{children}</div>
    </article>
  );
}

const workflowRows = [
  {
    channel: "WhatsApp",
    description: "Relance envoyée au client prioritaire",
    badge: "Envoyé ✓",
    timestamp: "il y a 2 min",
    icon: MessageCircle,
    iconClass: "bg-jabby-tintGreen text-jabby-success",
    badgeClass: "bg-jabby-tintGreen text-jabby-success",
    rowClass: "workflow-row"
  },
  {
    channel: "Email",
    description: "Rappel programmé — J+3",
    badge: "Planifié",
    timestamp: "dans 18 h",
    icon: Mail,
    iconClass: "bg-jabby-tintBlue text-jabby-blue",
    badgeClass: "bg-jabby-tintBlue text-jabby-blue",
    rowClass: "workflow-row workflow-row-2"
  },
  {
    channel: "Appel",
    description: "Escalade si sans réponse — J+7",
    badge: "En attente",
    timestamp: "dans 2 jours",
    icon: Phone,
    iconClass: "bg-jabby-tintOrange text-jabby-orange",
    badgeClass: "bg-jabby-tintOrange text-jabby-orange",
    rowClass: "workflow-row workflow-row-3"
  }
];

function OrchestrationVisual() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-jabby-border bg-jabby-bg/50 p-4">
      <div className="relative space-y-3">
        <span
          className="absolute bottom-8 left-[30px] top-8 w-px bg-gradient-to-b from-jabby-blue/25 via-jabby-blue/15 to-transparent"
          aria-hidden
        />
        {workflowRows.map((row) => {
          const RowIcon = row.icon;
          return (
            <div
              key={row.channel}
              className={`${row.rowClass} relative min-w-0 overflow-hidden rounded-xl border border-jabby-border bg-white px-3 py-3 shadow-hairline sm:px-4`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${row.iconClass}`}
                >
                  <RowIcon className="h-4 w-4" strokeWidth={1.9} aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-bold text-jabby-ink">{row.channel}</p>
                    <span className="shrink-0 text-[11px] font-medium text-jabby-faint">
                      {row.timestamp}
                    </span>
                  </div>
                  <div className="mt-0.5 flex items-center justify-between gap-2">
                    <p className="truncate text-xs leading-5 text-jabby-muted">{row.description}</p>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${row.badgeClass}`}
                    >
                      {row.badge}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-auto flex items-center justify-center gap-1.5 pt-4 text-[11px] font-medium text-jabby-faint">
        <RefreshCw className="h-3 w-3" strokeWidth={2} aria-hidden />
        jabby orchestre la séquence automatiquement
      </div>
    </div>
  );
}

const priorities = [
  { name: "Atlas Retail", amount: "24 500 MAD", score: 92, width: "92%", chip: "bg-jabby-tintOrange text-jabby-orange" },
  { name: "Maroc Distribution", amount: "12 500 MAD", score: 74, width: "74%", chip: "bg-jabby-tintBlue text-jabby-blue" },
  { name: "Casa Services", amount: "9 200 MAD", score: 41, width: "41%", chip: "bg-jabby-bg text-jabby-muted" }
];

function PriorityVisual() {
  return (
    <div className="flex h-full flex-col justify-center space-y-4 rounded-2xl border border-jabby-border bg-jabby-bg/50 p-4">
      {priorities.map((item, index) => (
        <div key={item.name}>
          <div className="flex items-center justify-between gap-2">
            <p className="truncate text-xs font-bold text-jabby-ink">{item.name}</p>
            <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${item.chip}`}>
              {item.score}
            </span>
          </div>
          <p className="mt-0.5 text-[11px] text-jabby-muted">{item.amount}</p>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-jabby-border/60">
            <div
              className="score-bar h-full rounded-full bg-gradient-to-r from-jabby-blue to-jabby-blueBright"
              style={{ width: item.width, ["--bar-delay" as string]: `${0.2 + index * 0.15}s` }}
            />
          </div>
        </div>
      ))}
      <p className="flex items-center gap-1.5 pt-1 text-[11px] font-medium text-jabby-faint">
        <Sparkles className="h-3 w-3 text-jabby-orange" strokeWidth={2} aria-hidden />
        Score de recouvrabilité calculé en continu
      </p>
    </div>
  );
}

const importRows = [
  { reference: "IMP-081", company: "Maroc Leasing", amount: "8 200 MAD" },
  { reference: "IMP-092", company: "Wafasalaf", amount: "12 500 MAD" },
  { reference: "IMP-103", company: "Inwi", amount: "6 750 MAD" },
  { reference: "IMP-114", company: "Eqdom", amount: "9 200 MAD" },
  { reference: "IMP-125", company: "Lydec", amount: "4 800 MAD" },
  { reference: "IMP-136", company: "Sofac", amount: "15 300 MAD" }
];

function ImportVisual() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-jabby-border bg-jabby-bg/50 p-4">
      <div className="min-h-[150px] flex-1 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <div className="stream-track space-y-2">
          {[...importRows, ...importRows].map((row, index) => (
            <div
              key={`${row.reference}-${index}`}
              className="flex items-center justify-between gap-2 rounded-lg border border-jabby-border bg-white px-3 py-2 shadow-hairline"
            >
              <span className="shrink-0 text-[10px] font-bold text-jabby-blue">{row.reference}</span>
              <span className="min-w-0 flex-1 truncate text-center text-[10px] font-medium text-jabby-ink">
                {row.company}
              </span>
              <span className="shrink-0 text-[10px] font-semibold text-jabby-muted">{row.amount}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl border border-jabby-border bg-white px-3 py-2 shadow-hairline">
        <span className="text-[11px] font-bold text-jabby-ink">148 dossiers importés</span>
        <span className="rounded-full bg-jabby-tintGreen px-2 py-0.5 text-[10px] font-bold text-jabby-success">
          2,1 s
        </span>
      </div>
    </div>
  );
}

function MonitoringVisual() {
  const bars = [34, 52, 44, 66, 58, 78, 90];
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-jabby-border bg-jabby-bg/50 p-4">
      <div>
        <p className="text-[11px] font-medium text-jabby-muted">Recouvré ce mois</p>
        <p className="mt-1 text-2xl font-bold tracking-tight text-jabby-ink">
          <Counter value={68400} suffix=" MAD" />
        </p>
        <span className="mt-1.5 inline-block rounded-full bg-jabby-tintGreen px-2 py-0.5 text-[10px] font-bold text-jabby-success">
          +18% vs période précédente
        </span>
      </div>
      <div className="mt-4 flex h-20 items-end gap-1.5" aria-hidden>
        {bars.map((height, index) => (
          <div
            key={index}
            className="bar-v w-full rounded-t-md bg-gradient-to-t from-jabby-blue/70 to-jabby-blueBright/80"
            style={{
              height: `${height}%`,
              ["--bar-delay" as string]: `${0.15 + index * 0.08}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

const auditLines = [
  { time: "09:14:02", text: "Relance email envoyée — dossier #4821", delay: "0s" },
  { time: "09:14:05", text: "Ouverture du lien de paiement", delay: "1.6s" },
  { time: "09:16:31", text: "Promesse enregistrée — échéance confirmée", delay: "3.2s" },
  { time: "09:17:00", text: "Paiement reçu : 12 000 MAD", delay: "4.8s" },
  { time: "09:17:01", text: "Reçu généré et archivé", delay: "6.4s" }
];

function AuditVisual() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-jabby-border bg-jabby-navyDeep p-4">
      <div className="flex items-center gap-1.5 border-b border-white/10 pb-2.5">
        <span className="h-2 w-2 rounded-full bg-white/20" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-white/20" aria-hidden />
        <span className="ml-1 text-[10px] font-semibold uppercase tracking-wider text-white/40">
          journal d&apos;audit — live
        </span>
      </div>
      <div className="mt-3 flex-1 space-y-2.5 font-mono">
        {auditLines.map((line) => (
          <p
            key={line.time}
            className="log-line flex gap-2 text-[11px] leading-4"
            style={{ animationDelay: line.delay }}
          >
            <span className="shrink-0 text-jabby-orange/80">{line.time}</span>
            <span className="text-white/75">{line.text}</span>
          </p>
        ))}
      </div>
      <p className="pt-2 text-[10px] text-white/35">
        Horodaté, infalsifiable, exportable pour vos audits.
      </p>
    </div>
  );
}

export function Platform() {
  return (
    <section
      id="plateforme"
      className="relative scroll-mt-20 bg-[linear-gradient(to_bottom,#F8F9FA,#FFFFFF_30%)] py-24 lg:py-32"
    >
      <div className="container-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-jabby-orange">La plateforme</p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-normal text-jabby-ink sm:text-[44px] sm:leading-[1.1]">
            Un système de recouvrement qui travaille pendant que vos équipes avancent.
          </h2>
        </Reveal>

        <div className="mt-14 grid min-w-0 gap-4 lg:grid-cols-6">
          <Reveal className="min-w-0 lg:col-span-4" delay={0}>
            <BentoCard
              icon={Workflow}
              title="Orchestration multicanale"
              text="WhatsApp, email, SMS et appels : des séquences de relance intelligentes, adaptées à chaque débiteur."
              className=""
            >
              <OrchestrationVisual />
            </BentoCard>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-2" delay={100}>
            <BentoCard
              icon={Sparkles}
              title="Priorisation intelligente"
              text="Chaque créance reçoit un score : vos efforts se concentrent là où l'impact est maximal."
            >
              <PriorityVisual />
            </BentoCard>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-2" delay={0}>
            <BentoCard
              icon={FileUp}
              title="Import CSV & API"
              text="Vos factures impayées intégrées en quelques secondes, sans changer vos outils."
            >
              <ImportVisual />
            </BentoCard>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-2" delay={100}>
            <BentoCard
              icon={Activity}
              title="Pilotage temps réel"
              text="Encaissements, promesses, taux de recouvrement : une vision claire, en continu."
            >
              <MonitoringVisual />
            </BentoCard>
          </Reveal>

          <Reveal className="min-w-0 lg:col-span-2" delay={200}>
            <BentoCard
              icon={ScrollText}
              title="Journal d'audit complet"
              text="Chaque action est tracée et horodatée. Votre conformité, prouvable à tout moment."
            >
              <AuditVisual />
            </BentoCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
