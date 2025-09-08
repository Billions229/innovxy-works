/**
 * Page principale d'InnovxyWorks
 * Version simplifiée pour tester la configuration
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Section Hero simplifiée */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-5xl mx-auto px-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400">
            Nous créons des apps mobiles & sites web qui boostent votre business
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light tracking-wide max-w-3xl mx-auto leading-relaxed mb-8">
            Transformez votre idée en application mobile performante ou site web professionnel avec une UX fluide, une architecture scalable et un design axé conversion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Démarrer mon projet
            </button>
            <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 dark:text-slate-300 dark:border-slate-600 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Voir nos réalisations
            </button>
          </div>
        </div>
      </div>

      {/* Placeholder pour les futures sections */}
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Sections à venir
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Les sections Projets Récents, Notre Processus, Nos Tarifs, FAQ et Contact
            seront implémentées dans les prochaines étapes selon les spécifications du README.md
          </p>
        </div>
      </div>

      {/* Footer simplifié */}
      <footer className="bg-slate-100 dark:bg-slate-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            <span className="text-xl font-bold">InnovxyWorks</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            © 2024 InnovxyWorks - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
}
