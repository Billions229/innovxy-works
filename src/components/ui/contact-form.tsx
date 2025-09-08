"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Mail, Phone, Building, MessageSquare, Send } from "lucide-react"

interface ContactFormProps {
  selectedDate?: Date
  selectedTime?: string
  onSubmit?: (formData: ContactFormData) => void
  className?: string
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  projectType: string
  message: string
  budget: string
}

export function ContactForm({ selectedDate, selectedTime, onSubmit, className }: ContactFormProps) {
  const [formData, setFormData] = React.useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
    budget: ""
  })

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(formData)
    }
  }

  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.message

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-blue-600" />
          Parlez-nous de votre projet
        </CardTitle>
        {selectedDate && selectedTime && (
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Consultation prévue le{" "}
            <span className="font-medium">
              {selectedDate.toLocaleDateString("fr-FR", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </span>{" "}
            à <span className="font-medium">{selectedTime}</span>
          </p>
        )}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informations personnelles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <User className="w-4 h-4" />
                Prénom *
              </label>
              <Input
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder="Votre prénom"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Nom *</label>
              <Input
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder="Votre nom"
                required
              />
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email *
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="votre@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Téléphone
              </label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+33 6 12 34 56 78"
              />
            </div>
          </div>

          {/* Entreprise et projet */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Building className="w-4 h-4" />
                Entreprise
              </label>
              <Input
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder="Nom de votre entreprise"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Type de projet</label>
              <select
                value={formData.projectType}
                onChange={(e) => handleInputChange("projectType", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Sélectionnez un type</option>
                <option value="site-vitrine">Site vitrine</option>
                <option value="e-commerce">E-commerce</option>
                <option value="app-mobile">Application mobile</option>
                <option value="plateforme-custom">Plateforme sur mesure</option>
                <option value="refonte">Refonte existant</option>
                <option value="autre">Autre</option>
              </select>
            </div>
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Budget estimé</label>
            <select
              value={formData.budget}
              onChange={(e) => handleInputChange("budget", e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Sélectionnez une fourchette</option>
              <option value="moins-5k">Moins de 5 000€</option>
              <option value="5k-15k">5 000€ - 15 000€</option>
              <option value="15k-30k">15 000€ - 30 000€</option>
              <option value="30k-50k">30 000€ - 50 000€</option>
              <option value="plus-50k">Plus de 50 000€</option>
            </select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Décrivez votre projet *</label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Décrivez-nous votre projet, vos objectifs, vos contraintes..."
              className="min-h-[120px]"
              required
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={!isFormValid}
            className="w-full"
            size="lg"
          >
            <Send className="w-4 h-4 mr-2" />
            Envoyer ma demande
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
