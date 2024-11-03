import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-black bg-white text-black shadow-[3px_3px_rgb(0,0,0,1)] hover:shadow-[5px_5px_rgb(0,0,0,1)] transition-shadow ", //dark:bg-black dark:text-white dark:border-[rgb(50,50,50,1)] dark:shadow-[3px_3px_rgb(50,50,50,1)] dark:hover:shadow-[5px_5px_rgb(50,50,50,1)]",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-[3px_3px_rgb(0,0,0,1)] hover:shadow-[5px_5px_rgb(0,0,0,1)] ",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border-foreground",
      },
      hue: {
        none: "",
        lightblue: "bg-blue_chill-300",
        blue: "bg-blue_chill-500",
        aqua: "bg-aqua_green-600",
        greenish: "bg-evergreen-300",
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
      variant: "default",
      hue: "none",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, hue, ...props }: BadgeProps) {
  if (hue == null) {
    hue = determineHue(props.children!.toString());
  }
  return (
    <div
      className={cn(badgeVariants({ variant, hue }), className)}
      {...props}
    />
  );
}

type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>["variant"]>;
type BadgeHue = NonNullable<VariantProps<typeof badgeVariants>["hue"]>;

function determineHue(text: string): BadgeHue {
  const hash = generateHash(text);
  switch (hash % 13) {
    case 0:
      return "blue";
    case 1:
      return "aqua";
    case 2:
      return "apricot";
    case 3:
      return "yellow";
    case 4:
      return "pollen";
    case 5:
      return "periwinkle";
    case 6:
      return "greenish";
    case 7:
      return "orange";
    case 8:
      return "pink";
    case 9:
      return "rust";
    case 10:
      return "blush";
    case 11:
      return "lightblue";
    case 12:
      return "none";
    default:
      return "none";
  }
}

function generateHash(input: string): number {
  let hash = 5381;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 33) ^ input.charCodeAt(i);
  }
  return hash >>> 0;
}

export { Badge, badgeVariants, determineHue };
export type { BadgeVariant, BadgeHue };
