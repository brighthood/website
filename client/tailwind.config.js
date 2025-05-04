/** @type {import('tailwindcss').Config} */
/**
 
 */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", //enable dark mode
  theme: {
    extend: {
      keyframes: {
        "fade-in-out": {
          "0%, 100%": { opacity: 0 },
          "10%, 90%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in-out": "fade-in-out 5s ease-in-out",
      },

      colors: {
        // Light Mode
        primary: "#2563EB", // blue
        accent: "#6366F1", // indigo
        background: "#F9FAFB", // very light gray
        surface: "#FFFFFF", // pure white for cards
        darkText: "#1F2937", // deep gray for headings
        secondaryText: "#6B7280", // medium gray for body text
        tertiaryText: "#9CA3AF", // light gray for subtle text
        borderColor: "#E5E7EB", // soft border
        mutedBorder: "#D1D5DB", // lighter border
        success: "#10B981", // emerald
        warning: "#F59E0B", // amber
        danger: "#EF4444", // red
        info: "#3B82F6", // info blue

        // Shadows
        shadowLight: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        shadowMedium: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        shadowHeavy: "0px 10px 15px rgba(0, 0, 0, 0.2)",

        // Gradients
        gradientPrimary: "linear-gradient(90deg, #2563EB 0%, #6366F1 100%)",
        gradientAccent: "linear-gradient(90deg, #6366F1 0%, #A78BFA 100%)",
        gradientSuccess: "linear-gradient(90deg, #10B981 0%, #34D399 100%)",

        // Dark Mode
        dark: {
          background: "#0c141d", // dark slate
          surface: "#0F0E47 ", // dark gray-blue
          primary: "#3B82F6", // blue
          accent: "#6366F1", // lighter indigo
          darkText: "#F1F5F9", // light text
          secondaryText: "#94A3B8", // gray for body
          tertiaryText: "#64748B", // subtle gray for less focus
          borderColor: "#334155", // darker border
          mutedBorder: "#475569", // lighter border
          success: "#22C55E", // green
          warning: "#FBBF24", // yellow
          danger: "#F87171", // light red
          info: "#3B82F6", // lighter blue

          // Shadows
          shadowLight: "0px 1px 3px rgba(255, 255, 255, 0.05)",
          shadowMedium: "0px 4px 6px rgba(255, 255, 255, 0.05)",
          shadowHeavy: "0px 10px 15px rgba(255, 255, 255, 0.08)",

          // Gradients
          gradientPrimary: "linear-gradient(90deg, #3B82F6 0%, #6366F1 100%)",
          gradientAccent: "linear-gradient(90deg, #818CF8 0%, #A5B4FC 100%)",
          gradientSuccess: "linear-gradient(90deg, #22C55E 0%, #4ADE80 100%)",
        },
      },

      fontSize: {
        tiny: "0.7rem",
        bigtitle: "3.5rem",
      },
    },
  },
  plugins: [],
};
