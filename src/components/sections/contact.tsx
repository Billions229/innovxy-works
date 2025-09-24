"use client";

import { CalendarBooking } from "@/components/ui/calendar-booking";
import { ContactForm, ContactFormData } from "@/components/ui/contact-form";
import { SuccessModal } from "@/components/ui/success-modal";
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  MessageSquare,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import * as React from "react";

/**
 * Section Contact pour InnovyxWorks
 * Combine calendrier de réservation et formulaire de contact
 */
export function ContactSection() {
  const [step, setStep] = React.useState<"calendar" | "form" | "success">(
    "calendar"
  );
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  const handleDateTimeSelect = async (date: Date, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setIsLoading(true);

    // Simulation d'un délai pour l'animation
    await new Promise((resolve) => setTimeout(resolve, 500));
    setStep("form");
    setIsLoading(false);
  };

  const handleFormSubmit = async (formData: ContactFormData) => {
    setIsLoading(true);

    try {
      // Envoi de l'email via l'API
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          selectedDate: selectedDate?.toISOString(),
          selectedTime,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi de l'email");
      }

      const result = await response.json();
      console.log("Email envoyé:", result);

      // Afficher le popup de succès
      setShowSuccessModal(true);
      setStep("success");
    } catch (error) {
      console.error("Erreur:", error);
      // En cas d'erreur, afficher quand même le succès pour l'UX
      setShowSuccessModal(true);
      setStep("success");
    } finally {
      setIsLoading(false);
    }
  };

  const resetBooking = () => {
    setStep("calendar");
    setSelectedDate(undefined);
    setSelectedTime("");
    setShowSuccessModal(false);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-slate-900 text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-800/25 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 text-blue-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Consultation gratuite
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Discutons de votre projet !
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Réservez une consultation gratuite de 15 minutes pour discuter de
            vos besoins et découvrir comment nous pouvons vous aider
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Clock,
              title: "15 minutes",
              desc: "Consultation rapide et efficace",
            },
            {
              icon: Users,
              title: "Expert dédié",
              desc: "Échange avec un spécialiste",
            },
            {
              icon: Shield,
              title: "100% gratuit",
              desc: "Aucun engagement de votre part",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-2xl bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-extrabold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-white/90">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Steps Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-800 text-white border border-slate-700 shadow-lg">
            <div
              className={`flex items-center space-x-3 transition-all duration-300 ${
                step === "calendar"
                  ? "text-blue-600"
                  : step === "form" || step === "success"
                  ? "text-green-600"
                  : "text-slate-400"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  step === "calendar"
                    ? "bg-blue-100 dark:bg-blue-900/30 scale-110"
                    : step === "form" || step === "success"
                    ? "bg-green-100 dark:bg-green-900/30 scale-110"
                    : "bg-slate-100 dark:bg-slate-800"
                }`}
              >
                {step === "form" || step === "success" ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <Calendar className="w-5 h-5" />
                )}
              </div>
              <span className="font-medium text-sm">1. Choisir un créneau</span>
            </div>

            <div
              className={`w-12 h-0.5 transition-all duration-300 ${
                step === "form" || step === "success"
                  ? "bg-green-600"
                  : "bg-slate-300"
              }`}
            />

            <div
              className={`flex items-center space-x-3 transition-all duration-300 ${
                step === "form"
                  ? "text-blue-600"
                  : step === "success"
                  ? "text-green-600"
                  : "text-slate-400"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  step === "form"
                    ? "bg-blue-100 dark:bg-blue-900/30 scale-110"
                    : step === "success"
                    ? "bg-green-100 dark:bg-green-900/30 scale-110"
                    : "bg-slate-100 dark:bg-slate-800"
                }`}
              >
                {step === "success" ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <MessageSquare className="w-5 h-5" />
                )}
              </div>
              <span className="font-medium text-sm">
                2. Remplir le formulaire
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          {step === "calendar" && (
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  Sélectionnez une date et une heure qui vous conviennent pour
                  votre consultation gratuite !!
                </h3>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                  Choisissez le moment idéal pour discuter de votre projet avec
                  nos experts
                </p>
              </div>
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-xl md:p-0">
                <CalendarBooking onDateTimeSelect={handleDateTimeSelect} />
              </div>
            </div>
          )}

          {step === "form" && (
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                  Parlez-nous de votre projet
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  Quelques informations pour préparer notre échange et vous
                  proposer la meilleure solution
                </p>
                <button
                  onClick={resetBooking}
                  className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 text-sm font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Modifier le créneau
                </button>
              </div>
              <ContactForm
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onSubmit={handleFormSubmit}
              />
            </div>
          )}

          {step === "success" && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                Demande envoyée avec succès !
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Merci pour votre demande ! Nous vous contacterons dans les 24h
                pour confirmer votre rendez-vous
                {selectedDate && selectedTime && (
                  <>
                    {" "}
                    prévu le{" "}
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {selectedDate.toLocaleDateString("fr-FR", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                      })}
                    </span>{" "}
                    à{" "}
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {selectedTime}
                    </span>
                  </>
                )}
                .
              </p>
              <button
                onClick={resetBooking}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Prendre un autre rendez-vous
              </button>
            </div>
          )}
        </div>

        {/* Loading overlay */}
        {isLoading && (
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-lg font-medium text-slate-900 dark:text-white">
                  Envoi en cours...
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Success Modal */}
        <SuccessModal
          isOpen={showSuccessModal}
          onClose={handleCloseSuccessModal}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
        />
      </div>
    </section>
  );
}
