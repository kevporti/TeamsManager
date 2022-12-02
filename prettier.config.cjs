/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  endOfLine: 'lf',
  useTabs: false,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 120,
  trailingComma: 'es5',
};
