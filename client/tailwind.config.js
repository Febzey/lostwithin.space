module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        "mainBg": "url('./src/images/wave.svg')",
        "sprinkle": "url('./src/images/backgrounds/sprinkle.svg')",
      },
      fontFamily: {
        inco: ["Inconsolata", 'serif'],
        space: ["Space Grotesk", 'serif'],
        poppins: ["Poppins", 'serif'],
        Bakbak: ["Bakbak One", 'serif'],
      }
    },
  },
  plugins: [],
}
