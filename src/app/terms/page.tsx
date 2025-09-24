import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Conditions d'utilisation - InnovyxWorks",
  description: "Conditions d'utilisation des services InnovyxWorks - Règles et conditions pour l'utilisation de nos services de développement.",
  keywords: ["conditions d'utilisation", "termes", "contrat", "services"],
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Conditions d'utilisation
            </h1>
            <p className="text-xl text-slate-300">
              Dernière mise à jour : 24 septembre 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-blue max-w-none">
            <div className="bg-slate-800/50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 text-blue-400" />
                Acceptation des conditions
              </h2>
              <p className="text-slate-300 leading-relaxed">
                En utilisant les services d'InnovyxWorks, vous acceptez d'être lié par ces 
                conditions d'utilisation. Si vous n'acceptez pas ces conditions, 
                veuillez ne pas utiliser nos services.
              </p>
            </div>

            <div className="space-y-8">
              <section className="bg-slate-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                  Nos services
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p>InnovyxWorks propose les services suivants :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Développement de sites web responsives</li>
                    <li>Création d'applications mobiles natives</li>
                    <li>Développement d'applications web progressives</li>
                    <li>Consultation et conseil en développement</li>
                    <li>Maintenance et support technique</li>
                    <li>Optimisation SEO et performance</li>
                  </ul>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Obligations du client</h2>
                <div className="space-y-4 text-slate-300">
                  <p>En tant que client, vous vous engagez à :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fournir des informations exactes et complètes</li>
                    <li>Respecter les délais convenus pour la fourniture de contenus</li>
                    <li>Effectuer les paiements selon les modalités convenues</li>
                    <li>Respecter les droits de propriété intellectuelle</li>
                    <li>Ne pas utiliser nos services à des fins illégales</li>
                    <li>Collaborer de bonne foi durant le projet</li>
                  </ul>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Propriété intellectuelle</h2>
                <div className="space-y-4 text-slate-300">
                  <h3 className="text-xl font-semibold text-white">Code source et développements :</h3>
                  <p>
                    Le code source développé spécifiquement pour votre projet vous appartient 
                    une fois le paiement intégral effectué. Cependant, InnovyxWorks conserve 
                    les droits sur :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Les frameworks et bibliothèques propriétaires</li>
                    <li>Les méthodologies et processus de développement</li>
                    <li>Les outils internes développés par InnovyxWorks</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-white mt-6">Contenus fournis par le client :</h3>
                  <p>
                    Vous garantissez détenir tous les droits nécessaires sur les contenus 
                    (textes, images, vidéos) que vous nous fournissez.
                  </p>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Tarifs et paiements</h2>
                <div className="space-y-4 text-slate-300">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Les tarifs sont indiqués en euros et hors taxes</li>
                    <li>Un acompte de 30% est demandé avant le début des travaux</li>
                    <li>Le solde est payable à la livraison du projet</li>
                    <li>Les retards de paiement peuvent entraîner des pénalités</li>
                    <li>Aucun remboursement n'est possible une fois les travaux commencés</li>
                  </ul>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                  Limitation de responsabilité
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    InnovyxWorks s'engage à fournir des services de qualité professionnelle. 
                    Cependant, notre responsabilité est limitée au montant des sommes versées 
                    pour le projet concerné.
                  </p>
                  <p>
                    Nous ne saurions être tenus responsables des dommages indirects, 
                    pertes de profits ou interruptions d'activité.
                  </p>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Garanties et maintenance</h2>
                <div className="space-y-4 text-slate-300">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Garantie de 3 mois sur les défauts de fonctionnement</li>
                    <li>Corrections gratuites des bugs identifiés</li>
                    <li>Support technique inclus selon le package choisi</li>
                    <li>Maintenance préventive disponible sur devis</li>
                  </ul>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Résiliation</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Chaque partie peut résilier le contrat en cas de manquement grave 
                    de l'autre partie, après mise en demeure restée sans effet pendant 15 jours.
                  </p>
                  <p>
                    En cas de résiliation par le client, les sommes déjà versées restent acquises 
                    à InnovyxWorks au prorata des travaux réalisés.
                  </p>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Droit applicable</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Ces conditions sont régies par le droit béninois. 
                    Tout litige sera soumis aux tribunaux compétents de Cotonou, Bénin.
                  </p>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Contact</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Pour toute question concernant ces conditions d'utilisation :
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="mailto:contact@innovyxworks.com" 
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                    >
                      <Mail className="w-4 h-4" />
                      contact@innovyxworks.com
                    </a>
                    <a 
                      href="tel:+22943053098" 
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                    >
                      <Phone className="w-4 h-4" />
                      +229 43053098
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
