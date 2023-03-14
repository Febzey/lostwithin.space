module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mainBg": "url('./src/images/wave.svg')",
        "sprinkle": "url('./src/images/backgrounds/sprinkle.svg')",
      },
      fontFamily: {
        poppins: "'Poppins', 'sans-serif'",
        'bakbak': ['Bakbak One', 'cursive'],
      }
    },
  },
  plugins: [],
}
