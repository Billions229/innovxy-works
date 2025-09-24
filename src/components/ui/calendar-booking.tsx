"use client";

import { Calendar as CalendarIcon, Clock } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";

interface CalendarBookingProps {
  onDateTimeSelect?: (date: Date, time: string) => void;
}

export function CalendarBooking({ onDateTimeSelect }: CalendarBookingProps) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [month, setMonth] = React.useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = React.useState<string | null>(
    "10:00"
  );

  // Créneaux horaires de 9h à 18h par tranches de 15 minutes
  const timeSlots = Array.from({ length: 37 }, (_, i) => {
    const totalMinutes = i * 15;
    const hour = Math.floor(totalMinutes / 60) + 9;
    const minute = totalMinutes % 60;
    return `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
  });

  // Dates déjà réservées (exemple)
  const bookedDates = Array.from(
    { length: 3 },
    (_, i) => new Date(2025, 0, 20 + i)
  );

  const handleContinue = () => {
    if (date && selectedTime && onDateTimeSelect) {
      onDateTimeSelect(date, selectedTime);
    }
  };

  return (
    <div className="space-y-6">
      {/* Sélection de date et heure - Layout pleine largeur */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Calendrier - 1/2 de l'espace sur desktop */}
        <Card className="overflow-hidden bg-slate-800 text-white border border-slate-700 w-full">
          <CardContent className="p-4 md:p-5 bg-slate-800">
            <div className="flex items-center gap-2 mb-4">
              <CalendarIcon className="w-5 h-5 text-blue-400" />
              <h3 className="font-extrabold text-white text-lg">
                Choisir une date
              </h3>
            </div>
            <div className="w-full p-0 flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                month={month}
                onMonthChange={setMonth}
                disabled={bookedDates}
                showOutsideDays={false}
                modifiers={{
                  booked: bookedDates,
                }}
                modifiersClassNames={{
                  booked: "[&>button]:line-through opacity-50",
                }}
                className="bg-transparent p-0 w-fit md:w-fit [--cell-size:--spacing(22)] md:[--cell-size:--spacing(28)] [&_button]:cursor-pointer"
                formatters={{
                  formatWeekdayName: (date) => {
                    return date.toLocaleString("fr-FR", { weekday: "short" });
                  },
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Sélection d'heure - 1/2 de l'espace sur desktop */}
        <Card className="overflow-hidden bg-slate-800 text-white border border-slate-700 w-full">
          <CardContent className="p-4 md:p-5 bg-slate-800">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-blue-400" />
              <h3 className="font-extrabold text-white text-lg">
                Choisir une heure
              </h3>
            </div>
            <div className="max-h-80 overflow-y-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    onClick={() => setSelectedTime(time)}
                    className={`w-full h-11 text-sm font-medium transition-all duration-200 cursor-pointer ${
                      selectedTime === time
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                        : "bg-slate-700 hover:bg-slate-600 text-white border-slate-600"
                    }`}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Résumé de la sélection */}
      {date && selectedTime && (
        <Card className="bg-slate-800 text-white border border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                <CalendarIcon className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="font-extrabold text-white mb-1">
                  Consultation sélectionnée
                </h4>
                <p className="text-white/90">
                  <span className="font-bold">
                    {date.toLocaleDateString("fr-FR", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>{" "}
                  à <span className="font-bold">{selectedTime}</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Bouton continuer */}
      <div className="flex justify-center">
        <Button
          disabled={!date || !selectedTime}
          onClick={handleContinue}
          className="h-12 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          size="lg"
        >
          Continuer vers le formulaire
        </Button>
      </div>
    </div>
  );
}
