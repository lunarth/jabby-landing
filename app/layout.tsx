import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "jabby | Recouvrement automatisé pour les entreprises marocaines",
  description:
    "jabby aide les entreprises marocaines à automatiser leurs relances de paiement, suivre leurs créances et récupérer plus de trésorerie.",
  openGraph: {
    title: "jabby | Recouvrement automatisé",
    description:
      "Une plateforme moderne pour automatiser les workflows de recouvrement au Maroc.",
    siteName: "jabby",
    locale: "fr_MA",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
