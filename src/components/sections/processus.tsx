"use client"

import { FeatureSteps } from "@/components/ui/feature-section"

/**
 * Section Notre Processus pour InnovyxWorks
 * Affiche les 4 étapes du processus selon les spécifications du README.md
 */
export function ProcessusSection() {
  const etapes = [
    {
      step: "Analyse & Planification",
      content: "Nous analysons vos besoins, votre marché cible et créons une roadmap personnalisée pour votre app/site.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    },
    {
      step: "Design & Prototypage",
      content: "Nous concevons des maquettes UX/UI data-driven et des prototypes interactifs pour valider l'expérience utilisateur.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
    },
    {
      step: "Développement & Tests",
      content: "Développement des fonctionnalités core, architecture scalable et tests rigoureux pour un lancement réussi.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
    },
    {
      step: "Lancement & Optimisation",
      content: "Déploiement, monitoring des KPIs, mises à jour quotidiennes et stratégies de croissance continue.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    }
  ]

  return (
    <div id="processus">
      <FeatureSteps
        features={etapes}
        title="4 Étapes Efficaces"
        autoPlayInterval={5000}
      />
    </div>
  )
}
