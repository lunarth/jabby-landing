import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function PageCta({
  title = "Parlons de votre portefeuille",
  lede = "Un échange de 30 minutes, centré sur vos volumes, vos segments et vos contraintes. Sans engagement."
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="bg-white">
      <div className="container-shell py-16 lg:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-jabby-blue px-6 py-14 sm:px-12 lg:px-16 lg:py-16">
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_70%_0%,rgba(255,255,255,0.10),transparent)]"
              aria-hidden
            />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h2 className="text-[28px] font-semibold leading-[1.15] tracking-normal text-white sm:text-3xl">
                  {title}
                </h2>
                <p className="mt-3 text-base leading-7 text-white/75">{lede}</p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="onDark" size="lg">
                  Demander une démo
                </Button>
                <Button
                  href="mailto:contact@jabby.io"
                  variant="ghostDark"
                  size="lg"
                >
                  contact@jabby.io
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
