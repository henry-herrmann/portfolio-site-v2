/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-white': '#f9f9f9',
        'slate': '#080808',
        'herrmann-blue': '#1565c0',
        'herrmann-blue-2': '#1565c0',
        'herrmann-gray': '#E8E8E8',
        'herrmann-gray-light': '#F0F0F0',
        'herrmann-gray-dark': '#1A1A1A',
        'herrmann-blue-gray': '#cadde8',
        'white-gray': '#F2F3F5',
      }
    },
  },
  plugins: [],
}