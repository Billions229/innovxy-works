"use client"

import { Smartphone, Github, Twitter, Linkedin, Mail, Phone } from "lucide-react"
import { Footer } from "@/components/ui/footer"

/**
 * Footer principal pour InnovxyWorks
 * Contient les liens vers les services, réseaux sociaux et informations légales
 */
export function InnovxyFooter() {
  return (
    <Footer
      logo={<Smartphone className="h-10 w-10 text-blue-600" />}
      brandName="InnovxyWorks"
      socialLinks={[
        {
          icon: <Twitter className="h-5 w-5" />,
          href: "https://twitter.com/innovxyworks",
          label: "Twitter",
        },
        {
          icon: <Linkedin className="h-5 w-5" />,
          href: "https://linkedin.com/company/innovxyworks",
          label: "LinkedIn",
        },
        {
          icon: <Github className="h-5 w-5" />,
          href: "https://github.com/innovxyworks",
          label: "GitHub",
        },
        {
          icon: <Mail className="h-5 w-5" />,
          href: "mailto:contact@innovxyworks.com",
          label: "Email",
        },
        {
          icon: <Phone className="h-5 w-5" />,
          href: "tel:+33123456789",
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
        text: "© 2024 InnovxyWorks",
        license: "Tous droits réservés",
      }}
    />
  )
}
