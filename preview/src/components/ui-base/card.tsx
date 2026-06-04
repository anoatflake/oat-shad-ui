import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "relative rounded-md border-2 border-black bg-card text-card-foreground shadow-[7px_7px_rgb(0,0,0,1)] dark:border-[rgb(50,50,50,1)] dark:shadow-[7px_7px_rgb(50,50,50,1)]",
  {
    variants: {
      hue: {
        none: "bg-card",
        white: "bg-white dark:bg-black",
        lightblue: "bg-blue_chill-300 dark:bg-blue_chill-700",
        blue: "bg-blue_chill-500 dark:bg-blue_chill-900",
        aqua: "bg-aqua_green-600 dark:bg-aqua_green-900",
        greenish: "bg-evergreen-300 dark:bg-evergreen-700",
        pollen: "bg-gold-300",
        yellow: "bg-gold-500",
        apricot: "bg-apricot-400",
        orange: "bg-apricot-500",
        rust: "bg-rust-500",
        blush: "bg-cotton_candy-300",
        pink: "bg-cotton_candy-400",
        periwinkle: "bg-periwinkle-400",
      },
    },
    defaultVariants: {
      hue: "none",
    },
  }
)

function Card({
  className,
  hue,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ hue }), className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="card-title"
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("p-6 pt-0", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
export type CardHue = NonNullable<VariantProps<typeof cardVariants>["hue"]>
