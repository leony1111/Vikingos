/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#9D0616"
        }
      },
      fontFamily: {
        DMSans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        Jost: ['Jost', ...defaultTheme.fontFamily.sans],
        Noto: ['Noto Serif', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

