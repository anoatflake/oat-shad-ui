import { Checkbox } from "@/components/ui/checkbox";

const CheckboxPreview = () => {
  return (
    <div className="flex flex-col gap-2 rounded-lg border p-4">
      <h2>Checkbox</h2>
      <div className="flex justify-center gap-4">
        <span>
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </span>
      </div>
    </div>
  );
};
export default CheckboxPreview;
