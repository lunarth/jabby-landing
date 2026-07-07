import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de jabby : quelles données sont traitées, pour quelles finalités, combien de temps, et comment exercer vos droits au titre de la loi 09-08.",
  alternates: { canonical: "/confidentialite" },
  robots: { index: false, follow: true }
};

const sections = [
  {
    title: "Qui traite vos données",
    body: "jabby ([raison sociale], [adresse]) traite des données à caractère personnel dans le respect de la loi 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, et des exigences de la CNDP."
  },
  {
    title: "Visiteurs du site",
    body: "Lorsque vous utilisez le formulaire de contact, nous traitons les informations que vous transmettez (identité, coordonnées professionnelles, contexte de votre demande) dans le seul but de traiter cette demande. Elles ne sont ni vendues, ni utilisées à d'autres fins sans votre accord."
  },
  {
    title: "Débiteurs contactés dans le cadre d'un dossier",
    body: "Lorsque jabby opère un recouvrement amiable pour le compte d'une entreprise créancière, celle-ci demeure responsable de traitement et jabby agit comme sous-traitant, dans le cadre d'un mandat de recouvrement et d'un accord de traitement des données. Les données traitées se limitent à ce qui est nécessaire au suivi du dossier : identité, coordonnées, montants et historique des échanges."
  },
  {
    title: "Sécurité et conservation",
    body: "Les données sont chiffrées en transit et au repos, l'accès est restreint selon le principe du moindre privilège, et chaque action est journalisée. Les durées de conservation sont définies contractuellement avec chaque créancier, puis les données sont supprimées ou restituées de manière documentée."
  },
  {
    title: "Vos droits",
    body: "Vous disposez de droits d'accès, de rectification et d'opposition dans les conditions prévues par la loi 09-08. Pour les exercer : contact@jabby.io (visiteurs et clients) ou debiteurs@jabby.io (personnes contactées dans le cadre d'un dossier), en précisant le cas échéant votre référence de dossier. Réponse sous 48 heures ouvrées."
  }
];

export default function ConfidentialitePage() {
  return (
    <main>
      <PageHero
        eyebrow="Légal"
        title="Politique de confidentialité"
        lede="Dernière mise à jour : juillet 2026"
      />
      <section className="bg-white">
        <div className="container-shell max-w-3xl py-16">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-semibold tracking-normal text-jabby-ink">
                  {section.title}
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-jabby-muted">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
