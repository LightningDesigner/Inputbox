/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        400: '400',
        600: '600',
        442: '442', // Example of a custom font weight
      },
      
      fontFamily: {
        sans:['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
