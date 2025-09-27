/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
         poppins: ["Poppins", "sans-serif"], // custom shortcut
        inter: ['Inter', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
}
