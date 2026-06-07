import * as React from "react"
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delay = 0,
  ...props
}: TooltipPrimitive.Provider.Props) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delay={delay}
      {...props}
    />
  )
}

function Tooltip({ ...props }: TooltipPrimitive.Root.Props) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipTrigger({
  asChild,
  children,
  ...props
}: TooltipPrimitive.Trigger.Props & { asChild?: boolean }) {
  return (
    <TooltipPrimitive.Trigger
      data-slot="tooltip-trigger"
      render={asChild && React.isValidElement(children) ? children : undefined}
      {...props}
    >
      {asChild ? undefined : children}
    </TooltipPrimitive.Trigger>
  )
}

function TooltipContent({
  className,
  side = "right",
  sideOffset = 16,
  align = "center",
  alignOffset = 0,
  children,
  ...props
}: TooltipPrimitive.Popup.Props &
  Pick<
    TooltipPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  const arrow =
    side === "left" ? (
      <span
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2"
      >
        <span className="absolute top-1/2 left-0 h-0 w-0 -translate-y-1/2 border-y-[8px] border-l-[8px] border-y-transparent border-l-outline" />
        <span className="absolute top-1/2 left-0 h-0 w-0 -translate-x-[2px] -translate-y-1/2 border-y-[6px] border-l-[6px] border-y-transparent border-l-popover" />
      </span>
    ) : side === "top" ? (
      <span
        aria-hidden
        className="pointer-events-none absolute right-1/2 bottom-0 translate-x-1/2"
      >
        <span className="absolute top-0 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[8px] border-t-[8px] border-x-transparent border-t-outline" />
        <span className="absolute top-0 left-1/2 h-0 w-0 -translate-x-1/2 -translate-y-[2px] border-x-[6px] border-t-[6px] border-x-transparent border-t-popover" />
      </span>
    ) : side === "bottom" ? (
      <span
        aria-hidden
        className="pointer-events-none absolute right-1/2 top-0 translate-x-1/2"
      >
        <span className="absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[8px] border-b-[8px] border-x-transparent border-b-outline" />
        <span className="absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2 translate-y-[2px] border-x-[6px] border-b-[6px] border-x-transparent border-b-popover" />
      </span>
    ) : (
      <span
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2"
      >
        <span className="absolute top-1/2 right-0 h-0 w-0 -translate-y-1/2 border-y-[8px] border-r-[8px] border-y-transparent border-r-outline" />
        <span className="absolute top-1/2 right-0 h-0 w-0 translate-x-[2px] -translate-y-1/2 border-y-[6px] border-r-[6px] border-y-transparent border-r-popover" />
      </span>
    )

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          className={cn(
            "relative z-50 inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 overflow-visible rounded-sm border-2 border-outline bg-popover px-3 py-1 text-sm font-semibold text-popover-foreground shadow-[2px_2px_hsl(var(--outline))] has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            className
          )}
          {...props}
        >
          {children}
          {arrow}
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
