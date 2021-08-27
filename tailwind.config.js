module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.md',
    './src/**/*.njk',
    './src/*.njk',
  ],
  darkMode: class, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
