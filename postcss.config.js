import tailwind from 'tailwindcss';
import tailwindTypography from '@tailwindcss/typography';

import plugin from 'tailwindcss/plugin.js';

const variableFontWeightPlugin = plugin(({ addUtilities }) => {
  const fontWeights = [
    '.font-thin',
    '.font-light',
    '.font-extralight',
    '.font-normal',
    '.font-medium',
    '.font-semibold',
    '.font-bold',
    '.font-extrabold',
    '.font-black',
  ].reduce((acc, className, i) => {
    acc[className] = { 'font-variation-settings': `'wght' ${(i + 1) * 100}` };
    return acc;
  }, {});

  addUtilities(fontWeights);
});

export default {
  plugins: [
    tailwind({
      content: ['./.vitepress/theme/**/*.vue', './**/*.md'],
      plugins: [tailwindTypography, variableFontWeightPlugin],
    }),
  ],
};
