/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bright-lilac': '#e09bf0',
        'chrome-yellow': {
          50: '#FFF8EB',
          100: '#FFE2AD',
          200: '#FFCD70',
          300: '#FFBF47',
          400: '#FFB01F',
          500: '#F49F01',
          600: '#CB8401',
          700: '#A26A01',
          800: '#8E5D01',
          900: '#7A4F01',
        },
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
