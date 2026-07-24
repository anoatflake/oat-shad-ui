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
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        outline: "var(--outline)",
        ring: "var(--ring)",
        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
        },
        blood_shot_eyes: {
          50: "var(--blood_shot_eyes-50)",
          100: "var(--blood_shot_eyes-100)",
          200: "var(--blood_shot_eyes-200)",
          300: "var(--blood_shot_eyes-300)",
          400: "var(--blood_shot_eyes-400)",
          500: "var(--blood_shot_eyes-500)",
          600: "var(--blood_shot_eyes-600)",
          700: "var(--blood_shot_eyes-700)",
          800: "var(--blood_shot_eyes-800)",
          900: "var(--blood_shot_eyes-900)",
          950: "var(--blood_shot_eyes-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        eva_danger: {
          50: "var(--eva_danger-50)",
          100: "var(--eva_danger-100)",
          200: "var(--eva_danger-200)",
          300: "var(--eva_danger-300)",
          400: "var(--eva_danger-400)",
          500: "var(--eva_danger-500)",
          600: "var(--eva_danger-600)",
          700: "var(--eva_danger-700)",
          800: "var(--eva_danger-800)",
          900: "var(--eva_danger-900)",
          950: "var(--eva_danger-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        teal_background: {
          50: "var(--teal_background-50)",
          100: "var(--teal_background-100)",
          200: "var(--teal_background-200)",
          300: "var(--teal_background-300)",
          400: "var(--teal_background-400)",
          500: "var(--teal_background-500)",
          600: "var(--teal_background-600)",
          700: "var(--teal_background-700)",
          800: "var(--teal_background-800)",
          900: "var(--teal_background-900)",
          950: "var(--teal_background-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        skin: {
          50: "var(--skin-50)",
          100: "var(--skin-100)",
          200: "var(--skin-200)",
          300: "var(--skin-300)",
          400: "var(--skin-400)",
          500: "var(--skin-500)",
          600: "var(--skin-600)",
          700: "var(--skin-700)",
          800: "var(--skin-800)",
          900: "var(--skin-900)",
          950: "var(--skin-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        gold: {
          50: "var(--gold-50)",
          100: "var(--gold-100)",
          200: "var(--gold-200)",
          300: "var(--gold-300)",
          400: "var(--gold-400)",
          500: "var(--gold-500)",
          600: "var(--gold-600)",
          700: "var(--gold-700)",
          800: "var(--gold-800)",
          900: "var(--gold-900)",
          950: "var(--gold-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        aqua_green: {
          50: "var(--aqua_green-50)",
          100: "var(--aqua_green-100)",
          200: "var(--aqua_green-200)",
          300: "var(--aqua_green-300)",
          400: "var(--aqua_green-400)",
          500: "var(--aqua_green-500)",
          600: "var(--aqua_green-600)",
          700: "var(--aqua_green-700)",
          800: "var(--aqua_green-800)",
          900: "var(--aqua_green-900)",
          950: "var(--aqua_green-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        evergreen: {
          50: "var(--evergreen-50)",
          100: "var(--evergreen-100)",
          200: "var(--evergreen-200)",
          300: "var(--evergreen-300)",
          400: "var(--evergreen-400)",
          500: "var(--evergreen-500)",
          600: "var(--evergreen-600)",
          700: "var(--evergreen-700)",
          800: "var(--evergreen-800)",
          900: "var(--evergreen-900)",
          950: "var(--evergreen-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        periwinkle: {
          50: "var(--periwinkle-50)",
          100: "var(--periwinkle-100)",
          200: "var(--periwinkle-200)",
          300: "var(--periwinkle-300)",
          400: "var(--periwinkle-400)",
          500: "var(--periwinkle-500)",
          600: "var(--periwinkle-600)",
          700: "var(--periwinkle-700)",
          800: "var(--periwinkle-800)",
          900: "var(--periwinkle-900)",
          950: "var(--periwinkle-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        cornflower: {
          50: "var(--cornflower-50)",
          100: "var(--cornflower-100)",
          200: "var(--cornflower-200)",
          300: "var(--cornflower-300)",
          400: "var(--cornflower-400)",
          500: "var(--cornflower-500)",
          600: "var(--cornflower-600)",
          700: "var(--cornflower-700)",
          800: "var(--cornflower-800)",
          900: "var(--cornflower-900)",
          950: "var(--cornflower-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        apricot: {
          50: "var(--apricot-50)",
          100: "var(--apricot-100)",
          200: "var(--apricot-200)",
          300: "var(--apricot-300)",
          400: "var(--apricot-400)",
          500: "var(--apricot-500)",
          600: "var(--apricot-600)",
          700: "var(--apricot-700)",
          800: "var(--apricot-800)",
          900: "var(--apricot-900)",
          950: "var(--apricot-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        rust: {
          50: "var(--rust-50)",
          100: "var(--rust-100)",
          200: "var(--rust-200)",
          300: "var(--rust-300)",
          400: "var(--rust-400)",
          500: "var(--rust-500)",
          600: "var(--rust-600)",
          700: "var(--rust-700)",
          800: "var(--rust-800)",
          900: "var(--rust-900)",
          950: "var(--rust-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        outer_space: {
          50: "var(--outer_space-50)",
          100: "var(--outer_space-100)",
          200: "var(--outer_space-200)",
          300: "var(--outer_space-300)",
          400: "var(--outer_space-400)",
          500: "var(--outer_space-500)",
          600: "var(--outer_space-600)",
          700: "var(--outer_space-700)",
          800: "var(--outer_space-800)",
          900: "var(--outer_space-900)",
          950: "var(--outer_space-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        charcoal: {
          50: "var(--charcoal-50)",
          100: "var(--charcoal-100)",
          200: "var(--charcoal-200)",
          300: "var(--charcoal-300)",
          400: "var(--charcoal-400)",
          500: "var(--charcoal-500)",
          600: "var(--charcoal-600)",
          700: "var(--charcoal-700)",
          800: "var(--charcoal-800)",
          900: "var(--charcoal-900)",
          950: "var(--charcoal-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        fall_green: {
          50: "var(--fall_green-50)",
          100: "var(--fall_green-100)",
          200: "var(--fall_green-200)",
          300: "var(--fall_green-300)",
          400: "var(--fall_green-400)",
          500: "var(--fall_green-500)",
          600: "var(--fall_green-600)",
          700: "var(--fall_green-700)",
          800: "var(--fall_green-800)",
          900: "var(--fall_green-900)",
          950: "var(--fall_green-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        mustard: {
          50: "var(--mustard-50)",
          100: "var(--mustard-100)",
          200: "var(--mustard-200)",
          300: "var(--mustard-300)",
          400: "var(--mustard-400)",
          500: "var(--mustard-500)",
          600: "var(--mustard-600)",
          700: "var(--mustard-700)",
          800: "var(--mustard-800)",
          900: "var(--mustard-900)",
          950: "var(--mustard-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        blue_chill: {
          50: "var(--blue_chill-50)",
          100: "var(--blue_chill-100)",
          200: "var(--blue_chill-200)",
          300: "var(--blue_chill-300)",
          400: "var(--blue_chill-400)",
          500: "var(--blue_chill-500)",
          600: "var(--blue_chill-600)",
          700: "var(--blue_chill-700)",
          800: "var(--blue_chill-800)",
          900: "var(--blue_chill-900)",
          950: "var(--blue_chill-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        cotton_candy: {
          50: "var(--cotton_candy-50)",
          100: "var(--cotton_candy-100)",
          200: "var(--cotton_candy-200)",
          300: "var(--cotton_candy-300)",
          400: "var(--cotton_candy-400)",
          500: "var(--cotton_candy-500)",
          600: "var(--cotton_candy-600)",
          700: "var(--cotton_candy-700)",
          800: "var(--cotton_candy-800)",
          900: "var(--cotton_candy-900)",
          950: "var(--cotton_candy-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        hopbush: {
          50: "var(--hopbush-50)",
          100: "var(--hopbush-100)",
          200: "var(--hopbush-200)",
          300: "var(--hopbush-300)",
          400: "var(--hopbush-400)",
          500: "var(--hopbush-500)",
          600: "var(--hopbush-600)",
          700: "var(--hopbush-700)",
          800: "var(--hopbush-800)",
          900: "var(--hopbush-900)",
          950: "var(--hopbush-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        royal_purple: {
          50: "var(--royal_purple-50)",
          100: "var(--royal_purple-100)",
          200: "var(--royal_purple-200)",
          300: "var(--royal_purple-300)",
          400: "var(--royal_purple-400)",
          500: "var(--royal_purple-500)",
          600: "var(--royal_purple-600)",
          700: "var(--royal_purple-700)",
          800: "var(--royal_purple-800)",
          900: "var(--royal_purple-900)",
          950: "var(--royal_purple-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        spring_green: {
          50: "var(--color-spring-green-50)",
          100: "var(--color-spring-green-100)",
          200: "var(--color-spring-green-200)",
          300: "var(--color-spring-green-300)",
          400: "var(--color-spring-green-400)",
          500: "var(--color-spring-green-500)",
          600: "var(--color-spring-green-600)",
          700: "var(--color-spring-green-700)",
          800: "var(--color-spring-green-800)",
          900: "var(--color-spring-green-900)",
          950: "var(--color-spring-green-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        aquamarine: {
          50: "var(--color-aquamarine-50)",
          100: "var(--color-aquamarine-100)",
          200: "var(--color-aquamarine-200)",
          300: "var(--color-aquamarine-300)",
          400: "var(--color-aquamarine-400)",
          500: "var(--color-aquamarine-500)",
          600: "var(--color-aquamarine-600)",
          700: "var(--color-aquamarine-700)",
          800: "var(--color-aquamarine-800)",
          900: "var(--color-aquamarine-900)",
          950: "var(--color-aquamarine-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        turquoise_blue: {
          50: "var(--color-turquoise-blue-50)",
          100: "var(--color-turquoise-blue-100)",
          200: "var(--color-turquoise-blue-200)",
          300: "var(--color-turquoise-blue-300)",
          400: "var(--color-turquoise-blue-400)",
          500: "var(--color-turquoise-blue-500)",
          600: "var(--color-turquoise-blue-600)",
          700: "var(--color-turquoise-blue-700)",
          800: "var(--color-turquoise-blue-800)",
          900: "var(--color-turquoise-blue-900)",
          950: "var(--color-turquoise-blue-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        picton_blue: {
          50: "var(--color-picton-blue-50)",
          100: "var(--color-picton-blue-100)",
          200: "var(--color-picton-blue-200)",
          300: "var(--color-picton-blue-300)",
          400: "var(--color-picton-blue-400)",
          500: "var(--color-picton-blue-500)",
          600: "var(--color-picton-blue-600)",
          700: "var(--color-picton-blue-700)",
          800: "var(--color-picton-blue-800)",
          900: "var(--color-picton-blue-900)",
          950: "var(--color-picton-blue-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        royal_blue: {
          50: "var(--color-royal-blue-50)",
          100: "var(--color-royal-blue-100)",
          200: "var(--color-royal-blue-200)",
          300: "var(--color-royal-blue-300)",
          400: "var(--color-royal-blue-400)",
          500: "var(--color-royal-blue-500)",
          600: "var(--color-royal-blue-600)",
          700: "var(--color-royal-blue-700)",
          800: "var(--color-royal-blue-800)",
          900: "var(--color-royal-blue-900)",
          950: "var(--color-royal-blue-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        outrageous_orange: {
          50: "var(--color-outrageous-orange-50)",
          100: "var(--color-outrageous-orange-100)",
          200: "var(--color-outrageous-orange-200)",
          300: "var(--color-outrageous-orange-300)",
          400: "var(--color-outrageous-orange-400)",
          500: "var(--color-outrageous-orange-500)",
          600: "var(--color-outrageous-orange-600)",
          700: "var(--color-outrageous-orange-700)",
          800: "var(--color-outrageous-orange-800)",
          900: "var(--color-outrageous-orange-900)",
          950: "var(--color-outrageous-orange-950)",
          DEFAULT: "", //TODO:
          foreground: "", //TODO:
        },
        sea_buckthorn: {
          50: "var(--color-sea-buckthorn-50)",
          100: "var(--color-sea-buckthorn-100)",
          200: "var(--color-sea-buckthorn-200)",
          300: "var(--color-sea-buckthorn-300)",
          400: "var(--color-sea-buckthorn-400)",
          500: "var(--color-sea-buckthorn-500)",
          600: "var(--color-sea-buckthorn-600)",
          700: "var(--color-sea-buckthorn-700)",
          800: "var(--color-sea-buckthorn-800)",
          900: "var(--color-sea-buckthorn-900)",
          950: "var(--color-sea-buckthorn-950)",
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
