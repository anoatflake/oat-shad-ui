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
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "oklch(var(--primary))",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary))",
          foreground: "oklch(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted))",
          foreground: "oklch(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "oklch(var(--accent))",
          foreground: "oklch(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive))",
          foreground: "oklch(var(--destructive-foreground))",
        },
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        outline: "oklch(var(--outline))",
        ring: "oklch(var(--ring))",
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        blood_shot_eyes: {
          50: "oklch(var(--blood_shot_eyes-50))",
          100: "oklch(var(--blood_shot_eyes-100))",
          200: "oklch(var(--blood_shot_eyes-200))",
          300: "oklch(var(--blood_shot_eyes-300))",
          400: "oklch(var(--blood_shot_eyes-400))",
          500: "oklch(var(--blood_shot_eyes-500))",
          600: "oklch(var(--blood_shot_eyes-600))",
          700: "oklch(var(--blood_shot_eyes-700))",
          800: "oklch(var(--blood_shot_eyes-800))",
          900: "oklch(var(--blood_shot_eyes-900))",
          950: "oklch(var(--blood_shot_eyes-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        eva_danger: {
          50: "oklch(var(--eva_danger-50))",
          100: "oklch(var(--eva_danger-100))",
          200: "oklch(var(--eva_danger-200))",
          300: "oklch(var(--eva_danger-300))",
          400: "oklch(var(--eva_danger-400))",
          500: "oklch(var(--eva_danger-500))",
          600: "oklch(var(--eva_danger-600))",
          700: "oklch(var(--eva_danger-700))",
          800: "oklch(var(--eva_danger-800))",
          900: "oklch(var(--eva_danger-900))",
          950: "oklch(var(--eva_danger-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        teal_background: {
          50: "oklch(var(--teal_background-50))",
          100: "oklch(var(--teal_background-100))",
          200: "oklch(var(--teal_background-200))",
          300: "oklch(var(--teal_background-300))",
          400: "oklch(var(--teal_background-400))",
          500: "oklch(var(--teal_background-500))",
          600: "oklch(var(--teal_background-600))",
          700: "oklch(var(--teal_background-700))",
          800: "oklch(var(--teal_background-800))",
          900: "oklch(var(--teal_background-900))",
          950: "oklch(var(--teal_background-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        skin: {
          50: "oklch(var(--skin-50))",
          100: "oklch(var(--skin-100))",
          200: "oklch(var(--skin-200))",
          300: "oklch(var(--skin-300))",
          400: "oklch(var(--skin-400))",
          500: "oklch(var(--skin-500))",
          600: "oklch(var(--skin-600))",
          700: "oklch(var(--skin-700))",
          800: "oklch(var(--skin-800))",
          900: "oklch(var(--skin-900))",
          950: "oklch(var(--skin-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        gold: {
          50: "oklch(var(--gold-50))",
          100: "oklch(var(--gold-100))",
          200: "oklch(var(--gold-200))",
          300: "oklch(var(--gold-300))",
          400: "oklch(var(--gold-400))",
          500: "oklch(var(--gold-500))",
          600: "oklch(var(--gold-600))",
          700: "oklch(var(--gold-700))",
          800: "oklch(var(--gold-800))",
          900: "oklch(var(--gold-900))",
          950: "oklch(var(--gold-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        aqua_green: {
          50: "oklch(var(--aqua_green-50))",
          100: "oklch(var(--aqua_green-100))",
          200: "oklch(var(--aqua_green-200))",
          300: "oklch(var(--aqua_green-300))",
          400: "oklch(var(--aqua_green-400))",
          500: "oklch(var(--aqua_green-500))",
          600: "oklch(var(--aqua_green-600))",
          700: "oklch(var(--aqua_green-700))",
          800: "oklch(var(--aqua_green-800))",
          900: "oklch(var(--aqua_green-900))",
          950: "oklch(var(--aqua_green-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        evergreen: {
          50: "oklch(var(--evergreen-50))",
          100: "oklch(var(--evergreen-100))",
          200: "oklch(var(--evergreen-200))",
          300: "oklch(var(--evergreen-300))",
          400: "oklch(var(--evergreen-400))",
          500: "oklch(var(--evergreen-500))",
          600: "oklch(var(--evergreen-600))",
          700: "oklch(var(--evergreen-700))",
          800: "oklch(var(--evergreen-800))",
          900: "oklch(var(--evergreen-900))",
          950: "oklch(var(--evergreen-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        periwinkle: {
          50: "oklch(var(--periwinkle-50))",
          100: "oklch(var(--periwinkle-100))",
          200: "oklch(var(--periwinkle-200))",
          300: "oklch(var(--periwinkle-300))",
          400: "oklch(var(--periwinkle-400))",
          500: "oklch(var(--periwinkle-500))",
          600: "oklch(var(--periwinkle-600))",
          700: "oklch(var(--periwinkle-700))",
          800: "oklch(var(--periwinkle-800))",
          900: "oklch(var(--periwinkle-900))",
          950: "oklch(var(--periwinkle-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        cornflower: {
          50: "oklch(var(--cornflower-50))",
          100: "oklch(var(--cornflower-100))",
          200: "oklch(var(--cornflower-200))",
          300: "oklch(var(--cornflower-300))",
          400: "oklch(var(--cornflower-400))",
          500: "oklch(var(--cornflower-500))",
          600: "oklch(var(--cornflower-600))",
          700: "oklch(var(--cornflower-700))",
          800: "oklch(var(--cornflower-800))",
          900: "oklch(var(--cornflower-900))",
          950: "oklch(var(--cornflower-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        apricot: {
          50: "oklch(var(--apricot-50))",
          100: "oklch(var(--apricot-100))",
          200: "oklch(var(--apricot-200))",
          300: "oklch(var(--apricot-300))",
          400: "oklch(var(--apricot-400))",
          500: "oklch(var(--apricot-500))",
          600: "oklch(var(--apricot-600))",
          700: "oklch(var(--apricot-700))",
          800: "oklch(var(--apricot-800))",
          900: "oklch(var(--apricot-900))",
          950: "oklch(var(--apricot-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        rust: {
          50: "oklch(var(--rust-50))",
          100: "oklch(var(--rust-100))",
          200: "oklch(var(--rust-200))",
          300: "oklch(var(--rust-300))",
          400: "oklch(var(--rust-400))",
          500: "oklch(var(--rust-500))",
          600: "oklch(var(--rust-600))",
          700: "oklch(var(--rust-700))",
          800: "oklch(var(--rust-800))",
          900: "oklch(var(--rust-900))",
          950: "oklch(var(--rust-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        outer_space: {
          50: "oklch(var(--outer_space-50))",
          100: "oklch(var(--outer_space-100))",
          200: "oklch(var(--outer_space-200))",
          300: "oklch(var(--outer_space-300))",
          400: "oklch(var(--outer_space-400))",
          500: "oklch(var(--outer_space-500))",
          600: "oklch(var(--outer_space-600))",
          700: "oklch(var(--outer_space-700))",
          800: "oklch(var(--outer_space-800))",
          900: "oklch(var(--outer_space-900))",
          950: "oklch(var(--outer_space-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        charcoal: {
          50: "oklch(var(--charcoal-50))",
          100: "oklch(var(--charcoal-100))",
          200: "oklch(var(--charcoal-200))",
          300: "oklch(var(--charcoal-300))",
          400: "oklch(var(--charcoal-400))",
          500: "oklch(var(--charcoal-500))",
          600: "oklch(var(--charcoal-600))",
          700: "oklch(var(--charcoal-700))",
          800: "oklch(var(--charcoal-800))",
          900: "oklch(var(--charcoal-900))",
          950: "oklch(var(--charcoal-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        fall_green: {
          50: "oklch(var(--fall_green-50))",
          100: "oklch(var(--fall_green-100))",
          200: "oklch(var(--fall_green-200))",
          300: "oklch(var(--fall_green-300))",
          400: "oklch(var(--fall_green-400))",
          500: "oklch(var(--fall_green-500))",
          600: "oklch(var(--fall_green-600))",
          700: "oklch(var(--fall_green-700))",
          800: "oklch(var(--fall_green-800))",
          900: "oklch(var(--fall_green-900))",
          950: "oklch(var(--fall_green-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        mustard: {
          50: "oklch(var(--mustard-50))",
          100: "oklch(var(--mustard-100))",
          200: "oklch(var(--mustard-200))",
          300: "oklch(var(--mustard-300))",
          400: "oklch(var(--mustard-400))",
          500: "oklch(var(--mustard-500))",
          600: "oklch(var(--mustard-600))",
          700: "oklch(var(--mustard-700))",
          800: "oklch(var(--mustard-800))",
          900: "oklch(var(--mustard-900))",
          950: "oklch(var(--mustard-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        blue_chill: {
          50: "oklch(var(--blue_chill-50))",
          100: "oklch(var(--blue_chill-100))",
          200: "oklch(var(--blue_chill-200))",
          300: "oklch(var(--blue_chill-300))",
          400: "oklch(var(--blue_chill-400))",
          500: "oklch(var(--blue_chill-500))",
          600: "oklch(var(--blue_chill-600))",
          700: "oklch(var(--blue_chill-700))",
          800: "oklch(var(--blue_chill-800))",
          900: "oklch(var(--blue_chill-900))",
          950: "oklch(var(--blue_chill-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        cotton_candy: {
          50: "oklch(var(--cotton_candy-50))",
          100: "oklch(var(--cotton_candy-100))",
          200: "oklch(var(--cotton_candy-200))",
          300: "oklch(var(--cotton_candy-300))",
          400: "oklch(var(--cotton_candy-400))",
          500: "oklch(var(--cotton_candy-500))",
          600: "oklch(var(--cotton_candy-600))",
          700: "oklch(var(--cotton_candy-700))",
          800: "oklch(var(--cotton_candy-800))",
          900: "oklch(var(--cotton_candy-900))",
          950: "oklch(var(--cotton_candy-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        hopbush: {
          50: "oklch(var(--hopbush-50))",
          100: "oklch(var(--hopbush-100))",
          200: "oklch(var(--hopbush-200))",
          300: "oklch(var(--hopbush-300))",
          400: "oklch(var(--hopbush-400))",
          500: "oklch(var(--hopbush-500))",
          600: "oklch(var(--hopbush-600))",
          700: "oklch(var(--hopbush-700))",
          800: "oklch(var(--hopbush-800))",
          900: "oklch(var(--hopbush-900))",
          950: "oklch(var(--hopbush-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        royal_purple: {
          50: "oklch(var(--royal_purple-50))",
          100: "oklch(var(--royal_purple-100))",
          200: "oklch(var(--royal_purple-200))",
          300: "oklch(var(--royal_purple-300))",
          400: "oklch(var(--royal_purple-400))",
          500: "oklch(var(--royal_purple-500))",
          600: "oklch(var(--royal_purple-600))",
          700: "oklch(var(--royal_purple-700))",
          800: "oklch(var(--royal_purple-800))",
          900: "oklch(var(--royal_purple-900))",
          950: "oklch(var(--royal_purple-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        spring_green: {
          50: "oklch(var(--color-spring-green-50))",
          100: "oklch(var(--color-spring-green-100))",
          200: "oklch(var(--color-spring-green-200))",
          300: "oklch(var(--color-spring-green-300))",
          400: "oklch(var(--color-spring-green-400))",
          500: "oklch(var(--color-spring-green-500))",
          600: "oklch(var(--color-spring-green-600))",
          700: "oklch(var(--color-spring-green-700))",
          800: "oklch(var(--color-spring-green-800))",
          900: "oklch(var(--color-spring-green-900))",
          950: "oklch(var(--color-spring-green-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        aquamarine: {
          50: "oklch(var(--color-aquamarine-50))",
          100: "oklch(var(--color-aquamarine-100))",
          200: "oklch(var(--color-aquamarine-200))",
          300: "oklch(var(--color-aquamarine-300))",
          400: "oklch(var(--color-aquamarine-400))",
          500: "oklch(var(--color-aquamarine-500))",
          600: "oklch(var(--color-aquamarine-600))",
          700: "oklch(var(--color-aquamarine-700))",
          800: "oklch(var(--color-aquamarine-800))",
          900: "oklch(var(--color-aquamarine-900))",
          950: "oklch(var(--color-aquamarine-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        turquoise_blue: {
          50: "oklch(var(--color-turquoise-blue-50))",
          100: "oklch(var(--color-turquoise-blue-100))",
          200: "oklch(var(--color-turquoise-blue-200))",
          300: "oklch(var(--color-turquoise-blue-300))",
          400: "oklch(var(--color-turquoise-blue-400))",
          500: "oklch(var(--color-turquoise-blue-500))",
          600: "oklch(var(--color-turquoise-blue-600))",
          700: "oklch(var(--color-turquoise-blue-700))",
          800: "oklch(var(--color-turquoise-blue-800))",
          900: "oklch(var(--color-turquoise-blue-900))",
          950: "oklch(var(--color-turquoise-blue-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        picton_blue: {
          50: "oklch(var(--color-picton-blue-50))",
          100: "oklch(var(--color-picton-blue-100))",
          200: "oklch(var(--color-picton-blue-200))",
          300: "oklch(var(--color-picton-blue-300))",
          400: "oklch(var(--color-picton-blue-400))",
          500: "oklch(var(--color-picton-blue-500))",
          600: "oklch(var(--color-picton-blue-600))",
          700: "oklch(var(--color-picton-blue-700))",
          800: "oklch(var(--color-picton-blue-800))",
          900: "oklch(var(--color-picton-blue-900))",
          950: "oklch(var(--color-picton-blue-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        royal_blue: {
          50: "oklch(var(--color-royal-blue-50))",
          100: "oklch(var(--color-royal-blue-100))",
          200: "oklch(var(--color-royal-blue-200))",
          300: "oklch(var(--color-royal-blue-300))",
          400: "oklch(var(--color-royal-blue-400))",
          500: "oklch(var(--color-royal-blue-500))",
          600: "oklch(var(--color-royal-blue-600))",
          700: "oklch(var(--color-royal-blue-700))",
          800: "oklch(var(--color-royal-blue-800))",
          900: "oklch(var(--color-royal-blue-900))",
          950: "oklch(var(--color-royal-blue-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        outrageous_orange: {
          50: "oklch(var(--color-outrageous-orange-50))",
          100: "oklch(var(--color-outrageous-orange-100))",
          200: "oklch(var(--color-outrageous-orange-200))",
          300: "oklch(var(--color-outrageous-orange-300))",
          400: "oklch(var(--color-outrageous-orange-400))",
          500: "oklch(var(--color-outrageous-orange-500))",
          600: "oklch(var(--color-outrageous-orange-600))",
          700: "oklch(var(--color-outrageous-orange-700))",
          800: "oklch(var(--color-outrageous-orange-800))",
          900: "oklch(var(--color-outrageous-orange-900))",
          950: "oklch(var(--color-outrageous-orange-950))",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        sea_buckthorn: {
          50: "oklch(var(--color-sea-buckthorn-50))",
          100: "oklch(var(--color-sea-buckthorn-100))",
          200: "oklch(var(--color-sea-buckthorn-200))",
          300: "oklch(var(--color-sea-buckthorn-300))",
          400: "oklch(var(--color-sea-buckthorn-400))",
          500: "oklch(var(--color-sea-buckthorn-500))",
          600: "oklch(var(--color-sea-buckthorn-600))",
          700: "oklch(var(--color-sea-buckthorn-700))",
          800: "oklch(var(--color-sea-buckthorn-800))",
          900: "oklch(var(--color-sea-buckthorn-900))",
          950: "oklch(var(--color-sea-buckthorn-950))",
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
