module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mainBg": "url('./src/images/bg.svg')"
      },
      fontFamily: {
        poppins: "'Poppins', 'sans-serif'"
      }
    },
  },
  plugins: [],
}
