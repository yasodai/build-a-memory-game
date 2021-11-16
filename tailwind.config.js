// const colors = require('tailwindcss/colors')
const plugin = require("tailwindcss/plugin");

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-0": {
      transform: "rotateY(0deg)",
    },
    ".rotate-y-90": {
      transform: "rotateY(90deg)",
    },
  });
});

module.exports = {
  mode: "jit",
  purge: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [rotateY],
};
