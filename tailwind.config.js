/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dtBlue: '#273940',
        dtOrange: '#E47127',
        dtBrown: '#BC5637',
        dtGray: '#607D8B',
        dtLightGray: '#D9D9D9',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
