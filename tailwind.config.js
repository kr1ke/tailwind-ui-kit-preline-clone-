module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  content: [
    // './src/**/*.{html,js}',
    'node_modules/preline/dist/*.js',
  ],
  plugins: [import('preline/plugin')],
}