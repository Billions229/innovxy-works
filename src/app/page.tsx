import { HeroSection } from "@/components/sections/hero"
import { ProjetsRecentsSection } from "@/components/sections/projets-recents"
import { ProcessusSection } from "@/components/sections/processus"
import { NosTarifsSection } from "@/components/sections/nos-tarifs"
import { FAQSection } from "@/components/sections/faq"
import { ContactSection } from "@/components/sections/contact"
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

      {/* Section Nos Tarifs */}
      <NosTarifsSection />

      {/* Section FAQ */}
      <FAQSection />

      {/* Section Contact */}
      <ContactSection />

      {/* Footer */}
      <InnovxyFooter />
    </div>
  );
}