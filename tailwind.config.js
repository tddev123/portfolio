/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
        height: {
        '240': '15rem',
      },
      width: {
        '240': '15rem',
      },
      keyframes: {
        colorChange: {

          '0%': { borderColor: 'red' },
          '25%': { borderColor: 'green' },
          '50%': { borderColor: 'blue' },
          '75%': { borderColor: 'yellow' },
          '100%': { borderColor: 'purple' },
       
      },
      animation: {
        'border-color-change':  'colorChange 5s linear infinite'
      },
    },
  },
  plugins: [], 

  }};
