"use client"

import * as React from "react"
import { CalendarBooking } from "@/components/ui/calendar-booking"
import { ContactForm, ContactFormData } from "@/components/ui/contact-form"
import { Calendar, MessageSquare, CheckCircle } from "lucide-react"

/**
 * Section Contact pour InnovxyWorks
 * Combine calendrier de réservation et formulaire de contact
 */
export function ContactSection() {
  const [step, setStep] = React.useState<'calendar' | 'form' | 'success'>('calendar')
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>()
  const [selectedTime, setSelectedTime] = React.useState<string>("")

  const handleDateTimeSelect = (date: Date, time: string) => {
    setSelectedDate(date)
    setSelectedTime(time)
    setStep('form')
  }

  const handleFormSubmit = (formData: ContactFormData) => {
    // Ici vous pourriez envoyer les données à votre API
    console.log('Form submitted:', {
      ...formData,
      selectedDate,
      selectedTime
    })
    setStep('success')
  }

  const resetBooking = () => {
    setStep('calendar')
    setSelectedDate(undefined)
    setSelectedTime("")
  }

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Discutons de votre projet !
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Réservez une consultation gratuite de 15 minutes pour discuter de vos besoins
          </p>
        </div>

        {/* Steps Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center space-x-2 ${
              step === 'calendar' ? 'text-blue-600' : 
              step === 'form' || step === 'success' ? 'text-green-600' : 'text-slate-400'
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === 'calendar' ? 'bg-blue-100 dark:bg-blue-900/30' :
                step === 'form' || step === 'success' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-slate-100 dark:bg-slate-800'
              }`}>
                {step === 'form' || step === 'success' ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Calendar className="w-4 h-4" />
                )}
              </div>
              <span className="font-medium">1. Choisir un créneau</span>
            </div>
            
            <div className={`w-8 h-0.5 ${
              step === 'form' || step === 'success' ? 'bg-green-600' : 'bg-slate-300'
            }`} />
            
            <div className={`flex items-center space-x-2 ${
              step === 'form' ? 'text-blue-600' :
              step === 'success' ? 'text-green-600' : 'text-slate-400'
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === 'form' ? 'bg-blue-100 dark:bg-blue-900/30' :
                step === 'success' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-slate-100 dark:bg-slate-800'
              }`}>
                {step === 'success' ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <MessageSquare className="w-4 h-4" />
                )}
              </div>
              <span className="font-medium">2. Remplir le formulaire</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {step === 'calendar' && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2 text-slate-900 dark:text-white">
                  Choisissez votre créneau
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Sélectionnez une date et une heure qui vous conviennent
                </p>
              </div>
              <CalendarBooking onDateTimeSelect={handleDateTimeSelect} />
            </div>
          )}

          {step === 'form' && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2 text-slate-900 dark:text-white">
                  Parlez-nous de votre projet
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Quelques informations pour préparer notre échange
                </p>
                <button
                  onClick={resetBooking}
                  className="text-blue-600 hover:text-blue-700 text-sm mt-2"
                >
                  ← Modifier le créneau
                </button>
              </div>
              <ContactForm
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onSubmit={handleFormSubmit}
              />
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">
                Demande envoyée avec succès !
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                Merci pour votre demande ! Nous vous contacterons dans les 24h pour confirmer votre rendez-vous
                {selectedDate && selectedTime && (
                  <>
                    {" "}prévu le{" "}
                    <span className="font-medium">
                      {selectedDate.toLocaleDateString("fr-FR", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                      })}
                    </span>
                    {" "}à <span className="font-medium">{selectedTime}</span>
                  </>
                )}.
              </p>
              <button
                onClick={resetBooking}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Prendre un autre rendez-vous
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
