import { Logo } from "@/components/ui/section";

const columns = [
  {
    title: "Service",
    links: [
      { label: "Comment ça marche", href: "/comment-ca-marche" },
      { label: "Secteurs", href: "/secteurs" },
      { label: "Résultats", href: "/resultats" },
      { label: "Tarification", href: "/tarification" }
    ]
  },
  {
    title: "Confiance",
    links: [
      { label: "Sécurité & conformité", href: "/securite" },
      { label: "FAQ", href: "/faq" },
      { label: "Pour les débiteurs", href: "/debiteurs" }
    ]
  },
  {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "/a-propos" },
      { label: "Contact", href: "/contact" },
      { label: "contact@jabby.io", href: "mailto:contact@jabby.io" }
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
              Le recouvrement amiable, opéré de bout en bout pour les
              entreprises marocaines. Rémunéré au résultat, tracé à chaque
              action.
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
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="/mentions-legales"
              className="focus-ring-dark rounded-md text-sm text-white/50 transition-colors hover:text-white/80"
            >
              Mentions légales
            </a>
            <a
              href="/confidentialite"
              className="focus-ring-dark rounded-md text-sm text-white/50 transition-colors hover:text-white/80"
            >
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
