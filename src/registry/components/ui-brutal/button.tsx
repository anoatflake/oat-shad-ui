import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 font-bold",
  {
    variants: {
      variant: {
        primary:
          "border-2 border-outline bg-brutal-surface text-brutal-surface-foreground shadow-[5px_5px_oklch(var(--outline))] transition-shadow hover:shadow-[3px_3px_oklch(var(--outline))]",
        secondary:
          "border-2 border-outline text-secondary-foreground shadow-[3px_3px_oklch(var(--outline))] transition-shadow hover:bg-secondary/80 hover:shadow-[5px_5px_oklch(var(--outline))]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-primary hover:border-dashed bg-transparent hover:bg-accent transition-all",
        ghost:
          "border-2 border-transparent hover:border-outline/50 hover:shadow-[3px_3px_oklch(var(--outline))]",
        link: "underline-offset-4 hover:underline focus-visible:underline decoration-dashed decoration-2 transition-shadow",
      },
      hue: {
        none: "",
        teal: "bg-teal_background-200 hover:bg-teal_background-300 border-teal_background-800 text-teal_background-800 decoration-teal_background-800 dark:bg-teal_background-800 dark:hover:bg-teal_background-700 dark:border-teal_background-200 dark:text-teal_background-100 dark:decoration-teal_background-100",
        blue: "bg-skin-400 hover:bg-skin-500 border-skin-700 text-skin-700 decoration-skin-700 dark:bg-skin-800 dark:hover:bg-skin-700 dark:border-skin-200 dark:text-skin-100 dark:decoration-skin-100",
        pink: "bg-eva_danger-500 hover:bg-eva_danger-600 border-eva_danger-800 text-eva_danger-800 decoration-eva_danger-700 dark:bg-eva_danger-800 dark:hover:bg-eva_danger-700 dark:border-eva_danger-200 dark:text-eva_danger-100 dark:decoration-eva_danger-100",
        red: "bg-blood_shot_eyes-400 hover:bg-blood_shot_eyes-500 border-blood_shot_eyes-800 text-blood_shot_eyes-800 decoration-blood_shot_eyes-600 dark:bg-blood_shot_eyes-800 dark:hover:bg-blood_shot_eyes-700 dark:border-blood_shot_eyes-200 dark:text-blood_shot_eyes-100 dark:decoration-blood_shot_eyes-100",
        yellow:
          "bg-gold-400 hover:bg-gold-500 border-gold-900 text-gold-900 decoration-gold-700 dark:bg-gold-800 dark:hover:bg-gold-700 dark:border-gold-200 dark:text-gold-100 dark:decoration-gold-100",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 rounded-sm px-3",
        sm: "h-9 rounded-sm px-3",
        lg: "h-11 rounded-sm px-8",
        icon: "h-10 w-10",
        "icon-sm": "size-8",
        "icon-xs": "size-6",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        hue: ["none", "teal", "blue", "pink", "red", "yellow"],
        className: "text-primary border-primary",
      },
      {
        variant: "secondary",
        hue: ["none", "teal", "blue", "pink", "red", "yellow"],
        className: "text-primary border-primary bg-transparent",
      },
      {
        variant: "destructive",
        hue: ["none", "teal", "blue", "pink", "red", "yellow"],
        className: "",
      },
      {
        variant: "outline",
        hue: ["none", "teal", "blue", "pink", "red", "yellow"],
        className: "text-primary bg-transparent hover:bg-transparent",
      },
      {
        variant: "ghost",
        hue: ["none", "teal", "blue", "pink", "red", "yellow"],
        className:
          "text-primary border-transparent bg-transparent hover:bg-transparent focus-visible:-outline-offset-2",
      },
      {
        variant: "link",
        hue: ["none", "teal", "blue", "pink", "red", "yellow"],
        className:
          "text-primary bg-transparent hover:bg-transparent focus-visible:-outline-offset-2",
      },
    ],
    defaultVariants: {
      variant: "secondary",
      hue: "none",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  hue,
  size,
  asChild,
  children,
  ...props
}: ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  return (
    <ButtonPrimitive
      data-slot="button"
      render={asChild && React.isValidElement(children) ? children : undefined}
      className={cn(buttonVariants({ variant, hue, size, className }))}
      {...props}
    >
      {asChild ? undefined : children}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }
export type ButtonVariant = NonNullable<
  VariantProps<typeof buttonVariants>["variant"]
>
export type ButtonHue = NonNullable<VariantProps<typeof buttonVariants>["hue"]>
export type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>["size"]>
