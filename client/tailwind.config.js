/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", //enable dark mode
  theme: {
    extend: {
      colors: {
        // Light Mode
        primary: "#2563EB",
        accent: "#6366F1",
        background: "#F9FAFB",
        darkText: "#1F2937",
        secondaryText: "#6B7280",
        borderColor: "#E5E7EB",
        success: "#10B981",
        danger: "#EF4444",

        // Dark Mode Colors
        dark: {
          background: "#0F172A", // dark slate
          surface: "#1E293B", // dark gray-blue
          primary: "#3B82F6", // blue
          text: "#F1F5F9", // light text
          secondaryText: "#94A3B8", // lighter gray
          borderColor: "#334155", // darker border
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
