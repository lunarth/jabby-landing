import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const siteUrl = "https://jabby.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "jabby | Recouvrement amiable opéré au succès, Maroc",
    template: "%s | jabby"
  },
  description:
    "jabby opère votre recouvrement amiable de bout en bout, au nom de votre entreprise : relances multicanales, négociation, encaissement, journal d'audit complet. Vous ne payez qu'au résultat.",
  keywords: [
    "recouvrement amiable Maroc",
    "récupérer impayés entreprise",
    "recouvrement créances Maroc",
    "relance impayés au succès",
    "loi 69-21 recouvrement",
    "DSO",
    "trésorerie"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "jabby | Recouvrement amiable opéré au succès",
    description:
      "Confiez vos créances. Récupérez votre trésorerie. Service opéré de bout en bout, tracé à chaque action, rémunéré au résultat.",
    url: siteUrl,
    siteName: "jabby",
    locale: "fr_MA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "jabby | Recouvrement amiable opéré au succès",
    description:
      "Confiez vos créances. Récupérez votre trésorerie. Service opéré, tracé, rémunéré au résultat."
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
    "Service de recouvrement amiable opéré de bout en bout pour les entreprises marocaines, rémunéré au succès, avec journal d'audit complet.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
