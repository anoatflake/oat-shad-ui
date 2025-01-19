import { cva, VariantProps } from "class-variance-authority";

const hueVariants = cva("", {
  variants: {
    hue: {
      none: "bg-transparent",
      background: "bg-background",
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
});

const hueChildVariants = cva("", {
  variants: {
    hue: {
      none: "*:bg-transparent",
      background: "*:bg-background",
      white: "*:bg-white dark:bg-black",
      lightblue: "*:bg-blue_chill-300 *:dark:bg-blue_chill-700",
      blue: "*:bg-blue_chill-500 *:dark:bg-blue_chill-900",
      aqua: "*:bg-aqua_green-600 *:dark:bg-aqua_green-900",
      greenish: "*:bg-evergreen-300 *:dark:bg-evergreen-700",
      pollen: "*:bg-gold-300",
      yellow: "*:bg-gold-500",
      apricot: "*:bg-apricot-400",
      orange: "*:bg-apricot-500",
      rust: "*:bg-rust-500",
      blush: "*:bg-cotton_candy-300",
      pink: "*:bg-cotton_candy-400",
      periwinkle: "*:bg-periwinkle-400",
    },
  },
  defaultVariants: {
    hue: "none",
  },
});

type Hue = NonNullable<VariantProps<typeof hueVariants>["hue"]>;

export { hueVariants, hueChildVariants };
export type { Hue };
