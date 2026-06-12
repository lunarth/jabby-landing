import { Logo } from "@/components/ui/section";

const columns = [
  {
    title: "Plateforme",
    links: [
      { label: "Modules", href: "#plateforme" },
      { label: "Fonctionnement", href: "#fonctionnement" },
      { label: "Orchestration", href: "#orchestration" },
      { label: "Intégrations", href: "#integrations" }
    ]
  },
  {
    title: "Confiance",
    links: [
      { label: "Sécurité & conformité", href: "#securite" },
      { label: "Nos engagements", href: "#engagements" },
      { label: "FAQ", href: "#faq" }
    ]
  },
  {
    title: "Entreprise",
    links: [
      { label: "Secteurs", href: "#secteurs" },
      { label: "Contact", href: "#contact" },
      { label: "contact@jabby.ma", href: "mailto:contact@jabby.ma" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-jabby-navyDeep text-white">
      <div className="container-shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="max-w-sm">
            <Logo tone="dark" />
            <p className="mt-4 text-sm leading-6 text-white/60">
              L&apos;infrastructure du recouvrement amiable au Maroc.
              Orchestration, traçabilité et pilotage pour les équipes finance,
              recouvrement et risque.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-white/50">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="focus-ring-dark rounded-md text-sm text-white/75 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/50">
            © 2026 jabby. Tous droits réservés.
          </p>
          <p className="text-sm text-white/50">
            Données traitées dans le respect de la loi 09-08 et des exigences
            de la CNDP.
          </p>
        </div>
      </div>
    </footer>
  );
}
