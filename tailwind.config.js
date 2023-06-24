/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        'item': '420px',
        'item2': '600px',
      },
      maxWidth: {
        'screen-3xl': '1650px',
      },
      colors: {
        elzero:'#0075FF',
      }
    },
  },
  plugins: [],
}

