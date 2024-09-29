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
