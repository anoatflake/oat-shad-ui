import { cva, type VariantProps } from "class-variance-authority";

const hueVariants = cva("", {
  variants: {
    hue: {
      none: "bg-transparent",
      background: "bg-background",
      white: "bg-brutal-surface",
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
});

const hueChildVariants = cva("", {
  variants: {
    hue: {
      none: "*:bg-transparent",
      background: "*:bg-background",
      white: "*:bg-brutal-surface",
      lightblue: "*:bg-blue_chill-300 *:dark:bg-blue_chill-700",
      blue: "*:bg-blue_chill-500 *:dark:bg-blue_chill-900",
      aqua: "*:bg-aqua_green-600 *:dark:bg-aqua_green-900",
      greenish: "*:bg-evergreen-300 *:dark:bg-evergreen-700",
      pollen: "*:bg-gold-300 *:dark:bg-gold-700",
      yellow: "*:bg-gold-500 *:dark:bg-gold-800",
      apricot: "*:bg-apricot-400 *:dark:bg-apricot-700",
      orange: "*:bg-apricot-500 *:dark:bg-apricot-800",
      rust: "*:bg-rust-500 *:dark:bg-rust-800",
      blush: "*:bg-cotton_candy-300 *:dark:bg-cotton_candy-700",
      pink: "*:bg-cotton_candy-400 *:dark:bg-cotton_candy-800",
      periwinkle: "*:bg-periwinkle-400 *:dark:bg-periwinkle-800",
    },
  },
  defaultVariants: {
    hue: "none",
  },
});

type Hue = NonNullable<VariantProps<typeof hueVariants>["hue"]>;

export { hueVariants, hueChildVariants };
export type { Hue };
