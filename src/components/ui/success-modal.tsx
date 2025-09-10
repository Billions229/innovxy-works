"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, X } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate?: Date;
  selectedTime?: string;
}

export function SuccessModal({
  isOpen,
  onClose,
  selectedDate,
  selectedTime,
}: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header avec gradient */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Demande envoyée !
          </h2>
          <p className="text-green-100">
            Votre demande de consultation a été transmise avec succès
          </p>
        </div>

        {/* Contenu */}
        <div className="p-6">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              Merci pour votre confiance !
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Nous avons bien reçu votre demande et nous vous contacterons dans
              les 24h pour confirmer votre rendez-vous.
            </p>
          </div>

          {/* Détails de la consultation */}
          {selectedDate && selectedTime && (
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm">
                📅 Consultation prévue
              </h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                <span className="font-medium">
                  {selectedDate.toLocaleDateString("fr-FR", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>{" "}
                à <span className="font-medium">{selectedTime}</span>
              </p>
            </div>
          )}

          {/* Prochaines étapes */}
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 mb-6">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">
              Prochaines étapes :
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">1.</span>
                <span>Confirmation par email dans les 24h</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">2.</span>
                <span>Préparation de votre consultation personnalisée</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">3.</span>
                <span>Appel de 15 minutes pour discuter de votre projet</span>
              </li>
            </ul>
          </div>

          {/* Boutons */}
          <div className="flex gap-3">
            <Button
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Parfait !
            </Button>
          </div>
        </div>

        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-slate-500" />
        </button>
      </div>
    </div>
  );
}
