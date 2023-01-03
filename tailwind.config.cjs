/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bright-lilac': '#e09bf0',
        'chrome-yellow': '#fea702',
        'light-sky-blue': '#91d0ff',
        'dark-gray': '#121212',
        'cool-gray': {
          50: '#f5f7fa',
          100: '#e4e7eb',
          200: '#cbd2d9',
          300: '#9aa5b1',
          400: '#7b8794',
          500: '#616e7c',
          600: '#52606d',
          700: '#3e4c59',
          800: '#323f4b',
          900: '#1f2933',
        },
      },
    },
  },
  plugins: [],
};
