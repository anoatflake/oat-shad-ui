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
  const [dateRange2, setDateRange2] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: new Date(2022, 0, 20),
  });

  return (
    <div className="flex flex-col gap-2 rounded-lg border p-4">
      <h2>Calender</h2>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <Calendar mode="single" selected={date} onSelect={setDate} />
        <Calendar
          mode="multiple"
          selected={multiDate}
          onSelect={setMultiDate}
        />
        <Calendar mode="range" selected={dateRange} onSelect={setDateRange} />
        <Calendar
          mode="range"
          defaultMonth={dateRange2?.from}
          selected={dateRange2}
          onSelect={setDateRange2}
          numberOfMonths={2}
        />
      </div>
    </div>
  );
};
export default CalenderPreview;
