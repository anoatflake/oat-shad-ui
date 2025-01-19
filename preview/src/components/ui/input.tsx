import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { hueVariants } from "@/lib/hue-variants";

const inputVariants = cva(
  "flex h-10 w-full rounded-md border-2 border-outline bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants>,
    VariantProps<typeof hueVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, hue, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants(), hueVariants({ hue }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
