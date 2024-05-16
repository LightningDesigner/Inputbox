/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:['Inter', 'sans-serif'],
      },

      colors: {
        'input-text': '#292929',
        'input-border': '#C9C9C9',
        'active-border': '#999999',
        'error-border': '#D31832',
        'error-shadow': '#E5324A',
      },
      boxShadow: {
        active: '0 0 2px rgba(41, 41, 41, 0.31)',
        error: '0 0 2px rgba(229, 50, 74, 0.31)',
      }
    },
  },
  plugins: [],
}
