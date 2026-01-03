/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          black: "#0a0a0a",
          blue: "#3b82f6",
        }
      }
    },
  },
  plugins: [],
}