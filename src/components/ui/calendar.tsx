"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  components: userComponents,
  ...props
}: CalendarProps) {
  const defaultClassNames = {
      months: "flex flex-col sm:flex-row gap-4",
      month: "space-y-4",
      caption: "flex justify-center pt-1 relative items-center",
      caption_label: "text-sm font-medium text-white",
      nav: "flex items-center",
      nav_button: "h-7 w-7 bg-slate-800 text-white p-0 opacity-80 hover:opacity-100 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
      table: "w-full border-collapse space-y-1",
      head_row: "flex",
      head_cell: "text-slate-400 rounded-md w-9 font-normal text-[0.8rem]",
      row: "flex w-full mt-2",
      cell: "h-9 w-9 text-center text-sm p-0 relative first:rounded-l-md last:rounded-r-md focus-within:relative focus-within:z-20",
  day: "relative flex size-9 items-center justify-center whitespace-nowrap rounded-lg p-0 text-white outline-offset-2 focus:outline-none focus-visible:z-10 hover:bg-blue-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 group-data-[disabled]:pointer-events-none group-data-[disabled]:text-slate-500 group-data-[disabled]:line-through group-data-[outside]:text-slate-500",
  day_selected: "bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700 focus:text-white border-2 border-blue-400",
  day_today: "bg-cyan-700 text-white border-2 border-cyan-400",
  day_outside: "text-slate-500 opacity-50",
  day_disabled: "text-slate-500 opacity-50",
  day_range_middle: "bg-blue-900 text-white",
      day_hidden: "invisible",
  };

  const mergedClassNames: typeof defaultClassNames = Object.keys(defaultClassNames).reduce(
    (acc, key) => ({
      ...acc,
      [key]: classNames?.[key as keyof typeof classNames]
        ? cn(
            defaultClassNames[key as keyof typeof defaultClassNames],
            classNames[key as keyof typeof classNames],
          )
        : defaultClassNames[key as keyof typeof defaultClassNames],
    }),
    {} as typeof defaultClassNames,
  );

  const defaultComponents = {
    Chevron: (props: { orientation?: string; [key: string]: unknown }) => {
      if (props.orientation === "left") {
        return <ChevronLeft size={16} strokeWidth={2} {...props} aria-hidden="true" />;
      }
      return <ChevronRight size={16} strokeWidth={2} {...props} aria-hidden="true" />;
    },
  };

  const mergedComponents = {
    ...defaultComponents,
    ...userComponents,
  };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("w-fit", className)}
      classNames={mergedClassNames}
      components={mergedComponents}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
