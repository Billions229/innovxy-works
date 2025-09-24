import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Cookie, Settings, BarChart3, Shield, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique en matière de cookies - InnovyxWorks",
  description: "Politique en matière de cookies d'InnovyxWorks - Comment nous utilisons les cookies pour améliorer votre expérience.",
  keywords: ["cookies", "politique cookies", "tracking", "analytics"],
};

export default function CookiesPage() {
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
              <Cookie className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Politique en matière de cookies
            </h1>
            <p className="text-xl text-slate-300">
              Dernière mise à jour : 24 septembre 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-blue max-w-none">
            <div className="bg-slate-800/50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Cookie className="w-6 h-6 text-blue-400" />
                Qu'est-ce qu'un cookie ?
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous 
                visitez un site web. Les cookies nous aident à améliorer votre expérience 
                de navigation et à comprendre comment vous utilisez notre site.
              </p>
            </div>

            <div className="space-y-8">
              <section className="bg-slate-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Settings className="w-6 h-6 text-blue-400" />
                  Types de cookies utilisés
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Cookies essentiels</h3>
                    <p className="text-slate-300">
                      Ces cookies sont nécessaires au fonctionnement du site. Ils permettent 
                      la navigation de base et l'accès aux zones sécurisées. Sans ces cookies, 
                      certaines fonctionnalités ne peuvent pas être fournies.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-slate-400">
                      <li>Cookies de session</li>
                      <li>Cookies de sécurité</li>
                      <li>Cookies de préférences linguistiques</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Cookies de performance</h3>
                    <p className="text-slate-300">
                      Ces cookies collectent des informations sur la façon dont vous utilisez 
                      notre site web, comme les pages que vous visitez le plus souvent.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-slate-400">
                      <li>Google Analytics</li>
                      <li>Mesure d'audience</li>
                      <li>Temps de chargement des pages</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Cookies fonctionnels</h3>
                    <p className="text-slate-300">
                      Ces cookies permettent au site de se souvenir des choix que vous faites 
                      et fournissent des fonctionnalités améliorées et personnalisées.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-slate-400">
                      <li>Préférences utilisateur</li>
                      <li>Formulaires pré-remplis</li>
                      <li>Paramètres d'affichage</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                  Cookies tiers
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Nous utilisons également des services tiers qui peuvent placer leurs 
                    propres cookies sur votre appareil :
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Google Analytics</h4>
                      <p className="text-sm text-slate-400">
                        Analyse du trafic et du comportement des utilisateurs
                      </p>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Google Fonts</h4>
                      <p className="text-sm text-slate-400">
                        Chargement des polices de caractères
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-blue-400" />
                  Gestion de vos préférences
                </h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Vous pouvez contrôler et gérer les cookies de plusieurs façons :
                  </p>
                  
                  <h3 className="text-xl font-semibold text-white">Paramètres du navigateur :</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Bloquer tous les cookies</li>
                    <li>Accepter uniquement les cookies de première partie</li>
                    <li>Supprimer les cookies existants</li>
                    <li>Recevoir une notification avant qu'un cookie soit stocké</li>
                  </ul>

                  <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mt-4">
                    <p className="text-yellow-200 text-sm">
                      <strong>Note :</strong> La désactivation de certains cookies peut affecter 
                      le fonctionnement de notre site web et réduire la qualité de votre expérience.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Durée de conservation</h2>
                <div className="space-y-4 text-slate-300">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-slate-600">
                          <th className="text-left py-2 text-white">Type de cookie</th>
                          <th className="text-left py-2 text-white">Durée</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="border-b border-slate-700">
                          <td className="py-2">Cookies de session</td>
                          <td className="py-2">Jusqu'à la fermeture du navigateur</td>
                        </tr>
                        <tr className="border-b border-slate-700">
                          <td className="py-2">Cookies de préférences</td>
                          <td className="py-2">1 an</td>
                        </tr>
                        <tr className="border-b border-slate-700">
                          <td className="py-2">Cookies analytiques</td>
                          <td className="py-2">2 ans</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Modifications de cette politique</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Nous pouvons mettre à jour cette politique de cookies de temps à autre. 
                    Nous vous encourageons à consulter régulièrement cette page pour rester 
                    informé de nos pratiques en matière de cookies.
                  </p>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Contact</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    Pour toute question concernant notre utilisation des cookies :
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
