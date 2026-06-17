"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { XIcon } from "lucide-react"

const surfaceVariants = cva(
  "border-2 border-outline shadow-[5px_5px_hsl(var(--outline))]",
  {
    variants: {
      hue: {
        none: "bg-background",
        white: "bg-brutal-surface text-brutal-surface-foreground",
        lightblue: "bg-blue_chill-300 dark:bg-blue_chill-700",
        blue: "bg-blue_chill-500 dark:bg-blue_chill-900",
        aqua: "bg-aqua_green-600 dark:bg-aqua_green-900",
        greenish: "bg-evergreen-300 dark:bg-evergreen-700",
        pollen: "bg-gold-300 dark:bg-gold-700",
        yellow: "bg-gold-500 dark:bg-gold-800",
        apricot: "bg-apricot-400 dark:bg-apricot-700",
        orange: "bg-apricot-500 dark:bg-apricot-800",
        rust: "bg-rust-500 dark:bg-rust-800",
        blush: "bg-cotton_candy-300 dark:bg-cotton_candy-700",
        pink: "bg-cotton_candy-400 dark:bg-cotton_candy-800",
        periwinkle: "bg-periwinkle-400 dark:bg-periwinkle-800",
      },
    },
    defaultVariants: {
      hue: "none",
    },
  }
)

function Sheet({ ...props }: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  asChild,
  children,
  ...props
}: SheetPrimitive.Trigger.Props & { asChild?: boolean }) {
  return (
    <SheetPrimitive.Trigger
      data-slot="sheet-trigger"
      render={asChild && React.isValidElement(children) ? children : undefined}
      {...props}
    >
      {asChild ? undefined : children}
    </SheetPrimitive.Trigger>
  )
}

function SheetClose({
  asChild,
  children,
  ...props
}: SheetPrimitive.Close.Props & { asChild?: boolean }) {
  return (
    <SheetPrimitive.Close
      data-slot="sheet-close"
      render={asChild && React.isValidElement(children) ? children : undefined}
      {...props}
    >
      {asChild ? undefined : children}
    </SheetPrimitive.Close>
  )
}

function SheetPortal({ ...props }: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({ className, ...props }: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 isolate z-50 bg-foreground/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  hue,
  side = "right",
  showCloseButton = true,
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
} & VariantProps<typeof surfaceVariants>) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-50 m-4 gap-4 rounded-md p-6 text-foreground transition ease-in-out data-open:animate-in data-closed:animate-out data-closed:duration-300 data-open:duration-500 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-closed:data-[side=bottom]:slide-out-to-bottom data-open:data-[side=bottom]:slide-in-from-bottom data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-closed:data-[side=left]:slide-out-to-left data-open:data-[side=left]:slide-in-from-left data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:min-h-max data-[side=right]:w-3/4 data-closed:data-[side=right]:slide-out-to-right data-open:data-[side=right]:slide-in-from-right data-[side=top]:inset-x-0 data-[side=top]:top-0 data-closed:data-[side=top]:slide-out-to-top data-open:data-[side=top]:slide-in-from-top data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm",
          surfaceVariants({ hue }),
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            className="ring-offset-background focus:ring-ring data-open:bg-secondary absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
          >
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Popup>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
export type SheetHue = NonNullable<VariantProps<typeof surfaceVariants>["hue"]>
