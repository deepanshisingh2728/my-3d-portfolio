/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",   // TRUE black
        midnight: "#000000",
        navy: "#000000",
        indigo: "#000000",
        storm: "#000000",
      },
    },
  },
  plugins: [],
};
