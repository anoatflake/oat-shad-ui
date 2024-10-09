import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        month_caption:
          "flex justify-center pt-1 relative items-center text-sm font-medium",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        button_previous: cn(
          buttonVariants({ variant: "outline", size: "xs" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 rounded-full",
        ),
        button_next: cn(
          buttonVariants({ variant: "outline", size: "xs" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 rounded-full",
        ),
        month_grid: "w-full border-collapse space-y-1",
        weekdays: "flex",
        weekday:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] mx-0.5",
        week: "flex w-full mt-1",
        day: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 mx-0.5",
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100",
        ),
        range_end: "day-range-end",
        selected: cn(
          buttonVariants({ variant: "primary", hue: "none" }),
          "h-8 w-8 p-0 hover:opacity-100 rounded-full ",
        ),
        today: "bg-accent text-accent-foreground",
        outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        disabled: "text-muted-foreground opacity-50",
        range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        hidden: "invisible",
        ...classNames,
      }}
      // components={
      //   {
      //     IconLeft: ({ ...props }) => (
      //       <ArrowLeft strokeWidth={3} className="h-4 w-4" />
      //     ),
      //     IconRight: ({ ...props }) => (
      //       <ArrowRight strokeWidth={3} className="h-4 w-4" />
      //     ),
      //   }
      // }
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
