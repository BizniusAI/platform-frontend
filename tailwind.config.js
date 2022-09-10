/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
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
          grayblue: '#7B95AF',
          lightblue: '#24D8FF',
          lightgray: '#DDE4EB',
          orange: '#F2A900',
          purple: '#7F25E1',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
