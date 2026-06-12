import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <section className="bg-white">
      <div className="container-shell py-20 lg:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-jabby-blue px-6 py-16 sm:px-12 lg:px-20 lg:py-20">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_70%_0%,rgba(255,255,255,0.10),transparent)]"
              aria-hidden
            />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl">
                Parlons de votre portefeuille.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/75">
                Une démonstration de 30 minutes, centrée sur vos volumes, vos
                segments et vos contraintes réglementaires. Sans engagement.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="#contact" variant="onDark" size="lg">
                  Demander une démo
                </Button>
                <Button
                  href="mailto:contact@jabby.ma"
                  variant="ghostDark"
                  size="lg"
                >
                  contact@jabby.ma
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
