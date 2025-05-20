import { Button } from "@/components/ui-brutal/button";
import { ToastAction } from "@/components/ui-brutal/toast";
import { useToast } from "@/hooks/use-toast";

const ToastPreview = () => {
  const { toast } = useToast();

  return (
    <div className="flex flex-col gap-2 rounded-lg border p-4">
      <h2>Toast</h2>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "Scheduled: Catch up ",
              description: "Friday, February 10, 2023 at 5:57 PM",
              action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              ),
            });
          }}
        >
          default variant
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              variant: "destructive",
              title: "Scheduled: Catch up ",
              description: "Friday, February 10, 2023 at 5:57 PM",
              action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              ),
            });
          }}
        >
          destructive variant
        </Button>
      </div>
    </div>
  );
};
export default ToastPreview;
