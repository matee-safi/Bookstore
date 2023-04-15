/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#78a8d1',
          200: '#0290ff',
        },
        secondary: {
          100: '#8e8e8e',
          200: '#888'
        }
      },
      fontFamily: {
        primary: ['Montserrat'],
        secondary: ['RobotoSlab'],
      }
    },
  },
  plugins: [],
}
