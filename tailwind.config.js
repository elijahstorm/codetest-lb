/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#F4F5F6',
      grey: '#E1E1E0',
      gray: '#E1E1E0',
      black: '#343432',
      shadow: '#6096BA44',
      semi: '#274C7744',
      contrast: '#eeee',
      green: '#69DF67',
      alert: '#DF7D7D',
      primary: {
        DEFAULT: '#274C77',
        300: '#A3C0E1',
        500: '#84ABD7',
        600: '#6596CD',
        700: '#568BC8',
        800: '#3C76B9',
      },
    },
    extend: {},
  },
  plugins: [],
}
