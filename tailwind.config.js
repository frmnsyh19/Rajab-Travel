/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      spacing: {
        '99': '30rem',
        '50': '50rem',
        '82': '22rem'
      }
    },
  },
  plugins: [require("daisyui")],
}

