/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        amazon:{
          bg:"#EAEDED",
          blue_light:"#232F3A",
          yellow:"#FEBD69",
          default:"#131921"
        }
      }
    },
  },
  plugins: [],
}
