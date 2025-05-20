import { Toggle } from "@/components/ui-smooth/toggle";
import { Bold, Italic } from "lucide-react";

const TogglePreview = () => {
  return (
    <div className="flex flex-col gap-2 rounded-lg border p-4">
      <h2>Toggle</h2>

      <div className="flex justify-center gap-4">
        <Toggle aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle aria-label="Toggle italic">
          <Italic className="mr-2 h-4 w-4" />
          Italic
        </Toggle>
        <span>
          <Toggle size="sm" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle size="default" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle size="lg" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
        </span>
      </div>
    </div>
  );
};
export default TogglePreview;
