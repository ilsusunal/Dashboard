/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'lavender': {
          100 : '#98bdff',
          200 : '#7da0fa',
          300 : '#7978e9',
          400 : '#4b49ac',
        },
        'mercan' : '#f3797e',
      },
    },
  },
  plugins: [],
}