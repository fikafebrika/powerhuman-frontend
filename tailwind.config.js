/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      poppins: 'Poppins, sans-serif',
    },
    extend: {
      colors: {
        primary: '#3378FF',
        secondary: '#F6F6FD',
        grey: '#ABB3C4',
        dark: '#001220',
        page: '#F8F8FA',
        success: '#009922',
      },
    },
  },
  plugins: [],
}
