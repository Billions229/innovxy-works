"use client"

import Gallery6 from "@/components/ui/gallery6"

/**
 * Section Projets Récents pour InnovxyWorks
 * Affiche les 4 projets principaux selon les spécifications du README.md
 */
export function ProjetsRecentsSection() {
  const projets = [
    {
      id: "boutikplus",
      title: "BoutikPlus",
      summary: "Plateforme e-commerce moderne avec gestion des stocks, paiements sécurisés et tableau de bord marchand. Interface intuitive qui a augmenté les conversions de 150%.",
      url: "https://boutikplus.demo.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      type: "Site Web E-commerce",
      technologies: "Next.js, Stripe, PostgreSQL",
      results: "+150% conversions, 2000+ produits gérés"
    },
    {
      id: "techconsult",
      title: "TechConsult Pro",
      summary: "Site vitrine professionnel pour cabinet de conseil avec système de prise de rendez-vous, blog intégré et optimisation SEO complète.",
      url: "https://techconsult.demo.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      type: "Site Web Corporate",
      technologies: "React, Tailwind CSS, Cal.com",
      results: "+200% trafic organique, 50+ leads/mois"
    },
    {
      id: "dataflow",
      title: "DataFlow Hub",
      summary: "Dashboard analytics en temps réel pour PME avec visualisations interactives, rapports automatisés et API pour intégrations tierces.",
      url: "https://dataflow.demo.com",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      type: "Application Web",
      technologies: "Vue.js, D3.js, Node.js, MongoDB",
      results: "500+ utilisateurs actifs, 99.9% uptime"
    },
    {
      id: "fittracker",
      title: "FitTracker Pro",
      summary: "App de fitness cross-platform avec suivi d'activités, programmes personnalisés, notifications push et synchronisation cloud.",
      url: "https://fittracker.demo.com",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      type: "Application Mobile",
      technologies: "React Native, Firebase, Redux",
      results: "10k+ téléchargements, 4.8/5 étoiles"
    }
  ]

  return (
    <Gallery6
      heading="Nos Réalisations Récentes"
      items={projets}
    />
  )
}
