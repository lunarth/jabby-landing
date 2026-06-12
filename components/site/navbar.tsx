"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/section";

const navItems = [
  { label: "Plateforme", href: "#plateforme" },
  { label: "Fonctionnement", href: "#fonctionnement" },
  { label: "Sécurité", href: "#securite" },
  { label: "Secteurs", href: "#secteurs" },
  { label: "FAQ", href: "#faq" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "border-jabby-border" : "border-transparent"
      }`}
    >
      <nav
        className="container-shell flex h-16 items-center justify-between gap-6"
        aria-label="Navigation principale"
      >
        <a href="#top" className="focus-ring rounded-md" aria-label="jabby — accueil">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md text-sm font-medium text-jabby-muted transition-colors hover:text-jabby-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="focus-ring hidden h-10 items-center rounded-lg bg-jabby-blue px-4 text-sm font-semibold text-white shadow-hairline transition-colors hover:bg-jabby-blueHover sm:inline-flex"
          >
            Demander une démo
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-jabby-border text-jabby-ink lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.8} aria-hidden />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.8} aria-hidden />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-jabby-border bg-white lg:hidden"
        >
          <div className="container-shell flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-lg px-3 py-2.5 text-[15px] font-medium text-jabby-ink transition-colors hover:bg-jabby-bg"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="focus-ring mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-jabby-blue px-4 text-sm font-semibold text-white"
            >
              Demander une démo
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
