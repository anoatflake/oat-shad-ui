import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { DateRange } from "react-day-picker";

const CalenderPreview = () => {
  const [singleDate, setSingleDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([
    new Date(),
    new Date("10-01-2024"),
  ]);
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date("10-01-2024"),
    to: new Date(),
  });

  return (
    <div className="flex flex-col gap-2 rounded-lg border p-4">
      <h2>Calender</h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-4 md:flex-row">
        <Calendar
          mode="single"
          selected={singleDate}
          onSelect={setSingleDate}
        />
        <Calendar
          mode="multiple"
          selected={multipleDates}
          onSelect={setMultipleDates}
        />
        <Calendar mode="range" selected={dateRange} onSelect={setDateRange} />
      </div>
    </div>
  );
};
export default CalenderPreview;
