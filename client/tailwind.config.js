/** @type {import('tailwindcss').Config} */
/**
 * @type {import('tailwindcss').Config}
 */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@clerk/**/*.{js,ts,jsx,tsx}", // ✅ Include Clerk
  ],
  darkMode: ["class", "class"], //enable dark mode
  theme: {
    extend: {
      keyframes: {
        "fade-in-out": {
          "0%, 100%": {
            opacity: 0,
          },
          "10%, 90%": {
            opacity: 1,
          },
        },
      },
      animation: {
        "fade-in-out": "fade-in-out 5s ease-in-out",
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        surface: "#FFFFFF",
        darkText: "#1F2937",
        secondaryText: "#6B7280",
        tertiaryText: "#9CA3AF",
        borderColor: "#E5E7EB",
        mutedBorder: "#D1D5DB",
        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",
        info: "#3B82F6",
        shadowLight: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        shadowMedium: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        shadowHeavy: "0px 10px 15px rgba(0, 0, 0, 0.2)",
        gradientPrimary: "linear-gradient(90deg, #2563EB 0%, #6366F1 100%)",
        gradientAccent: "linear-gradient(90deg, #6366F1 0%, #A78BFA 100%)",
        gradientSuccess: "linear-gradient(90deg, #10B981 0%, #34D399 100%)",
        dark: {
          background: "#0c141d",
          surface: "#0F0E47 ",
          primary: "#3B82F6",
          accent: "#6366F1",
          darkText: "#F1F5F9",
          secondaryText: "#94A3B8",
          tertiaryText: "#64748B",
          borderColor: "#334155",
          mutedBorder: "#475569",
          success: "#22C55E",
          warning: "#FBBF24",
          danger: "#F87171",
          info: "#3B82F6",
          shadowLight: "0px 1px 3px rgba(255, 255, 255, 0.05)",
          shadowMedium: "0px 4px 6px rgba(255, 255, 255, 0.05)",
          shadowHeavy: "0px 10px 15px rgba(255, 255, 255, 0.08)",
          gradientPrimary: "linear-gradient(90deg, #3B82F6 0%, #6366F1 100%)",
          gradientAccent: "linear-gradient(90deg, #818CF8 0%, #A5B4FC 100%)",
          gradientSuccess: "linear-gradient(90deg, #22C55E 0%, #4ADE80 100%)",
        },
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
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
      },
      fontSize: {
        tiny: "0.7rem",
        bigtitle: "3.5rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};
