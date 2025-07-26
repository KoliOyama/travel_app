/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0056F0",
        secondary: "#0263F6",
        background: "#F9FAFC",
        light: "#EDF4FF",
        border: "#E0E0E0",
        text: {
          primary: "#202124",
          secondary: "#5F6368",
        },
        success: "#F7B500",
        danger: "#D32F2F",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        h1: ["28px", { lineHeight: "36px", fontWeight: "700" }],
        h2: ["20px", { lineHeight: "28px", fontWeight: "600" }],
        base: ["16px", { lineHeight: "24px", fontWeight: "400" }],
        sm: ["14px", { lineHeight: "20px", fontWeight: "400" }],
        xs: ["12px", { lineHeight: "18px", fontWeight: "400" }],
        button: ["14px", { lineHeight: "20px", fontWeight: "500" }],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
      borderRadius: {
        sm: "6px",
        md: "8px",
      },
      boxShadow: {
        card: "0px 1px 3px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
