import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "border-black bg-white text-black shadow-[3px_3px_rgb(0,0,0,1)] transition-shadow hover:shadow-[5px_5px_rgb(0,0,0,1)]",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground shadow-[3px_3px_rgb(0,0,0,1)] transition-shadow hover:shadow-[5px_5px_rgb(0,0,0,1)] [a]:hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border-2 border-dashed border-foreground text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
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
  }
)

function Badge({
  className,
  variant = "default",
  hue,
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  const resolvedHue =
    hue ?? determineHue(typeof props.children === "string" ? props.children : "")

  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant, hue: resolvedHue }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
      hue: resolvedHue,
    },
  })
}

type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>["variant"]>
type BadgeHue = NonNullable<VariantProps<typeof badgeVariants>["hue"]>

function determineHue(text: string): BadgeHue {
  const allHues: BadgeHue[] = [
    "none",
    "lightblue",
    "blue",
    "aqua",
    "greenish",
    "pollen",
    "yellow",
    "apricot",
    "orange",
    "rust",
    "blush",
    "pink",
    "periwinkle",
  ]

  const hash = generateHash(text)
  return allHues[hash % allHues.length]
}

function generateHash(input: string): number {
  let hash = 5381
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 33) ^ input.charCodeAt(i)
  }
  return hash >>> 0
}

export { Badge, badgeVariants, determineHue }
export type { BadgeVariant, BadgeHue }
