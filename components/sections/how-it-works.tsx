import { BarChart3, FileUp, Send, Wallet } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    icon: FileUp,
    title: "Importez vos créances",
    text: "CSV ou API : vos factures impayées sont intégrées et structurées en quelques secondes."
  },
  {
    icon: BarChart3,
    title: "jabby priorise",
    text: "Chaque dossier est scoré selon son montant, son ancienneté et le comportement du débiteur."
  },
  {
    icon: Send,
    title: "Les relances partent",
    text: "WhatsApp, email, SMS, appel : la bonne séquence, au bon moment, sur le bon canal."
  },
  {
    icon: Wallet,
    title: "Vous encaissez",
    text: "Paiements et promesses remontent en temps réel dans votre tableau de bord."
  }
];

export function HowItWorks() {
  return (
    <section id="fonctionnement" className="scroll-mt-20 bg-white py-24 lg:py-32">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-jabby-orange">Fonctionnement</p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-normal text-jabby-ink sm:text-[44px] sm:leading-[1.1]">
            De l&apos;impayé à l&apos;encaissement, en quatre étapes.
          </h2>
        </Reveal>

        <Reveal className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div
            className="step-line absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-jabby-blue/15 via-jabby-blue/45 to-jabby-orange/50 lg:block"
            aria-hidden
          />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <li key={step.title} className="group relative text-center lg:px-2">
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-jabby-border bg-white shadow-card transition-all duration-300 ease-out-expo group-hover:-translate-y-1 group-hover:border-jabby-blue/30 group-hover:shadow-pop">
                    <StepIcon className="h-6 w-6 text-jabby-blue" strokeWidth={1.9} aria-hidden />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-jabby-orange text-[11px] font-bold text-white shadow-hairline">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-jabby-ink">{step.title}</h3>
                  <p className="mx-auto mt-2 max-w-[17rem] text-sm leading-6 text-jabby-muted">
                    {step.text}
                  </p>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
