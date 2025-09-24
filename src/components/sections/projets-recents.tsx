"use client";

import Gallery6 from "@/components/ui/gallery6";

/**
 * Section Projets Récents pour InnovyxWorks
 * Affiche les 4 projets principaux selon les spécifications du README.md
 */
export function ProjetsRecentsSection() {
  const projets = [
    {
      id: "manos-tours",
      title: "Trinova Voyages",
      summary:
        "Trinova Voyages est un site web de réservation de voyages touristiques qui permet aux utilisateurs de découvrir différentes destinations à travers des circuits organisés. Le site facilite la sélection de guides locaux et offre une expérience de voyage enrichissante.",
      url: "https://www.trinova-voyages.com/",
      image: "/manos-tours.png",
      type: "Site Web de réservation de voyages pour le tourisme Ouest Africain",
      technologies: "Next.js, Fedapay, Stripe",
      results: "+10 clients chaque vacances, +1000 visites par an",
    },
    {
      id: "safre-academie",
      title: "Safre Académie",
      summary:
        "Safre Académie est une plateforme éducative qui propose des formations en ligne et des ateliers pour accompagner les étudiants dans leur apprentissage à distance. Le site utilise une gestion d'authentification sécurisée et intègre plusieurs moyens de paiement pour simplifier les inscriptions.",
      url: "https://safre-academie.vercel.app/",
      image: "/safre-academie.png",
      type: "Plateforme éducative en ligne",
      technologies: "Supabase, Next.js, Clerk, Stripe, CinetPay",
      results:
        "Plus de 10 nouveaux étudiants chaque semestre, plus de 15 000 visites par an",
    },
    {
      id: "portfolio-abdou",
      title: "Portfolio Abdou",
      summary:
        "Le Portfolio Abdou est un site personnel mettant en valeur les compétences, projets et réalisations professionnelles du propriétaire. Il intègre un design moderne et responsive visant à refléter son expertise en digital learning et UX/UI design.",
      url: "https://portfolio-abdou.com/",
      image: "/Portfolio Abdou.png",
      type: "Site Portfolio Personnel",
      technologies: "React Js",
      results:
        "Met en avant l’expertise et les compétences pour attirer clients et partenaires",
    },
    {
      id: "west-africa-tours",
      title: "West Africa Tours",
      summary:
        "West Africa Tours est un blog qui parle des voyages immersifs et authentiques en Afrique de l’Ouest, permettant de découvrir la culture locale, la nature et l’histoire à travers différents types de circuits, du scooter aux tours classiques. Il appartient au site Trinova Voyages.",
      url: "https://west-africa-tours.vercel.app/",
      image: "/West Africa Tours.png",
      type: "Blog de voyage",
      technologies: "Next.js, Tailwind CSS",
      results: "+15 000 visiteurs/mois, +10 nouveaux clients chaque semestre",
    },
  ];

  return (
    <div id="projets">
      <Gallery6 heading="Nos Réalisations Récentes" items={projets} />
    </div>
  );
}
