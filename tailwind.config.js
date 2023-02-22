/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/constants/**/*.ts',
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        black: '#1E2328',
        sefo: {
          blue: '#00AEF8',
          lightblue: '#24D8FF',
          orange: '#FA985E',
          yellow: '#EAC870',
          purple: {
            300: '#9483F3',
            500: '#52488B',
            600: '#503F66',
            700: '#170D50',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
