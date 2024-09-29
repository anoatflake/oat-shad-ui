import { Calendar } from "@/components/ui/calendar";

const CalenderPreview = () => {
  return (
    <div className="flex flex-col gap-2 rounded border p-4">
      <h2>Calender</h2>
      <Calendar />
    </div>
  );
};
export default CalenderPreview;
