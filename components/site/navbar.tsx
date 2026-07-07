"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Plateforme", href: "#plateforme" },
  { label: "Fonctionnement", href: "#fonctionnement" },
  { label: "Sécurité", href: "#securite" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      className={`${light ? "focus-ring-dark" : "focus-ring"} inline-flex items-baseline rounded-md text-2xl font-bold tracking-tight`}
      aria-label="jabby — retour en haut de page"
    >
      <span className={light ? "text-white" : "text-jabby-blue"}>jabb</span>
      <span className="text-jabby-orange">y</span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-jabby-border/80 bg-white/85 shadow-hairline backdrop-blur-xl"
          : "border-b border-transparent bg-white/60 backdrop-blur-md"
      }`}
    >
      <nav className="container-shell flex h-16 items-center justify-between gap-6">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-lg px-3 py-2 text-sm font-medium text-jabby-muted transition-colors duration-200 hover:bg-jabby-tintBlue/70 hover:text-jabby-blue"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="focus-ring hidden min-h-10 items-center rounded-xl bg-jabby-blue px-4 text-sm font-semibold text-white shadow-glowBlue transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-jabby-blueHover sm:inline-flex"
          >
            Demander une démo
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-jabby-border bg-white text-jabby-ink lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={2} aria-hidden />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2} aria-hidden />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden border-jabby-border/80 bg-white/95 backdrop-blur-xl transition-all duration-300 ease-out-expo lg:hidden ${
          open ? "max-h-96 border-b" : "max-h-0"
        }`}
      >
        <div className="container-shell flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-lg px-3 py-2.5 text-[15px] font-medium text-jabby-ink transition-colors hover:bg-jabby-tintBlue/70 hover:text-jabby-blue"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="focus-ring mt-2 inline-flex min-h-11 items-center justify-center rounded-xl bg-jabby-blue px-4 text-sm font-semibold text-white sm:hidden"
          >
            Demander une démo
          </a>
        </div>
      </div>
    </header>
  );
}
