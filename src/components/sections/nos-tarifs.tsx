"use client"

import { PricingCard } from "@/components/ui/pricing-table"
import { useState } from "react"

/**
 * Section Nos Tarifs pour InnovxyWorks
 * Affiche les 6 packages selon les spécifications du README.md
 */
export function NosTarifsSection() {
  const [activeCategory, setActiveCategory] = useState<'web' | 'mobile'>('web')

  const webPackages = [
    {
      title: "🎨 Site Vitrine Pro",
      price: "1 487€",
      description: "Parfait pour les entreprises qui veulent une présence web professionnelle",
      features: [
        "Design responsive",
        "Optimisation SEO",
        "Vitesse de chargement optimisée",
        "Layouts personnalisés",
        "Intégration analytics",
        "Configuration CMS",
        "Section blog",
        "Mises à jour régulières",
        "Support bi-mensuel",
        "Gestion de projet"
      ],
      isPopular: false
    },
    {
      title: "🛒 E-commerce Avancé",
      price: "2 987€",
      description: "Solution complète pour vendre en ligne avec toutes les fonctionnalités",
      features: [
        "Tout du pack précédent +",
        "Boutique en ligne complète",
        "Paiements sécurisés",
        "Gestion des stocks",
        "Tableau de bord admin",
        "Marketing automation",
        "Support client intégré",
        "Formation équipe",
        "Maintenance 3 mois",
        "Suivi conversions"
      ],
      isPopular: true
    },
    {
      title: "🚀 Plateforme Custom",
      price: "4 987€",
      description: "Développement sur mesure pour des besoins spécifiques et complexes",
      features: [
        "Tout du pack précédent +",
        "Développement sur mesure",
        "API personnalisées",
        "Intégrations tierces",
        "Architecture enterprise",
        "Sécurité renforcée",
        "Déploiement cloud",
        "Formation avancée",
        "Support prioritaire 6 mois",
        "Consultations stratégiques"
      ],
      isPopular: false
    }
  ]

  const mobilePackages = [
    {
      title: "📱 App Native Starter",
      price: "2 987€",
      description: "Application mobile native pour iOS et Android",
      features: [
        "App iOS + Android",
        "Design system cohérent",
        "Authentification utilisateur",
        "Base de données cloud",
        "Notifications push",
        "Analytics intégrées",
        "Tests sur devices",
        "Publication stores",
        "Support 2 mois",
        "Documentation"
      ],
      isPopular: false
    },
    {
      title: "⚡ App Business Pro",
      price: "5 987€",
      description: "Application mobile avancée avec fonctionnalités business",
      features: [
        "Tout du pack précédent +",
        "Fonctionnalités avancées",
        "Gestion multi-utilisateurs",
        "API backend robuste",
        "Synchronisation offline",
        "Paiements in-app",
        "Dashboard admin web",
        "Tests automatisés",
        "Support 4 mois",
        "Formation équipe"
      ],
      isPopular: true
    },
    {
      title: "🏢 App Enterprise",
      price: "9 987€",
      description: "Solution enterprise avec architecture microservices",
      features: [
        "Tout du pack précédent +",
        "Architecture microservices",
        "Sécurité enterprise",
        "Intégrations ERP/CRM",
        "Multi-tenancy",
        "Support 24/7",
        "Déploiement custom",
        "Conformité RGPD",
        "Support 12 mois",
        "Consultant dédié"
      ],
      isPopular: false
    }
  ]

  const currentPackages = activeCategory === 'web' ? webPackages : mobilePackages

  return (
    <section id="tarifs" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Nos Tarifs
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Des packages adaptés à tous vos besoins, du site vitrine à l&apos;application enterprise
          </p>

          {/* Category Toggle */}
          <div className="inline-flex bg-white dark:bg-slate-800 rounded-lg p-1 shadow-sm border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setActiveCategory('web')}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                activeCategory === 'web'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              🌐 Sites Web
            </button>
            <button
              onClick={() => setActiveCategory('mobile')}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                activeCategory === 'mobile'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              📱 Applications Mobiles
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentPackages.map((pkg, index) => (
            <PricingCard
              key={`${activeCategory}-${index}`}
              title={pkg.title}
              price={pkg.price}
              description={pkg.description}
              features={pkg.features}
              isPopular={pkg.isPopular}
              buttonText="Démarrer ce projet"
              onButtonClick={() => {
                // Scroll to contact section
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Besoin d&apos;un devis personnalisé ? Parlons de votre projet !
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Demander un devis gratuit
          </button>
        </div>
      </div>
    </section>
  )
}
