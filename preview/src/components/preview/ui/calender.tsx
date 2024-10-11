import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { DateRange } from "react-day-picker";

const CalenderPreview = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multiDate, setMultiDate] = useState<Date[] | undefined>([
    new Date(),
    new Date("10-08-2024"),
  ]);
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date("10-01-2024"),
    to: new Date(),
  });
  return (
    <div className="flex flex-col gap-2 rounded border p-4">
      <h2>Calender</h2>
      <div className="flex flex-row gap-4">
        <Calendar mode="single" selected={date} onSelect={setDate} />
        <Calendar
          mode="multiple"
          selected={multiDate}
          onSelect={setMultiDate}
        />
        <Calendar mode="range" selected={dateRange} onSelect={setDateRange} />
      </div>
    </div>
  );
};
export default CalenderPreview;
