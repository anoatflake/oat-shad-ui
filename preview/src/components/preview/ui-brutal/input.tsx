import { Input } from "@/components/ui-brutal/input";
import { Label } from "@/components/ui-brutal/label";

const InputPreview = () => {
  return (
    <div className="flex flex-col gap-2 rounded-lg border p-4">
      <h2>Input</h2>
      <div className="flex justify-center gap-4">
        <span>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </span>
      </div>
    </div>
  );
};
export default InputPreview;
