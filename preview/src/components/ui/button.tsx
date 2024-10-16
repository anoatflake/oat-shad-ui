import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-bold",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-black shadow-[5px_5px_rgb(0,0,0,1)] hover:shadow-[3px_3px_rgb(0,0,0,1)] border-2 border-black dark:border-[rgb(50,50,50,1)] dark:bg-black dark:text-white dark:shadow-[5px_5px_rgb(50,50,50,1)] dark:hover:shadow-[3px_3px_rgb(50,50,50,1)] transition-shadow",
        secondary:
          "text-secondary-foreground hover:bg-secondary/80 shadow-[3px_3px_rgb(0,0,0,1)] hover:shadow-[5px_5px_rgb(0,0,0,1)] border-2 border-black transition-shadow",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary bg-transparent hover:bg-accent",
        ghost:
          "border-2 border-background hover:border-[rgb(100,100,100,0.5)] hover:shadow-[3px_3px_rgb(100,100,100,0.5)]",
        link: "underline-offset-4 hover:underline decoration-dashed decoration-2 transition-shadow",
      },
      hue: {
        none: "",
        teal: "bg-teal_background-200 hover:bg-teal_background-300 border-teal_background-800 text-teal_background-800 decoration-teal_background-800",
        blue: "bg-skin-400 hover:bg-skin-500 border-skin-700 text-skin-700 decoration-skin-700",
        pink: "bg-eva_danger-500 hover:bg-eva_danger-600 border-eva_danger-800 text-eva_danger-800 decoration-eva_danger-700",
        red: "bg-blood_shot_eyes-400 hover:bg-blood_shot_eyes-500 border-blood_shot_eyes-800 text-blood_shot_eyes-800 decoration-blood_shot_eyes-600",
        yellow:
          "bg-gold-400 hover:bg-gold-500 border-gold-900 text-gold-900 decoration-gold-700",
        // aqua: "bg-aqua_green-400 hover:bg-aqua_green-500",
        // evergreen: "bg-evergreen-400 hover:bg-evergreen-500",
        // apricot: "bg-apricot-400 hover:bg-apricot-500",
        // rust: "bg-rust-400 hover:bg-rust-500",
        // periwinkle: "bg-periwinkle-400 hover:bg-periwinkle-500",
        // cornflower: "bg-cornflower-400 hover:bg-cornflower-500",
        // charcoal: "bg-charcoal-400 hover:bg-charcoal-500",
        // outer_space: "bg-outer_space-400 hover:bg-outer_space-500",
        // slate: "bg-slate-400 hover:bg-slate-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 rounded-md px-3",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
        className:
          "text-primary border-primary dark:border-[rgb(50,50,50,1)] bg-transparent",
      },
      {
        variant: "destructive",
        hue: ["none", "teal", "blue", "pink", "red", "yellow"],
        className: "",
      },
      {
        variant: "outline",
        hue: ["none", "teal", "blue", "pink", "red", "yellow"],
        className: "border-2 bg-transparent",
      },
      {
        variant: "ghost",
        hue: ["none", "teal", "blue", "pink", "red", "yellow"],
        className:
          "text-primary border-background bg-background hover:bg-background",
      },
      {
        variant: "link",
        hue: ["none", "teal", "blue", "pink", "red", "yellow"],
        className: "text-primary bg-background hover:bg-background",
      },
    ],
    defaultVariants: {
      variant: "secondary",
      hue: "none",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, hue, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, hue, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

type ButtonVariant = NonNullable<
  VariantProps<typeof buttonVariants>["variant"]
>;
type ButtonHue = NonNullable<VariantProps<typeof buttonVariants>["hue"]>;
type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>["size"]>;

export { Button, buttonVariants };
export type { ButtonVariant, ButtonHue, ButtonSize };
