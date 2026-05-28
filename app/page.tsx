import type { ReactNode } from "react";
import {
  GitBranch,
  Mail,
  MessageCircle,
  Phone,
  RefreshCw,
  Sparkles
} from "lucide-react";
import { RecoveredPaymentsVisual } from "@/components/recovered-payments-visual";

type IconName =
  | "spark"
  | "chart"
  | "file"
  | "upload"
  | "shield"
  | "mail"
  | "message"
  | "phone"
  | "check"
  | "linkedin"
  | "arrow";

const navItems = [
  { label: "Produit", href: "#produit" },
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Comment ça marche", href: "#fonctionnement" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

const kpis = [
  { label: "Recouvré ce mois", value: "68 400 MAD", change: "+18%" },
  { label: "Recouvré total", value: "284 700 MAD", change: "" },
  { label: "Promesses ce mois", value: "45 200 MAD", change: "" },
  { label: "Taux de recouvrement", value: "34%", change: "" }
];

const activities = [
  { text: "Hassan M. a payé 12 000 MAD", tone: "green" },
  { text: "Karim B. a promis de payer le 28 mai", tone: "blue" },
  { text: "47 nouveaux dossiers importés", tone: "orange" },
  { text: "Amina L. n'a pas répondu", tone: "gray" },
  { text: "Youssef K. a payé 2 100 MAD", tone: "green" }
];

const problemStats = [
  { value: "97,4 milliards MAD", label: "Créances en souffrance au Maroc" },
  { value: "Loi 69-21", label: "Renforcement réglementaire en 2025" },
  { value: "60-120 jours", label: "Délais de paiement fréquents" },
  { value: "250 000 MAD", label: "Amendes pour non-conformité" }
];

const features = [
  { title: "Priorisation automatique", icon: "spark" },
  { title: "Relances multi-canaux", icon: "gitBranch" },
  { title: "Pilotage temps réel", icon: "chart" },
  { title: "Suivi des créances", icon: "file" },
  { title: "Import CSV & API", icon: "upload" },
  { title: "Sécurité & conformité", icon: "shield" }
] satisfies Array<{ title: string; icon: IconName | "gitBranch" }>;

const importRows = [
  {
    reference: "INV-2024-081",
    company: "Maroc Leasing",
    amount: "8 200 MAD",
    badge: "En retard"
  },
  {
    reference: "INV-2024-092",
    company: "Wafasalaf",
    amount: "12 500 MAD",
    badge: "En retard"
  },
  {
    reference: "INV-2024-103",
    company: "Inwi",
    amount: "6 750 MAD",
    badge: "Promesse"
  },
  {
    reference: "INV-2024-114",
    company: "Eqdom",
    amount: "9 200 MAD",
    badge: "En retard"
  },
  {
    reference: "INV-2024-125",
    company: "Lydec",
    amount: "4 800 MAD",
    badge: "Importé"
  },
  {
    reference: "INV-2024-136",
    company: "Sofac",
    amount: "15 300 MAD",
    badge: "En retard"
  }
] satisfies Array<{ reference: string; company: string; amount: string; badge: "En retard" | "Promesse" | "Importé" }>;

const workflowRows = [
  {
    channel: "WhatsApp",
    description: "Relance envoyée à Karim B.",
    badge: "Envoyé ✓",
    timestamp: "il y a 2 min",
    icon: MessageCircle,
    iconClassName: "bg-[#DCFCE7] text-jabby-success",
    badgeClassName: "bg-[#DCFCE7] text-jabby-success",
    animationClassName: "workflow-row-1"
  },
  {
    channel: "Email",
    description: "Rappel programmé pour demain",
    badge: "Planifié",
    timestamp: "dans 18h",
    icon: Mail,
    iconClassName: "bg-[#EFF4FF] text-jabby-blue",
    badgeClassName: "bg-[#EFF4FF] text-jabby-blue",
    animationClassName: "workflow-row-2"
  },
  {
    channel: "Appel",
    description: "Escalade si pas de réponse",
    badge: "En attente",
    timestamp: "dans 2 jours",
    icon: Phone,
    iconClassName: "bg-[#FFF4ED] text-jabby-orange",
    badgeClassName: "bg-[#FFF4ED] text-jabby-orange",
    animationClassName: "workflow-row-3"
  }
];

const designedForItems = [
  "Finance",
  "Leasing",
  "Assurance",
  "B2B & Services",
  "Retail",
  "Télécoms",
  "Fintech",
  "Immobilier",
  "Distribution"
];

const faqs = [
  {
    question: "Qu'est-ce que jabby ?",
    answer:
      "jabby est une plateforme de recouvrement moderne conçue pour aider les entreprises marocaines à automatiser leurs relances de paiement et le suivi des créances impayées."
  },
  {
    question: "À qui s'adresse jabby ?",
    answer:
      "jabby s'adresse aux PME, entreprises B2B, équipes finance, sociétés de leasing, cabinets de services et organisations marocaines qui gèrent des factures impayées récurrentes."
  },
  {
    question: "Peut-on importer des créances via CSV ?",
    answer:
      "Oui. jabby permet d'importer des créances via fichiers CSV ou via API afin d'intégrer rapidement vos factures impayées dans vos workflows de recouvrement."
  },
  {
    question: "jabby est-il conçu pour les entreprises marocaines ?",
    answer:
      "Oui. jabby a été pensé pour les réalités opérationnelles du marché marocain : délais de paiement, workflows locaux, conformité, communication multicanale et besoins des équipes finance."
  },
  {
    question: "La plateforme est-elle sécurisée ?",
    answer:
      "Oui. La sécurité et la confidentialité des données sont au coeur de l'infrastructure jabby. La plateforme est pensée pour les exigences de protection des données et de conformité."
  },
  {
    question: "Comment demander une démo ?",
    answer:
      "Cliquez sur \"Demander une démo\". Notre équipe vous contactera pour comprendre vos besoins et vous présenter la plateforme."
  }
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      className="focus-ring inline-flex items-center rounded-md text-2xl font-bold tracking-normal"
      aria-label="jabby"
    >
      <span className={light ? "text-white" : "text-jabby-blue"}>jabb</span>
      <span className="text-jabby-orange">y</span>
    </a>
  );
}

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true
  };

  const icons: Record<IconName, ReactNode> = {
    spark: (
      <svg {...common}>
        <path d="M12 3l1.5 5.2L19 10l-5.5 1.8L12 17l-1.5-5.2L5 10l5.5-1.8L12 3z" />
        <path d="M19 16l.7 2.2L22 19l-2.3.8L19 22l-.7-2.2L16 19l2.3-.8L19 16z" />
      </svg>
    ),
    chart: (
      <svg {...common}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M7 15l3-4 3 2 4-6" />
      </svg>
    ),
    file: (
      <svg {...common}>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h5" />
        <path d="M9.5 13h5" />
        <path d="M9.5 17h3" />
      </svg>
    ),
    upload: (
      <svg {...common}>
        <path d="M12 16V4" />
        <path d="M7.5 8.5L12 4l4.5 4.5" />
        <path d="M5 16v3h14v-3" />
      </svg>
    ),
    shield: (
      <svg {...common}>
        <path d="M12 3l7 3v5c0 4.6-2.8 8.1-7 10-4.2-1.9-7-5.4-7-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    mail: (
      <svg {...common}>
        <path d="M4 6h16v12H4z" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    ),
    message: (
      <svg {...common}>
        <path d="M5 6.5A4.5 4.5 0 019.5 2h5A4.5 4.5 0 0119 6.5v4A4.5 4.5 0 0114.5 15H12l-5 4v-4.5a4.5 4.5 0 01-2-3.7z" />
      </svg>
    ),
    phone: (
      <svg {...common}>
        <path d="M6.5 4h3l1.5 4-2 1.3a11 11 0 005.7 5.7L16 13l4 1.5v3a2 2 0 01-2.2 2A15.8 15.8 0 014.5 6.2 2 2 0 016.5 4z" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="M5 12l4 4L19 6" />
      </svg>
    ),
    linkedin: (
      <svg {...common}>
        <path d="M7 10v7" />
        <path d="M11 17v-4a3 3 0 016 0v4" />
        <path d="M7 7.2v.1" />
        <path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
      </svg>
    ),
    arrow: (
      <svg {...common}>
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </svg>
    )
  };

  return icons[name];
}

function Button({
  href,
  children,
  variant = "primary",
  className = ""
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "outlineLight";
  className?: string;
}) {
  const variants = {
    primary:
      "bg-jabby-blue text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#163f84]",
    secondary:
      "border border-jabby-border bg-white text-jabby-text hover:-translate-y-0.5 hover:border-jabby-blue/30 hover:text-jabby-blue",
    light:
      "bg-white text-jabby-blue shadow-soft hover:-translate-y-0.5 hover:bg-jabby-lightBlue",
    outlineLight:
      "border border-white/30 bg-white/10 text-white hover:-translate-y-0.5 hover:bg-white/20"
  };

  return (
    <a
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/90 backdrop-blur-xl">
      <nav className="container-shell flex h-16 items-center justify-between gap-5">
        <Logo />
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md text-sm font-medium text-jabby-muted transition hover:text-jabby-blue"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="focus-ring inline-flex min-h-10 items-center rounded-lg bg-jabby-blue px-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#163f84] sm:px-4"
        >
          Demander une démo
        </a>
      </nav>
      <div className="container-shell flex gap-5 overflow-x-auto border-t border-jabby-border/70 py-3 lg:hidden">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="focus-ring shrink-0 rounded-md text-sm font-semibold text-jabby-muted transition hover:text-jabby-blue"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}

function HeroDashboard() {
  return (
    <div className="relative isolate animate-fade-up lg:pl-5" style={{ animationDelay: "160ms" }}>
      <div className="pointer-events-none absolute -inset-x-5 top-10 -z-10 hidden h-[540px] rounded-[2rem] bg-[rgba(27,75,155,0.07)] blur-3xl lg:block" />
      <div className="absolute -left-2 top-12 hidden h-24 w-24 rounded-full border border-jabby-blue/10 bg-jabby-lightBlue lg:block" />
      <div className="relative max-h-[680px] overflow-hidden rounded-[1.35rem] border border-jabby-border bg-white shadow-[0_30px_90px_rgba(17,24,39,0.10),0_12px_30px_rgba(27,75,155,0.08)] ring-1 ring-white/80 lg:max-h-[600px] lg:origin-top-right lg:scale-[1.03]">
        <div className="flex items-center justify-between border-b border-jabby-border bg-gradient-to-b from-white to-jabby-bg/60 px-4 py-2.5 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
            <span className="h-2.5 w-2.5 rounded-full bg-jabby-success" />
          </div>
          <div className="rounded-full bg-jabby-lightBlue px-3 py-1 text-xs font-semibold text-jabby-blue">
            Recouvrement live
          </div>
        </div>

        <div className="grid gap-0 lg:grid-cols-[0.58fr_1.42fr]">
          <aside className="hidden border-r border-jabby-border bg-jabby-bg/80 p-5 lg:block">
            <Logo />
            <div className="mt-6 space-y-2">
              {["Dashboard", "Dossiers", "Débiteurs", "Paiements"].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-lg px-3 py-2 text-sm font-medium ${
                    index === 0
                      ? "bg-jabby-blue text-white"
                      : "text-jabby-muted"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>

          <div className="bg-white p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-jabby-blue">Pilotage recouvrement</p>
                <h2 className="mt-1 text-xl font-bold text-jabby-text">
                  Recouvrement automatisé
                </h2>
              </div>
              <div className="rounded-lg border border-jabby-border px-3 py-2 text-xs text-jabby-muted">
                Mai 2026
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {kpis.map((kpi, index) => (
                <div
                  key={kpi.label}
                  className="rounded-xl border border-jabby-border bg-white p-3 shadow-[0_10px_24px_rgba(17,24,39,0.04)]"
                  style={{ animation: `fade-up 650ms ease ${220 + index * 80}ms both` }}
                >
                  <div className="text-xs font-medium text-jabby-muted">{kpi.label}</div>
                  <div className="mt-2 flex items-end justify-between gap-2">
                    <span className="whitespace-nowrap text-[15px] font-bold leading-5 text-jabby-text">
                      {kpi.value}
                    </span>
                    {kpi.change ? (
                      <span className="shrink-0 rounded-full bg-jabby-lightGreen px-2 py-1 text-[11px] font-semibold text-jabby-success">
                        {kpi.change}
                      </span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-xl border border-jabby-border bg-white p-3 shadow-[0_8px_20px_rgba(17,24,39,0.035)]">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="whitespace-nowrap text-sm font-bold leading-none text-jabby-text">Factures suivies</h3>
                  <span className="shrink-0 text-xs font-semibold leading-none text-jabby-blue">+47</span>
                </div>
                <div className="mt-3 space-y-2">
                  {[
                    ["#4821", "Maroc Distribution", "12 500 MAD", "En retard"],
                    ["#4868", "Atlas Retail", "10 000 MAD", "Promesse"],
                    ["#4910", "Casa Services", "9 200 MAD", "Payé"]
                  ].map(([id, name, amount, status]) => (
                    <div key={id} className="grid grid-cols-[auto_1fr_auto] items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-jabby-lightBlue text-xs font-bold text-jabby-blue">
                        {id.replace("#", "")}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-jabby-text">{name}</p>
                        <p className="text-xs text-jabby-muted">{amount}</p>
                      </div>
                      <span
                        className={`rounded-full px-2 py-1 text-[11px] font-semibold ${
                          status === "Payé"
                            ? "bg-jabby-lightGreen text-jabby-success"
                            : status === "Promesse"
                              ? "bg-jabby-lightBlue text-jabby-blue"
                              : "bg-jabby-lightOrange text-jabby-orange"
                        }`}
                      >
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-jabby-border bg-white p-3.5 shadow-[0_8px_20px_rgba(17,24,39,0.035)]">
                <h3 className="text-sm font-bold text-jabby-text">Activité récente</h3>
                <div className="mt-3 space-y-2 pl-1">
                  {activities.map((activity, index) => (
                    <div
                      key={activity.text}
                      className="flex items-start gap-2.5"
                      style={{ animation: `slide-in 650ms ease ${360 + index * 95}ms both` }}
                    >
                      <span
                        className={`mt-1 h-2.5 w-2.5 rounded-full ${
                          activity.tone === "green"
                            ? "bg-jabby-success"
                            : activity.tone === "blue"
                              ? "bg-jabby-blue"
                              : activity.tone === "orange"
                                ? "bg-jabby-orange"
                                : "bg-jabby-border"
                        }`}
                      />
                      <p className="text-xs leading-4 text-jabby-muted">{activity.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="container-shell grid items-start gap-12 py-10 sm:py-12 lg:grid-cols-[0.92fr_1.08fr] lg:py-8">
      <div className="animate-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-jabby-border bg-white px-3 py-1.5 text-sm font-semibold text-jabby-blue shadow-[0_8px_22px_rgba(17,24,39,0.04)]">
          <span className="h-2 w-2 rounded-full bg-jabby-success" />
          Plateforme de recouvrement moderne
        </div>
        <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-[1.03] tracking-normal sm:text-5xl lg:text-5xl lg:leading-[1.02] 2xl:text-6xl">
          <span className="block text-[#111827]">
            Les retards de paiement détruisent votre trésorerie.
          </span>
          <span className="block text-[#1B4B9B]">Recouvrez plus. Automatiquement.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-7 text-[#4B5563]">
          Transformez vos impayés en paiements grâce à une plateforme moderne conçue pour les entreprises marocaines.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            href="#contact"
            className="duration-300 ease-out shadow-[0_14px_34px_rgba(27,75,155,0.24)] hover:shadow-[0_18px_46px_rgba(27,75,155,0.30)] active:translate-y-0"
          >
            Demander une démo
          </Button>
          <Button
            href="#produit"
            variant="secondary"
            className="bg-white/90 shadow-[0_12px_30px_rgba(17,24,39,0.06)] duration-300 ease-out hover:bg-jabby-lightBlue/70 hover:shadow-[0_16px_36px_rgba(17,24,39,0.09)] active:translate-y-0"
          >
            Voir la plateforme <Icon name="arrow" className="h-4 w-4" />
          </Button>
        </div>
        <p className="mt-7 inline-flex max-w-2xl items-center gap-2 text-sm font-semibold leading-6 text-[#374151]">
          <Icon name="shield" className="h-4 w-4 shrink-0 text-jabby-blue" />
          Conçu pour les entreprises marocaines. Sécurisé. Conforme CNDP.
        </p>
      </div>
      <HeroDashboard />
    </section>
  );
}

function DesignedForTicker() {
  return (
    <section className="border-y border-[#F3F4F6] bg-white py-10">
      <div className="mx-auto w-full">
        <p className="mb-6 text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-[#9CA3AF]">
          Conçu pour les entreprises qui gèrent des impayés
        </p>
        <div className="designed-marquee-viewport flex w-full overflow-hidden">
          <div className="designed-marquee flex whitespace-nowrap">
            {[...designedForItems, ...designedForItems].map((item, index) => (
              <div key={`${item}-${index}`} className="flex items-center">
                <span className="px-6 text-lg font-semibold text-jabby-blue">{item}</span>
                <span className="text-xl text-jabby-orange">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="produit" className="scroll-mt-28 border-y border-jabby-border/70 bg-white pb-20 pt-16 sm:pb-24 sm:pt-20 lg:scroll-mt-16 lg:pb-28 lg:pt-20">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-jabby-orange">
              Marché
            </p>
            <h2 className="mt-4 max-w-[39rem] text-3xl font-bold tracking-normal text-jabby-text sm:text-4xl">
              Le recouvrement est devenu un enjeu stratégique.
            </h2>
            <p className="mt-5 max-w-[39rem] text-xl leading-9 text-[#4B5563]">
              Les retards de paiement fragilisent la trésorerie des entreprises marocaines et augmentent la pression opérationnelle et réglementaire.
            </p>
          </div>
          <RecoveredChart />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problemStats.map((stat) => (
            <article
              key={stat.value}
              className="relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-gradient-to-b from-white to-[#FBFCFE] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(17,24,39,0.08)]"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-jabby-blue/20 to-transparent" />
              <h3
                className={`font-bold leading-tight text-jabby-text ${
                  stat.value === "250 000 MAD" ? "text-[1.5rem]" : "text-[1.6rem]"
                }`}
              >
                {stat.value}
              </h3>
              <p className="mt-4 text-sm leading-6 text-jabby-muted">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecoveredChart() {
  const yAxisLabels = [
    { label: "100K", y: 36 },
    { label: "50K", y: 88 },
    { label: "0", y: 140 }
  ];
  const xAxisLabels = [
    { label: "Jan", x: 62 },
    { label: "Fév", x: 154 },
    { label: "Mar", x: 246 },
    { label: "Avr", x: 338 },
    { label: "Mai", x: 430 }
  ];

  return (
    <div className="rounded-2xl border border-jabby-border bg-white p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_18px_44px_rgba(17,24,39,0.05)]">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold leading-none text-jabby-text">Paiements récupérés</h3>
          <p className="mt-2 text-sm text-jabby-muted">Progression mensuelle</p>
        </div>
        <span className="text-sm font-semibold text-jabby-blue">
          +24%
        </span>
      </div>
      <div className="mt-7 h-56 overflow-hidden rounded-xl border border-jabby-border/70 bg-gradient-to-b from-jabby-bg to-white p-4 shadow-[inset_0_1px_8px_rgba(17,24,39,0.035)]">
        <svg viewBox="0 0 460 200" className="h-full w-full" role="img" aria-label="Graphique des paiements récupérés">
          <defs>
            <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#1B4B9B" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#1B4B9B" stopOpacity="0" />
            </linearGradient>
          </defs>
          {yAxisLabels.map((tick) => (
            <g key={tick.label}>
              <text x="44" y={tick.y + 4} textAnchor="end" fill="#6B7280" fontSize="11" fontWeight="600">
                {tick.label}
              </text>
              <line x1="58" x2="438" y1={tick.y} y2={tick.y} stroke="#E5E7EB" strokeWidth="1" />
            </g>
          ))}
          <path
            d="M62 120 C98 111, 116 104, 154 106 C190 108, 210 78, 246 80 C286 82, 300 58, 338 56 C378 54, 398 38, 430 38 L430 150 L62 150 Z"
            fill="url(#chartFill)"
          />
          <path
            d="M62 120 C98 111, 116 104, 154 106 C190 108, 210 78, 246 80 C286 82, 300 58, 338 56 C378 54, 398 38, 430 38"
            fill="none"
            stroke="rgba(27,75,155,0.93)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="420"
            className="animate-draw"
          />
          {[62, 154, 246, 338, 430].map((x, index) => {
            const y = [120, 106, 80, 56, 38][index];
            return <circle key={x} cx={x} cy={y} r="5" fill="#E8651A" />;
          })}
          {xAxisLabels.map((tick) => (
            <text key={tick.label} x={tick.x} y="176" textAnchor="middle" fill="#6B7280" fontSize="11" fontWeight="600">
              {tick.label}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section
      id="fonctionnalites"
      className="section-pad scroll-mt-28 bg-[radial-gradient(circle_at_top,rgba(27,75,155,0.03),transparent_50%),linear-gradient(to_bottom,#F8FAFC,#FFFFFF)] lg:scroll-mt-16"
    >
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-jabby-orange">
            Infrastructure de recouvrement
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-normal text-jabby-text sm:text-4xl sm:leading-[1.08]">
            Un système de recouvrement qui travaille pendant que vos équipes avancent.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-jabby-border bg-white px-6 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.07)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:border-[rgba(27,75,155,0.18)] hover:shadow-[0_10px_24px_rgba(17,24,39,0.10)]"
            >
              <div className="flex min-h-[6.25rem] flex-col justify-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-jabby-lightBlue text-jabby-blue transition-colors duration-200 group-hover:bg-jabby-lightBlue/80">
                  {feature.icon === "gitBranch" ? (
                    <GitBranch className="h-[22px] w-[22px]" strokeWidth={1.8} aria-hidden="true" />
                  ) : (
                    <Icon name={feature.icon} className="h-[22px] w-[22px]" />
                  )}
                </div>
                <h3 className="mt-4 text-lg font-bold text-jabby-text">{feature.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="fonctionnement" className="section-pad scroll-mt-28 bg-white lg:scroll-mt-16">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-normal text-jabby-text sm:text-4xl">
            Comment fonctionne jabby
          </h2>
          <p className="mt-5 text-lg leading-8 text-jabby-muted">
            Une infrastructure moderne pour automatiser le recouvrement des créances.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          <ImportCard />
          <AutomationCard />
          <RecoveredPaymentsCard />
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  title,
  text,
  children,
  className = ""
}: {
  title: string;
  text: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article className={`flex h-full min-h-[540px] flex-col overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_4px_14px_rgba(15,23,42,0.06)] transition-all duration-[250ms] ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(15,23,42,0.10)] ${className}`}>
      <h3 className="text-xl font-bold text-jabby-text">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-jabby-muted">{text}</p>
      {children}
    </article>
  );
}

function ImportCard() {
  return (
    <BentoCard
      title="Importez vos créances"
      text="Ajoutez vos factures impayées via CSV ou API."
    >
      <div className="mt-5 flex min-h-0 flex-1 flex-col rounded-2xl border border-jabby-border bg-[#FBFCFE] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-jabby-lightBlue text-jabby-blue">
              <Icon name="upload" className="h-[21px] w-[21px]" />
            </div>
            <div>
              <p className="text-sm font-bold text-jabby-text">CSV import</p>
              <p className="text-xs text-jabby-muted">148 dossiers importés</p>
            </div>
          </div>
          <span className="rounded-full bg-[#EFF4FF] px-2 py-1 text-[11px] font-semibold text-jabby-blue">
            Importé
          </span>
        </div>

        <div className="mt-4 min-h-0 flex-1 overflow-hidden rounded-xl border border-jabby-border/70 bg-white p-3">
          <div className="relative h-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)]">
            <div className="debt-stream space-y-2">
              {[...importRows, ...importRows].map((row, index) => {
                const badgeClassName =
                  row.badge === "En retard"
                    ? "bg-[#FFF4ED] text-jabby-orange"
                    : "bg-[#EFF4FF] text-jabby-blue";

                return (
                  <div
                    key={`${row.reference}-${index}`}
                    className="flex items-center justify-between gap-2 rounded-[10px] border border-jabby-border bg-white px-3.5 py-3 shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
                  >
                    <span className="w-[5rem] shrink-0 whitespace-nowrap text-[10px] font-semibold text-jabby-blue">
                      {row.reference}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-center text-[10px] font-medium text-jabby-text">
                      {row.company}
                    </span>
                    <span className="w-[3.8rem] shrink-0 whitespace-nowrap text-right text-[9px] font-medium text-[#374151]">
                      {row.amount}
                    </span>
                    <span className={`min-w-[3.6rem] shrink-0 rounded-full px-1.5 py-0.5 text-center text-[9px] font-semibold ${badgeClassName}`}>
                      {row.badge}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-l-[3px] border-jabby-border border-l-jabby-blue bg-white p-2.5 shadow-[0_10px_26px_rgba(27,75,155,0.10)]">
          <div className="flex min-w-0 items-center gap-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-jabby-lightBlue text-jabby-blue">
              <Sparkles className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <p className="min-w-0 text-xs font-bold leading-5 text-jabby-text">
              jabby — Créance priorisée automatiquement
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-[#EFF4FF] px-2 py-0.5 text-[11px] font-semibold text-jabby-blue">
            Traité
          </span>
        </div>
      </div>
    </BentoCard>
  );
}

function AutomationCard() {
  return (
    <BentoCard
      title="Automatisez les relances"
      text="jabby orchestre automatiquement les rappels et suivis."
    >
      <div className="mt-5 flex min-h-0 flex-1 flex-col rounded-2xl border border-jabby-border bg-[#FBFCFE] p-4">
        <div className="space-y-3">
          {workflowRows.map((row) => {
            const RowIcon = row.icon;

            return (
              <div
                key={row.channel}
                className={`${row.animationClassName} rounded-xl border border-jabby-border bg-white px-4 py-3.5 shadow-[0_1px_4px_rgba(0,0,0,0.06)]`}
              >
                <div className="flex items-center gap-3">
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${row.iconClassName}`}>
                    <RowIcon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-bold text-jabby-text">{row.channel}</p>
                      <span className="shrink-0 text-[11px] font-medium text-[#9CA3AF]">
                        {row.timestamp}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center justify-between gap-2">
                      <p className="text-[11px] font-medium leading-4 text-jabby-muted">{row.description}</p>
                      <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${row.badgeClassName}`}>
                        {row.badge}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-auto flex items-center justify-center gap-2 pt-4 text-[11px] italic text-[#9CA3AF]">
          <RefreshCw className="h-3 w-3" strokeWidth={1.8} aria-hidden="true" />
          <span>jabby orchestre automatiquement la séquence</span>
        </div>
      </div>
    </BentoCard>
  );
}

function RecoveredPaymentsCard() {
  return (
    <BentoCard
      title="Paiements récupérés"
      text="Les workflows jabby transforment vos relances en trésorerie réelle."
    >
      <RecoveredPaymentsVisual />
    </BentoCard>
  );
}

function CtaSection() {
  return (
    <section
      className="bg-[linear-gradient(180deg,#1B4B9B_0%,#1E4FA4_100%)] px-6 py-20"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center justify-center">
        <h2 className="max-w-[900px] text-center text-3xl font-bold leading-[1.05] tracking-normal text-white sm:text-4xl">
          Réduisez vos retards de paiement dès aujourd&apos;hui.
        </h2>
        <p className="mt-5 max-w-[760px] text-center text-lg font-normal leading-[1.6] text-white/[0.85]">
          Automatisez vos relances, centralisez vos suivis et gardez une vision claire de vos créances.
        </p>
        <div className="mt-9 flex w-full max-w-xs flex-col flex-wrap justify-center gap-4 sm:max-w-none sm:flex-row">
          <a
            href="mailto:contact@jabby.ma"
            className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-jabby-blue shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200 ease-out hover:-translate-y-px hover:bg-[#F8FAFF] sm:w-auto"
          >
            Demander une démo
          </a>
          <a
            href="#produit"
            className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-lg border-[1.5px] border-white/60 bg-transparent px-7 py-3.5 text-sm font-medium text-white backdrop-blur-[4px] transition-all duration-200 ease-out hover:-translate-y-px hover:border-white/90 hover:bg-white/[0.08] sm:w-auto"
          >
            Voir la plateforme →
          </a>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="section-pad bg-white">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-normal text-jabby-text sm:text-4xl">
            FAQ
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-4xl divide-y divide-jabby-border rounded-2xl border border-jabby-border bg-white shadow-[0_12px_32px_rgba(17,24,39,0.04)]">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6 open:bg-jabby-bg/80">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-bold text-jabby-text">
                {faq.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-jabby-border text-jabby-blue transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-jabby-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 bg-white px-6 py-20 lg:scroll-mt-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-[32px] font-bold tracking-normal text-jabby-text">
          Prenez contact avec nous
        </h2>
        <p className="mt-2 text-center text-lg text-jabby-muted">
          Notre équipe vous répond sous 24h.
        </p>

        <form className="mx-auto mt-10 max-w-[560px] rounded-2xl border border-jabby-border bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
          <div className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="mb-1 block text-[13px] font-medium text-[#374151]">
                Nom complet
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Votre nom"
                className="w-full rounded-lg border border-jabby-border px-3.5 py-2.5 text-sm text-jabby-text outline-none transition focus:border-jabby-blue"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1 block text-[13px] font-medium text-[#374151]">
                Email professionnel
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="vous@entreprise.com"
                className="w-full rounded-lg border border-jabby-border px-3.5 py-2.5 text-sm text-jabby-text outline-none transition focus:border-jabby-blue"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1 block text-[13px] font-medium text-[#374151]">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="Décrivez votre besoin..."
                className="w-full resize-none rounded-lg border border-jabby-border px-3.5 py-2.5 text-sm text-jabby-text outline-none transition focus:border-jabby-blue"
              />
            </div>
          </div>
          <button
            type="button"
            className="mt-2 w-full rounded-lg bg-jabby-blue p-3.5 text-[15px] font-semibold text-white transition hover:bg-[#163d7a]"
          >
            Envoyer ma demande
          </button>
        </form>

        <div className="mt-6 flex flex-wrap justify-center gap-8">
          <a
            href="mailto:contact@jabby.io"
            className="focus-ring inline-flex items-center gap-2 rounded-md text-sm text-[#374151] transition hover:text-jabby-blue"
          >
            <Icon name="mail" className="h-4 w-4 text-jabby-blue" />
            contact@jabby.io
          </a>
          <a
            href="#"
            className="focus-ring inline-flex items-center gap-2 rounded-md text-sm text-[#374151] transition hover:text-jabby-blue"
          >
            <Icon name="linkedin" className="h-4 w-4 text-jabby-blue" />
            jabby sur LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-jabby-border bg-jabby-bg py-10">
      <div className="container-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-jabby-muted">© 2026 jabby. Tous droits réservés.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {[
            ["Produit", "#produit"],
            ["Fonctionnalités", "#fonctionnalites"],
            ["FAQ", "#faq"],
            ["Contact", "#contact"]
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="focus-ring rounded-md text-sm font-semibold text-jabby-muted transition hover:text-jabby-blue"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DesignedForTicker />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CtaSection />
        <FaqSection />
      </main>
      <ContactSection />
      <Footer />
    </>
  );
}
