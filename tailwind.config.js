/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'herrmann-blue': '#4E7DFF',
        'herrmann-blue-gray': '#7095fa',
        'herrmann-gray': '#f3f3f3',
        'herrmann-gray-light': '#E7E7E7',
        'herrmann-gray-dark': '#1A1A1A',
        'herrmann-blue-gray': '#cadde8',
      }
    },
  },
  plugins: [],
}