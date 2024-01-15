

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.html',
    './src/**/*.md'
  ],

  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-light': '#F7F8FC',
        'secondary-light': '#FFFFFF',
        'ternary-light': '#f6f7f8',

        'primary-dark': '#0D2438',
        'secondary-dark': '#102D44',
        'ternary-dark': '#1E3851',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '5rem',
          xl: '6rem',
          '2xl': '20rem',
        },
      },
      containerrr: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '5rem',
          xl: '6rem',
          '2xl': '8rem',
        },
      },
      backgroundImage: {
        'web': "url('images/web-project-2.jpg')"

      }
    },
  },
}

