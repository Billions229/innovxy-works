"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface CalendarBookingProps {
  onDateTimeSelect?: (date: Date, time: string) => void
  className?: string
}

export function CalendarBooking({ onDateTimeSelect, className }: CalendarBookingProps) {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 0, 15) // 15 janvier 2025
  )
  const [selectedTime, setSelectedTime] = React.useState<string | null>("10:00")
  
  // Créneaux horaires de 9h à 18h par tranches de 15 minutes
  const timeSlots = Array.from({ length: 37 }, (_, i) => {
    const totalMinutes = i * 15
    const hour = Math.floor(totalMinutes / 60) + 9
    const minute = totalMinutes % 60
    return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
  })

  // Dates déjà réservées (exemple)
  const bookedDates = Array.from(
    { length: 3 },
    (_, i) => new Date(2025, 0, 20 + i)
  )

  const handleContinue = () => {
    if (date && selectedTime && onDateTimeSelect) {
      onDateTimeSelect(date, selectedTime)
    }
  }

  return (
    <Card className={`gap-0 p-0 ${className}`}>
      <CardContent className="relative p-0 md:pr-48">
        <div className="p-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
            disabled={bookedDates}
            showOutsideDays={false}
            modifiers={{
              booked: bookedDates,
            }}
            modifiersClassNames={{
              booked: "[&>button]:line-through opacity-100",
            }}
            className="bg-transparent p-0 [--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
            formatters={{
              formatWeekdayName: (date) => {
                return date.toLocaleString("fr-FR", { weekday: "short" })
              },
            }}
          />
        </div>
        <div className="no-scrollbar inset-y-0 right-0 flex max-h-72 w-full scroll-pb-6 flex-col gap-4 overflow-y-auto border-t p-6 md:absolute md:max-h-none md:w-48 md:border-t-0 md:border-l">
          <div className="grid gap-2">
            {timeSlots.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                onClick={() => setSelectedTime(time)}
                className="w-full shadow-none"
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 border-t px-6 !py-5 md:flex-row">
        <div className="text-sm">
          {date && selectedTime ? (
            <>
              Votre consultation est prévue le{" "}
              <span className="font-medium">
                {" "}
                {date?.toLocaleDateString("fr-FR", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}{" "}
              </span>
              à <span className="font-medium">{selectedTime}</span>.
            </>
          ) : (
            <>Sélectionnez une date et une heure pour votre consultation.</>
          )}
        </div>
        <Button
          disabled={!date || !selectedTime}
          className="w-full md:ml-auto md:w-auto"
          variant="outline"
          onClick={handleContinue}
        >
          Continuer
        </Button>
      </CardFooter>
    </Card>
  )
}
