"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Building,
  Calendar,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import * as React from "react";

interface ContactFormProps {
  selectedDate?: Date;
  selectedTime?: string;
  onSubmit?: (formData: ContactFormData) => void;
  className?: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  message: string;
  budget: string;
}

export function ContactForm({
  selectedDate,
  selectedTime,
  onSubmit,
  className,
}: ContactFormProps) {
  const [formData, setFormData] = React.useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
    budget: "",
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.message;

  return (
    <Card
  className={`bg-slate-800/90 backdrop-blur-sm border-slate-700/50 shadow-2xl ${className}`}
    >
      <CardHeader className="pb-6">
        <CardTitle className="flex items-center gap-3 text-2xl font-bold">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          Parlez-nous de votre projet
        </CardTitle>
        {selectedDate && selectedTime && (
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-xl border border-blue-800">
            <div className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
              <Calendar className="w-4 h-4" />
              <span className="font-semibold">Consultation prévue le </span>
              <span className="font-bold">
                {selectedDate.toLocaleDateString("fr-FR", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </span>
              <span className="font-semibold">à</span>
              <span className="font-bold">{selectedTime}</span>
            </div>
          </div>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Informations personnelles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <User className="w-4 h-4 text-blue-600" />
                Prénom *
              </label>
              <Input
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder="Votre prénom"
                className="h-12 border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:border-blue-500 focus:ring-0 focus:outline-none transition-all duration-200"
                required
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Nom *
              </label>
              <Input
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder="Votre nom"
                className="h-12 border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:border-blue-500 focus:ring-0 focus:outline-none transition-all duration-200"
                required
              />
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Mail className="w-4 h-4 text-blue-600" />
                Email *
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="votre@email.com"
                className="h-12 border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:border-blue-500 focus:ring-0 focus:outline-none transition-all duration-200"
                required
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Phone className="w-4 h-4 text-blue-600" />
                Téléphone
              </label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+229 XX XX XX XX"
                className="h-12 border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:border-blue-500 focus:ring-0 focus:outline-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Entreprise et projet */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-sm font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Building className="w-4 h-4 text-blue-600" />
                Entreprise
              </label>
              <Input
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder="Nom de votre entreprise"
                className="h-12 border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:border-blue-500 focus:ring-0 focus:outline-none transition-all duration-200"
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Type de projet
              </label>
              <select
                value={formData.projectType}
                onChange={(e) =>
                  handleInputChange("projectType", e.target.value)
                }
                className="flex h-12 w-full rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-3 text-sm focus:border-blue-500 focus:ring-0 focus:outline-none transition-all duration-200"
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
          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Budget estimé
            </label>
            <select
              value={formData.budget}
              onChange={(e) => handleInputChange("budget", e.target.value)}
              className="flex h-12 w-full rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-3 text-sm focus:border-blue-500 focus:ring-0 transition-all duration-200"
            >
              <option value="">Sélectionnez une fourchette</option>
              <option value="300-800">300€ - 800€ (Site Vitrine Pro)</option>
              <option value="800-1500">800€ - 1 500€ (E-commerce / App Native)</option>
              <option value="1500-3000">1 500€ - 3 000€ (App Business Pro)</option>
              <option value="3000-8000">3 000€ - 8 000€ (Plateforme Custom)</option>
              <option value="plus-8000">Plus de 8 000€ (App Enterprise)</option>
            </select>
          </div>

          {/* Message */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Décrivez votre projet *
            </label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Décrivez-nous votre projet, vos objectifs, vos contraintes..."
              className="min-h-[140px] border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 focus:border-blue-500 focus:ring-0 focus:outline-none transition-all duration-200 resize-none"
              required
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={!isFormValid}
              className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              size="lg"
            >
              <Send className="w-5 h-5 mr-3" />
              Envoyer ma demande
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
