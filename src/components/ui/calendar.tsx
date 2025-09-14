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
    months: "relative flex flex-col sm:flex-row gap-4",
    month: "w-full",
    month_caption: "relative mx-10 mb-1 flex h-9 items-center justify-center z-20",
    caption_label: "text-sm font-bold text-white",
    nav: "absolute top-0 flex w-full justify-between z-10",
    button_previous: cn(
      buttonVariants({ variant: "ghost" }),
      "size-9 text-white/80 hover:text-white p-0"
    ),
    button_next: cn(
      buttonVariants({ variant: "ghost" }),
      "size-9 text-white/80 hover:text-white p-0"
    ),
    weekday: "size-9 p-0 text-xs font-bold text-blue-300",
    day_button:
      "relative flex size-9 items-center justify-center whitespace-nowrap rounded-lg p-0 text-white outline-offset-2 group-[[data-selected]:not(.range-middle)]:[transition-property:color,background-color,border-radius,box-shadow] group-[[data-selected]:not(.range-middle)]:duration-150 focus:outline-none group-data-[disabled]:pointer-events-none focus-visible:z-10 hover:bg-blue-700 group-data-[selected]:bg-blue-600 hover:text-white group-data-[selected]:text-white group-data-[disabled]:text-slate-500 group-data-[disabled]:line-through group-data-[outside]:text-slate-500 group-data-[outside]:group-data-[selected]:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 group-[.range-start:not(.range-end)]:rounded-e-none group-[.range-end:not(.range-start)]:rounded-s-none group-[.range-middle]:rounded-none group-data-[selected]:group-[.range-middle]:bg-blue-900 group-data-[selected]:group-[.range-middle]:text-white",
    day: "group size-9 px-0 text-sm",
    range_start: "range-start",
    range_end: "range-end",
    range_middle: "range-middle",
    today:
      "*:after:pointer-events-none *:after:absolute *:after:bottom-1 *:after:start-1/2 *:after:z-10 *:after:size-[3px] *:after:-translate-x-1/2 *:after:rounded-full *:after:bg-cyan-400 [&[data-selected]:not(.range-middle)>*]:after:bg-background [&[data-disabled]>*]:after:bg-slate-500 *:after:transition-colors",
    outside: "text-slate-500 data-selected:bg-blue-900/50 data-selected:text-white",
    hidden: "invisible",
    week_number: "size-9 p-0 text-xs font-medium text-slate-400",
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
    Chevron: (props: { orientation?: "left" | "right" | "up" | "down"; [key: string]: unknown }) => {
      if (props.orientation === "left") {
        return <ChevronLeft size={16} strokeWidth={2} {...props} aria-hidden="true" />;
      }
      if (props.orientation === "right") {
        return <ChevronRight size={16} strokeWidth={2} {...props} aria-hidden="true" />;
      }
      // fallback for up/down: use right chevron rotated
      return <ChevronRight size={16} strokeWidth={2} style={{ transform: props.orientation === "up" ? "rotate(-90deg)" : props.orientation === "down" ? "rotate(90deg)" : undefined }} {...props} aria-hidden="true" />;
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
