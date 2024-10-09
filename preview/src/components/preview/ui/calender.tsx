import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const CalenderPreview = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="flex flex-col gap-2 rounded border p-4">
      <h2>Calender</h2>
      <Calendar selected={date} onSelect={setDate} />
    </div>
  );
};
export default CalenderPreview;
