import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Eye, Lock, Database, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de confidentialité - InnovyxWorks",
  description: "Politique de confidentialité d&apos;InnovyxWorks - Comment nous collectons, utilisons et protégeons vos données personnelles.",
  keywords: ["politique de confidentialité", "protection des données", "RGPD", "vie privée"],
};

export default function PrivacyPage() {
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
            Retour à l&apos;accueil
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Politique de confidentialité
            </h1>
            <p className="text-xl text-slate-300">
              Dernière mise à jour : 24 septembre 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-blue max-w-none">
            <div className="bg-slate-800/50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-blue-400" />
                Introduction
              </h2>
              <p className="text-slate-300 leading-relaxed">
                InnovyxWorks s&apos;engage à protéger votre vie privée et vos données personnelles.
                Cette politique de confidentialité explique comment nous collectons, utilisons, 
                stockons et protégeons vos informations lorsque vous utilisez nos services.
              </p>
            </div>

            <div className="space-y-8">
              <section className="bg-slate-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Database className="w-6 h-6 text-blue-400" />
                  Données collectées
                </h2>
                <div className="space-y-4 text-slate-300">
                  <h3 className="text-xl font-semibold text-white">Informations que vous nous fournissez :</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse e-mail</li>
                    <li>Numéro de téléphone</li>
                    <li>Nom de l&apos;entreprise</li>
                    <li>Informations sur votre projet</li>
                    <li>Budget estimé</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-white mt-6">Données techniques automatiquement collectées :</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Adresse IP</li>
                    <li>Type de navigateur et version</li>
                    <li>Pages visitées et temps passé</li>
                    <li>Données de géolocalisation approximative</li>
                  </ul>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-blue-400" />
                  Utilisation des données
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p>Nous utilisons vos données personnelles pour :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Répondre à vos demandes de contact et devis</li>
                    <li>Planifier et organiser les consultations</li>
                    <li>Vous fournir nos services de développement</li>
                    <li>Améliorer notre site web et nos services</li>
                    <li>Vous envoyer des informations pertinentes (avec votre consentement)</li>
                    <li>Respecter nos obligations légales</li>
                  </ul>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Protection des données</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Nous mettons en place des mesures techniques et organisationnelles appropriées 
                    pour protéger vos données contre tout accès non autorisé, modification, 
                    divulgation ou destruction.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Chiffrement des données sensibles</li>
                    <li>Accès restreint aux données personnelles</li>
                    <li>Surveillance régulière de nos systèmes</li>
                    <li>Formation de notre équipe sur la protection des données</li>
                  </ul>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Vos droits</h2>
                <div className="space-y-4 text-slate-300">
                  <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Droit d&apos;accès :</strong> Obtenir une copie de vos données personnelles</li>
                    <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
                    <li><strong>Droit à l&apos;effacement :</strong> Demander la suppression de vos données</li>
                    <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                    <li><strong>Droit d&apos;opposition :</strong> Vous opposer au traitement de vos données</li>
                  </ul>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Contact</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Pour exercer vos droits ou pour toute question concernant cette politique 
                    de confidentialité, contactez-nous :
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
