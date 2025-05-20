import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(
  (
    {
      className,
      sideOffset = 16,
      side = "right",
      avoidCollisions = false,
      ...props
    },
    ref,
  ) => (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      side={side}
      className={cn(
        "z-50 overflow-hidden rounded-sm border-2 border-outline bg-popover px-3 py-1 text-sm font-semibold text-popover-foreground shadow-[2px_2px_rgb(0,0,0,1)]",
        className,
      )}
      {...props}
    >
      {side === "left" ? (
        <div
          className={cn(
            "absolute -right-1 top-1/2 h-4 w-4 -translate-y-1/2 translate-x-[0.2rem] rotate-[315deg] transform rounded-br-sm border-b-2 border-r-2 border-outline bg-popover shadow-[2px_2px_rgb(0,0,0,1)]",
            className,
          )}
        />
      ) : null}
      {side === "top" ? (
        <div
          className={cn(
            "absolute -bottom-4 right-1/2 h-4 w-4 -translate-y-[0.55rem] translate-x-[0.5rem] rotate-[45deg] transform rounded-br-sm border-b-2 border-r-2 border-outline bg-popover shadow-[2px_2px_rgb(0,0,0,1)]",
            className,
          )}
        />
      ) : null}
      {side === "bottom" ? (
        <div
          className={cn(
            "absolute right-1/2 top-1 h-4 w-4 -translate-y-[0.7rem] translate-x-[0.5rem] rotate-[225deg] transform rounded-br-sm border-b-2 border-r-2 border-outline bg-popover",
            className,
          )}
        />
      ) : null}
      {side === "right" ? (
        <div
          className={cn(
            "absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 translate-x-[0.05rem] rotate-[315deg] transform rounded-tl-sm border-l-2 border-t-2 border-outline bg-popover",
            className,
          )}
        />
      ) : null}
      <div {...props} />
    </TooltipPrimitive.Content>
  ),
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
