/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        imgHeader: "url('./src/assets/imgSokCores.jpg')",
      },
    },
  },
  plugins: [],
};