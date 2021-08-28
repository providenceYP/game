const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import");

module.exports = {
  plugins: [
    autoprefixer,
    tailwindcss,
    postcssImport,
  ],
}
