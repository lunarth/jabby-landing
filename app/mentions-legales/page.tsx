import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site jabby.io.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true }
};

const blocks = [
  {
    title: "Éditeur du site",
    lines: [
      "jabby, [forme juridique] au capital de [capital] MAD",
      "Siège social : [adresse complète]",
      "RC : [numéro] · ICE : [numéro] · IF : [numéro]",
      "Directeur de la publication : [nom]",
      "Contact : contact@jabby.io"
    ]
  },
  {
    title: "Hébergement",
    lines: [
      "Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis."
    ]
  },
  {
    title: "Propriété intellectuelle",
    lines: [
      "L'ensemble des contenus de ce site (textes, visuels, marque jabby) est protégé. Toute reproduction non autorisée est interdite."
    ]
  },
  {
    title: "Données personnelles",
    lines: [
      "Les traitements de données réalisés via ce site sont décrits dans la politique de confidentialité. Ils sont effectués dans le respect de la loi 09-08 et des exigences de la CNDP."
    ]
  }
];

export default function MentionsLegalesPage() {
  return (
    <main>
      <PageHero eyebrow="Légal" title="Mentions légales" />
      <section className="bg-white">
        <div className="container-shell max-w-3xl py-16">
          <div className="space-y-10">
            {blocks.map((block) => (
              <div key={block.title}>
                <h2 className="text-lg font-semibold tracking-normal text-jabby-ink">
                  {block.title}
                </h2>
                <div className="mt-3 space-y-1.5">
                  {block.lines.map((line) => (
                    <p key={line} className="text-[15px] leading-7 text-jabby-muted">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
