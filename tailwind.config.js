/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        arrowRight: {
          "0%": { transform: "translateX(0)" },
          "60%": { transform: "translateX(-80px)" },
          "100%": { transform: "translateX(60px)" },
        },
        arrowLeft: {
          "0%": { transform: "translateX(-60px)" }, 
          "50%": { transform: "translateX(-120px)" }, 
          "100%": { transform: "translateX(0)" }, 
        },
      },
      animation: {
        "arrow-right": "arrowRight 4s infinite alternate ease-in-out",
        "arrow-left": "arrowLeft 10s infinite alternate ease-in-out ",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
