/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0054E4", //primary 600
        primary1100: "#000031", //dark blue
        secondary100: "#FEF4E6", //light yellow
        neutral900: "#344054", //hotels component bg color
        bgGray: "#f0f2f5", 
        bgWhite: "#ffffff",
        light: "#E7F0FF", //light blue
        border: "#E4E7EC",
        text: {
          primary: "#000000",
          secondary: "#676E7E", //light gray
          secondary900: "#7A4504", //text orange
        },
        success: "#F7B500",
        error100: "FBEAE9", // light red
        danger: "#9E0A05", //error 900
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        h1: ["24px", { lineHeight: "32px", fontWeight: "600" }],
        h2: ["20px", { lineHeight: "28px", fontWeight: "600" }],
        base: ["16px", { lineHeight: "24px", fontWeight: "400" }],
        bodyB2: ["16px", { lineHeight: "24px", fontWeight: "600" }],
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
      width: {
        'icon-sm': '1rem',   // e.g., 16px
        'icon-md': '1.5rem', // e.g., 24px
        'icon-lg': '2rem',   // e.g., 32px
      },
      height: {
        'icon-sm': '1rem',
        'icon-md': '1.5rem',
        'icon-lg': '2rem',
      },
    },
  },
  plugins: [],
};
