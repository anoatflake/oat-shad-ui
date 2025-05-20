import { Button } from "@/components/ui-brutal/button";
import { toast } from "sonner";

const SonnerPreview = () => {
  return (
    <div className="flex flex-col gap-2 rounded-lg border p-4">
      <h2>Sonner</h2>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
              duration: Infinity,
            })
          }
        >
          Show Toast
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.success("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Show Success
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.info("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Show Info
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.warning("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Show Warning
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.error("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
              duration: Infinity,
            })
          }
        >
          Show Error
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.loading("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Show Loading
        </Button>
      </div>
    </div>
  );
};
export default SonnerPreview;
