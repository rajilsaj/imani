/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        azure: {
          50: '#f4f9fe',
          100: '#e9f2fe',
          200: '#c9dffc',
          300: '#a9ccfa',
          400: '#68a5f6',
          500: '#277ff2',
          600: '#2372da',
          700: '#1d5fb6',
          800: '#174c91',
          900: '#133e77',
        },
        ebony: {
          50: '#f4f4f5',
          100: '#e9eaec',
          200: '#c8cacf',
          300: '#a7aab3',
          400: '#666b79',
          500: '#242b40',
          600: '#20273a',
          700: '#1b2030',
          800: '#161a26',
          900: '#12151f',
        },
      },
    },
  },
  plugins: [],
};
