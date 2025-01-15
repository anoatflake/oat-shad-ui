import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TooltipPreview = () => {
  return (
    <div className="mb-8 flex flex-col gap-2 rounded-lg border p-4">
      <h2>Tooltip</h2>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary" className="max-w-min">
                Hover (side left)
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Add to library</p>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary" className="max-w-min">
                Hover (side top)
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary" className="max-w-min">
                Hover (side bottom)
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Add to library</p>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary" className="max-w-min">
                Hover (side right)
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};
export default TooltipPreview;
