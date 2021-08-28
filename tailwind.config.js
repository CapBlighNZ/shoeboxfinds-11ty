module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.md',
    './src/**/*.njk',
    './src/*.njk',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'smoky-gray': '#2c2e31',
        'smoky-white': '#fffffe',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
