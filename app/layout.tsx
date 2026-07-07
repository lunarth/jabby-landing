import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { RevealRuntime } from "@/components/ui/reveal-runtime";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const siteUrl = "https://jabby.io";

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
    card: "summary",
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
  email: "contact@jabby.io",
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
    <html lang="fr" className={inter.variable}>
      <body className="font-sans">
        <RevealRuntime />
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
