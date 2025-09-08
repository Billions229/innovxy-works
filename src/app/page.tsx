import { HeroSection } from "@/components/sections/hero"
import { ProjetsRecentsSection } from "@/components/sections/projets-recents"
import { ProcessusSection } from "@/components/sections/processus"
import { InnovxyNavbar } from "@/components/layout/navbar"
import { InnovxyFooter } from "@/components/layout/footer"

/**
 * Page principale d'InnovxyWorks
 * Contient la navigation, la section hero et le footer
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <InnovxyNavbar />

      {/* Section Hero */}
      <HeroSection />

      {/* Section Projets Récents */}
      <ProjetsRecentsSection />

      {/* Section Notre Processus */}
      <ProcessusSection />

      {/* Placeholder pour les futures sections */}
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Sections à venir
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Les sections Nos Tarifs, FAQ et Contact seront implémentées dans les prochaines étapes
          </p>
        </div>
      </div>

      {/* Footer */}
      <InnovxyFooter />
    </div>
  );
}