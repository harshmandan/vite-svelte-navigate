module.exports = {
  purge: ['./index.html', './src/**/*.{svelte,js,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    cursor: {
      'not-allowed':'not-allowed',
      'grab':'grab'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/custom-forms")
  ],
}
