/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Raleway': '"Raleway", sans-serif', // Adds a new `font-display` class
        'Anton': '"Anton", sans-serif', // Adds a new `font-display` class
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lemonade", "sunset",],
  },
}