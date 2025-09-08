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
  title: "InnovxyWorks - Apps mobiles & Sites web qui boostent votre business",
  description: "Transformez votre idée en application mobile performante ou site web professionnel avec une UX fluide, une architecture scalable et un design axé conversion.",
  keywords: ["développement mobile", "création site web", "application mobile", "startup", "UX/UI design", "React Native", "Next.js"],
  authors: [{ name: "InnovxyWorks" }],
  openGraph: {
    title: "InnovxyWorks - Apps mobiles & Sites web",
    description: "Nous créons des applications mobiles et sites web qui boostent votre business",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
