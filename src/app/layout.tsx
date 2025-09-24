import { StructuredData } from "@/components/seo/structured-data";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://innovyxworks.com"),
  title:
    "InnovyxWorks - Développement Web & Mobile au Bénin | Apps & Sites Web Professionnels",
  description:
    "Agence de développement web et mobile au Bénin. Création d'applications mobiles, sites web e-commerce et plateformes sur mesure pour entreprises africaines. Devis gratuit.",
  keywords: [
    "développement web Bénin",
    "création site web Cotonou",
    "application mobile Afrique",
    "agence web Bénin",
    "développeur Cotonou",
    "site e-commerce Bénin",
    "app mobile Afrique de l'Ouest",
    "développement logiciel Bénin",
    "création site internet Cotonou",
    "agence digitale Bénin",
  ],
  authors: [{ name: "InnovyxWorks", url: "https://innovyxworks.com" }],
  creator: "InnovyxWorks",
  publisher: "InnovyxWorks",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "InnovyxWorks - Développement Web & Mobile au Bénin",
    description:
      "Agence spécialisée en développement d'applications mobiles et sites web pour entreprises africaines. Basée au Bénin, nous servons toute l'Afrique de l'Ouest.",
    type: "website",
    locale: "fr_FR",
    url: "https://innovyxworks.com",
    siteName: "InnovyxWorks",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "InnovyxWorks - Développement Web & Mobile au Bénin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InnovyxWorks - Développement Web & Mobile au Bénin",
    description:
      "Agence de développement web et mobile au Bénin pour entreprises africaines",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://innovyxworks.com",
  },
  other: {
    "geo.region": "BJ",
    "geo.placename": "Cotonou, Bénin",
    "geo.position": "6.3703;2.3912",
    ICBM: "6.3703, 2.3912",
  },
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="icon" href="/favicon.jpg" />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
