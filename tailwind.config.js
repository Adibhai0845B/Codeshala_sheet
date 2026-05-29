/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        card: {
          DEFAULT: "hsl(var(--color-card))",
          foreground: "hsl(var(--color-card-foreground))",
          border: "hsl(var(--color-card-border))",
        },
        popover: {
          DEFAULT: "hsl(var(--color-popover))",
          foreground: "hsl(var(--color-popover-foreground))",
          border: "hsl(var(--color-popover-border))",
        },
        primary: {
          DEFAULT: "hsl(var(--color-primary))",
          foreground: "hsl(var(--color-primary-foreground))",
          border: "hsl(var(--color-primary-border))",
        },
        secondary: {
          DEFAULT: "hsl(var(--color-secondary))",
          foreground: "hsl(var(--color-secondary-foreground))",
          border: "hsl(var(--color-secondary-border))",
        },
        muted: {
          DEFAULT: "hsl(var(--color-muted))",
          foreground: "hsl(var(--color-muted-foreground))",
          border: "hsl(var(--color-muted-border))",
        },
        accent: {
          DEFAULT: "hsl(var(--color-accent))",
          foreground: "hsl(var(--color-accent-foreground))",
          border: "hsl(var(--color-accent-border))",
        },
        destructive: {
          DEFAULT: "hsl(var(--color-destructive))",
          foreground: "hsl(var(--color-destructive-foreground))",
          border: "hsl(var(--color-destructive-border))",
        },
        "chart-1": "hsl(var(--color-chart-1))",
        "chart-2": "hsl(var(--color-chart-2))",
        "chart-3": "hsl(var(--color-chart-3))",
        "chart-4": "hsl(var(--color-chart-4))",
        "chart-5": "hsl(var(--color-chart-5))",
        sidebar: {
          DEFAULT: "hsl(var(--color-sidebar))",
          foreground: "hsl(var(--color-sidebar-foreground))",
          border: "hsl(var(--color-sidebar-border))",
          primary: "hsl(var(--color-sidebar-primary))",
          "primary-foreground": "hsl(var(--color-sidebar-primary-foreground))",
          "primary-border": "hsl(var(--color-sidebar-primary-border))",
          accent: "hsl(var(--color-sidebar-accent))",
          "accent-foreground": "hsl(var(--color-sidebar-accent-foreground))",
          "accent-border": "hsl(var(--color-sidebar-accent-border))",
          ring: "hsl(var(--color-sidebar-ring))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
    }
  },
  plugins: [require("tailwindcss-animate")]
};