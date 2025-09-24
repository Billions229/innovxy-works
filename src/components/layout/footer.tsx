"use client"

import { Github, Twitter, Linkedin, Mail, Phone, Send, Facebook } from "lucide-react"
import { Footer } from "@/components/ui/footer"
import Image from "next/image"

/**
 * Footer principal pour InnovyxWorks
 * Contient les liens vers les services, réseaux sociaux et informations légales
 */
export function InnovxyFooter() {
  return (
    <Footer
      logo={
        <Image
          src="/logo.png"
          alt="InnovyxWorks Logo"
          width={40}
          height={40}
        />
      }
      brandName="InnovyxWorks"
      socialLinks={[
        {
          icon: <Twitter className="h-5 w-5" />,
          href: "#",
          label: "Twitter",
        },
        {
          icon: <Linkedin className="h-5 w-5" />,
          href: "#",
          label: "LinkedIn",
        },
        {
          icon: <Github className="h-5 w-5" />,
          href: "#",
          label: "GitHub",
        },
        {
          icon: <Send className="h-5 w-5" />,
          href: "https://t.me/innovyxworks",
          label: "Telegram",
        },
        {
          icon: <Facebook className="h-5 w-5" />,
          href: "https://web.facebook.com/profile.php?id=61580934997021",
          label: "Facebook",
        },
        {
          icon: <Mail className="h-5 w-5" />,
          href: "mailto:contact@innovyxworks.com",
          label: "Email",
        },
        {
          icon: <Phone className="h-5 w-5" />,
          href: "tel:+22943053098",
          label: "Téléphone",
        },
      ]}
      mainLinks={[
        { href: "#hero", label: "Accueil" },
        { href: "#projets", label: "Nos Projets" },
        { href: "#processus", label: "Notre Processus" },
        { href: "#tarifs", label: "Nos Tarifs" },
        { href: "#faq", label: "FAQ" },
        { href: "#contact", label: "Contact" },
      ]}
      legalLinks={[
        { href: "/privacy", label: "Politique de confidentialité" },
        { href: "/terms", label: "Conditions d'utilisation" },
        { href: "/cookies", label: "Politique des cookies" },
      ]}
      copyright={{
        text: "© 2025 InnovyxWorks",
        license: "Tous droits réservés",
      }}
    />
  )
}
