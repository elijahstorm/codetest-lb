/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#F4F5F6',
      black: '#343432',
      shadow: '#6096BA44',
      semi: '#274C7744',
      contrast: '#eeee',
      green: '#69DF67',
      alert: '#DF7D7D',
      primary: {
        DEFAULT: '#274C77',
        300: '#4680C3',
        500: '#274C77',
        600: '#274C77',
        700: '#274C77',
        800: '#274C77',
      },
    },
    extend: {},
  },
  plugins: [],
}
