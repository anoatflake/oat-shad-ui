/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "", //TODO:
      },
      backdropBlur: {
        xs: "2px",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        outline: "hsl(var(--outline))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        blood_shot_eyes: {
          50: "hsl(var(--blood_shot_eyes-50))",
          100: "hsl(var(--blood_shot_eyes-100))",
          200: "hsl(var(--blood_shot_eyes-200))",
          300: "hsl(var(--blood_shot_eyes-300))",
          400: "hsl(var(--blood_shot_eyes-400))",
          500: "hsl(var(--blood_shot_eyes-500))",
          600: "hsl(var(--blood_shot_eyes-600))",
          700: "hsl(var(--blood_shot_eyes-700))",
          800: "hsl(var(--blood_shot_eyes-800))",
          900: "hsl(var(--blood_shot_eyes-900))",
          950: "hsl(var(--blood_shot_eyes-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        eva_danger: {
          50: "hsl(var(--eva_danger-50))",
          100: "hsl(var(--eva_danger-100))",
          200: "hsl(var(--eva_danger-200))",
          300: "hsl(var(--eva_danger-300))",
          400: "hsl(var(--eva_danger-400))",
          500: "hsl(var(--eva_danger-500))",
          600: "hsl(var(--eva_danger-600))",
          700: "hsl(var(--eva_danger-700))",
          800: "hsl(var(--eva_danger-800))",
          900: "hsl(var(--eva_danger-900))",
          950: "hsl(var(--eva_danger-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        teal_background: {
          50: "hsl(var(--teal_background-50))",
          100: "hsl(var(--teal_background-100))",
          200: "hsl(var(--teal_background-200))",
          300: "hsl(var(--teal_background-300))",
          400: "hsl(var(--teal_background-400))",
          500: "hsl(var(--teal_background-500))",
          600: "hsl(var(--teal_background-600))",
          700: "hsl(var(--teal_background-700))",
          800: "hsl(var(--teal_background-800))",
          900: "hsl(var(--teal_background-900))",
          950: "hsl(var(--teal_background-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        skin: {
          50: "hsl(var(--skin-50))",
          100: "hsl(var(--skin-100))",
          200: "hsl(var(--skin-200))",
          300: "hsl(var(--skin-300))",
          400: "hsl(var(--skin-400))",
          500: "hsl(var(--skin-500))",
          600: "hsl(var(--skin-600))",
          700: "hsl(var(--skin-700))",
          800: "hsl(var(--skin-800))",
          900: "hsl(var(--skin-900))",
          950: "hsl(var(--skin-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        gold: {
          50: "hsl(var(--gold-50))",
          100: "hsl(var(--gold-100))",
          200: "hsl(var(--gold-200))",
          300: "hsl(var(--gold-300))",
          400: "hsl(var(--gold-400))",
          500: "hsl(var(--gold-500))",
          600: "hsl(var(--gold-600))",
          700: "hsl(var(--gold-700))",
          800: "hsl(var(--gold-800))",
          900: "hsl(var(--gold-900))",
          950: "hsl(var(--gold-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        aqua_green: {
          50: "hsl(var(--aqua_green-50))",
          100: "hsl(var(--aqua_green-100))",
          200: "hsl(var(--aqua_green-200))",
          300: "hsl(var(--aqua_green-300))",
          400: "hsl(var(--aqua_green-400))",
          500: "hsl(var(--aqua_green-500))",
          600: "hsl(var(--aqua_green-600))",
          700: "hsl(var(--aqua_green-700))",
          800: "hsl(var(--aqua_green-800))",
          900: "hsl(var(--aqua_green-900))",
          950: "hsl(var(--aqua_green-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        evergreen: {
          50: "hsl(var(--evergreen-50))",
          100: "hsl(var(--evergreen-100))",
          200: "hsl(var(--evergreen-200))",
          300: "hsl(var(--evergreen-300))",
          400: "hsl(var(--evergreen-400))",
          500: "hsl(var(--evergreen-500))",
          600: "hsl(var(--evergreen-600))",
          700: "hsl(var(--evergreen-700))",
          800: "hsl(var(--evergreen-800))",
          900: "hsl(var(--evergreen-900))",
          950: "hsl(var(--evergreen-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        periwinkle: {
          50: "hsl(var(--periwinkle-50))",
          100: "hsl(var(--periwinkle-100))",
          200: "hsl(var(--periwinkle-200))",
          300: "hsl(var(--periwinkle-300))",
          400: "hsl(var(--periwinkle-400))",
          500: "hsl(var(--periwinkle-500))",
          600: "hsl(var(--periwinkle-600))",
          700: "hsl(var(--periwinkle-700))",
          800: "hsl(var(--periwinkle-800))",
          900: "hsl(var(--periwinkle-900))",
          950: "hsl(var(--periwinkle-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        cornflower: {
          50: "hsl(var(--cornflower-50))",
          100: "hsl(var(--cornflower-100))",
          200: "hsl(var(--cornflower-200))",
          300: "hsl(var(--cornflower-300))",
          400: "hsl(var(--cornflower-400))",
          500: "hsl(var(--cornflower-500))",
          600: "hsl(var(--cornflower-600))",
          700: "hsl(var(--cornflower-700))",
          800: "hsl(var(--cornflower-800))",
          900: "hsl(var(--cornflower-900))",
          950: "hsl(var(--cornflower-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        apricot: {
          50: "hsl(var(--apricot-50))",
          100: "hsl(var(--apricot-100))",
          200: "hsl(var(--apricot-200))",
          300: "hsl(var(--apricot-300))",
          400: "hsl(var(--apricot-400))",
          500: "hsl(var(--apricot-500))",
          600: "hsl(var(--apricot-600))",
          700: "hsl(var(--apricot-700))",
          800: "hsl(var(--apricot-800))",
          900: "hsl(var(--apricot-900))",
          950: "hsl(var(--apricot-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        rust: {
          50: "hsl(var(--rust-50))",
          100: "hsl(var(--rust-100))",
          200: "hsl(var(--rust-200))",
          300: "hsl(var(--rust-300))",
          400: "hsl(var(--rust-400))",
          500: "hsl(var(--rust-500))",
          600: "hsl(var(--rust-600))",
          700: "hsl(var(--rust-700))",
          800: "hsl(var(--rust-800))",
          900: "hsl(var(--rust-900))",
          950: "hsl(var(--rust-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        outer_space: {
          50: "hsl(var(--outer_space-50))",
          100: "hsl(var(--outer_space-100))",
          200: "hsl(var(--outer_space-200))",
          300: "hsl(var(--outer_space-300))",
          400: "hsl(var(--outer_space-400))",
          500: "hsl(var(--outer_space-500))",
          600: "hsl(var(--outer_space-600))",
          700: "hsl(var(--outer_space-700))",
          800: "hsl(var(--outer_space-800))",
          900: "hsl(var(--outer_space-900))",
          950: "hsl(var(--outer_space-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        charcoal: {
          50: "hsl(var(--charcoal-50))",
          100: "hsl(var(--charcoal-100))",
          200: "hsl(var(--charcoal-200))",
          300: "hsl(var(--charcoal-300))",
          400: "hsl(var(--charcoal-400))",
          500: "hsl(var(--charcoal-500))",
          600: "hsl(var(--charcoal-600))",
          700: "hsl(var(--charcoal-700))",
          800: "hsl(var(--charcoal-800))",
          900: "hsl(var(--charcoal-900))",
          950: "hsl(var(--charcoal-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        fall_green: {
          50: "hsl(var(--fall_green-50))",
          100: "hsl(var(--fall_green-100))",
          200: "hsl(var(--fall_green-200))",
          300: "hsl(var(--fall_green-300))",
          400: "hsl(var(--fall_green-400))",
          500: "hsl(var(--fall_green-500))",
          600: "hsl(var(--fall_green-600))",
          700: "hsl(var(--fall_green-700))",
          800: "hsl(var(--fall_green-800))",
          900: "hsl(var(--fall_green-900))",
          950: "hsl(var(--fall_green-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        mustard: {
          50: "hsl(var(--mustard-50))",
          100: "hsl(var(--mustard-100))",
          200: "hsl(var(--mustard-200))",
          300: "hsl(var(--mustard-300))",
          400: "hsl(var(--mustard-400))",
          500: "hsl(var(--mustard-500))",
          600: "hsl(var(--mustard-600))",
          700: "hsl(var(--mustard-700))",
          800: "hsl(var(--mustard-800))",
          900: "hsl(var(--mustard-900))",
          950: "hsl(var(--mustard-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        blue_chill: {
          50: "hsl(var(--blue_chill-50))",
          100: "hsl(var(--blue_chill-100))",
          200: "hsl(var(--blue_chill-200))",
          300: "hsl(var(--blue_chill-300))",
          400: "hsl(var(--blue_chill-400))",
          500: "hsl(var(--blue_chill-500))",
          600: "hsl(var(--blue_chill-600))",
          700: "hsl(var(--blue_chill-700))",
          800: "hsl(var(--blue_chill-800))",
          900: "hsl(var(--blue_chill-900))",
          950: "hsl(var(--blue_chill-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        cotton_candy: {
          50: "hsl(var(--cotton_candy-50))",
          100: "hsl(var(--cotton_candy-100))",
          200: "hsl(var(--cotton_candy-200))",
          300: "hsl(var(--cotton_candy-300))",
          400: "hsl(var(--cotton_candy-400))",
          500: "hsl(var(--cotton_candy-500))",
          600: "hsl(var(--cotton_candy-600))",
          700: "hsl(var(--cotton_candy-700))",
          800: "hsl(var(--cotton_candy-800))",
          900: "hsl(var(--cotton_candy-900))",
          950: "hsl(var(--cotton_candy-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        hopbush: {
          50: "hsl(var(--hopbush-50))",
          100: "hsl(var(--hopbush-100))",
          200: "hsl(var(--hopbush-200))",
          300: "hsl(var(--hopbush-300))",
          400: "hsl(var(--hopbush-400))",
          500: "hsl(var(--hopbush-500))",
          600: "hsl(var(--hopbush-600))",
          700: "hsl(var(--hopbush-700))",
          800: "hsl(var(--hopbush-800))",
          900: "hsl(var(--hopbush-900))",
          950: "hsl(var(--hopbush-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        royal_purple: {
          50: "hsl(var(--royal_purple-50))",
          100: "hsl(var(--royal_purple-100))",
          200: "hsl(var(--royal_purple-200))",
          300: "hsl(var(--royal_purple-300))",
          400: "hsl(var(--royal_purple-400))",
          500: "hsl(var(--royal_purple-500))",
          600: "hsl(var(--royal_purple-600))",
          700: "hsl(var(--royal_purple-700))",
          800: "hsl(var(--royal_purple-800))",
          900: "hsl(var(--royal_purple-900))",
          950: "hsl(var(--royal_purple-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
