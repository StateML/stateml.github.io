const plugin = require("tailwindcss/plugin");

const variableFontWeightPlugin = plugin(({ addUtilities }) => {
  const fontWeights = [
    ".font-thin",
    ".font-light",
    ".font-extralight",
    ".font-normal",
    ".font-medium",
    ".font-semibold",
    ".font-bold",
    ".font-extrabold",
    ".font-black",
  ].reduce((acc, className, i) => {
    acc[className] = { "font-variation-settings": `'wght' ${(i + 1) * 100}` };
    return acc;
  }, {});

  addUtilities(fontWeights);
});

module.exports = {
  mode: "jit",
  purge: ["./.vitepress/theme/**/*.vue", "./**/*.md"],
  plugins: [variableFontWeightPlugin, require("@tailwindcss/typography")],
  darkMode: "media",
};
