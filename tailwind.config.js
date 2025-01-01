/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkbg: "#252525",
        darktext: "#D9D9D9",
        darkdiv: "#444444",
        darksubdiv: "#D9D9D9",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], // Add Montserrat
      },

      fontSize: {
        base: "0.8rem", // Default text size (14px)
      },

      animation: {
        "fade-out-in": "fadeOutIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeOutIn: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
