module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
  plugins: [import('preline/plugin')]
}
