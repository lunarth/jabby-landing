import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function Cta() {
  return (
    <section className="bg-white px-5 pb-24 pt-4 sm:px-8 lg:pb-32">
      <Reveal className="container-shell !px-0">
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(150deg,#0A1E40_0%,#0F2C5C_45%,#1B4B9B_100%)] px-6 py-16 sm:px-12 sm:py-20 lg:py-24">
          <div className="navy-grid absolute inset-0" aria-hidden />
          <div
            className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(46,106,209,0.35),transparent_65%)] blur-2xl"
            aria-hidden
          />
          <div
            className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(232,101,26,0.28),transparent_65%)] blur-2xl"
            aria-hidden
          />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="text-3xl font-bold leading-[1.1] tracking-normal text-white sm:text-[44px]">
              Réduisez vos retards de paiement dès aujourd&apos;hui.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Automatisez vos relances, centralisez vos suivis et gardez une
              vision claire de vos créances — pendant que votre trésorerie respire.
            </p>
            <div className="mt-9 flex w-full max-w-xs flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
              <Button href="#contact" variant="light" size="lg">
                Demander une démo
              </Button>
              <Button href="#plateforme" variant="ghostLight" size="lg" arrow>
                Voir la plateforme
              </Button>
            </div>
            <p className="mt-7 text-sm font-medium text-white/50">
              Sans engagement · Réponse sous 24 h
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
