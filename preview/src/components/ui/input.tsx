import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex h-10 w-full rounded-md border-2 border-outline bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      hue: {
        none: "bg-transparent",
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
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, hue, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ hue }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
