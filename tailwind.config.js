/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#F4F5F6',
      black: '#343432',
      primary: '#274C77',
      shadow: '#6096BA44',
      contrast: '#eeee',
    },
    extend: {},
  },
  plugins: [],
}
