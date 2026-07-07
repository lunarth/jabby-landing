import { Logo } from "@/components/site/navbar";

const columns = [
  {
    title: "Produit",
    links: [
      { label: "Plateforme", href: "#plateforme" },
      { label: "Fonctionnement", href: "#fonctionnement" },
      { label: "Sécurité", href: "#securite" }
    ]
  },
  {
    title: "Entreprise",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
      { label: "Demander une démo", href: "#contact" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-jabby-border bg-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr] lg:grid-cols-[1.4fr_0.6fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-jabby-muted">
            L&apos;infrastructure de recouvrement amiable des entreprises
            marocaines. Du premier rappel à l&apos;encaissement.
          </p>
          <p className="mt-6 text-xs text-jabby-faint">Casablanca, Maroc</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="eyebrow text-jabby-faint">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <a
                      href={link.href}
                      className="focus-ring rounded-md text-sm font-medium text-jabby-muted transition-colors hover:text-jabby-blue"
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

      <div className="border-t border-jabby-border/70">
        <div className="container-shell flex flex-col items-start justify-between gap-3 py-6 sm:flex-row sm:items-center">
          <p className="text-xs text-jabby-faint">© 2026 jabby. Tous droits réservés.</p>
          <p className="text-xs text-jabby-faint">
            Conçu pour les équipes finance qui veulent dormir tranquilles.
          </p>
        </div>
      </div>
    </footer>
  );
}
