import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const siteUrl = "https://jabby.ma";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "jabby — Infrastructure de recouvrement amiable pour le Maroc",
  description:
    "jabby permet aux équipes finance, recouvrement et risque d'orchestrer, suivre et tracer leurs actions de recouvrement amiable : relances multicanales, liens de paiement, pilotage en temps réel et journal d'audit complet.",
  keywords: [
    "recouvrement",
    "recouvrement amiable",
    "créances",
    "impayés",
    "Maroc",
    "relances de paiement",
    "trésorerie",
    "DAF"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "jabby — Infrastructure de recouvrement amiable",
    description:
      "Orchestrez, suivez et tracez chaque action de recouvrement amiable, du premier rappel à l'encaissement. Conçu pour les entreprises marocaines.",
    url: siteUrl,
    siteName: "jabby",
    locale: "fr_MA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "jabby — Infrastructure de recouvrement amiable",
    description:
      "Orchestrez, suivez et tracez chaque action de recouvrement amiable, du premier rappel à l'encaissement."
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#1B4B9B",
  width: "device-width",
  initialScale: 1
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "jabby",
  url: siteUrl,
  email: "contact@jabby.ma",
  description:
    "Infrastructure de recouvrement amiable pour les entreprises marocaines : orchestration multicanale, liens de paiement, pilotage en temps réel et journal d'audit.",
  areaServed: "MA"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: the inline script below adds the `js` class
    // to <html> before hydration, which is expected.
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans">
        {/* Enables scroll-reveal styling only when JS runs; the page stays
            fully visible for crawlers and no-JS visitors. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')"
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
