const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: {
    enabled: true,
    content: [
      'src/**/*.jsx',
      './**/*.html',
    ],
    safelist: [
      'break-words',
      'text-main-black',
      'font-nunito',
      'custom-scrollbar',
      'overscroll-contain',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '500px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'search-color': "#ebebef",
        'main': "#abb7de",
        'main-black': "#0f0f14",
        'main-text-color': "#2d3761",
        'dark-blue': "#031798",
      },
      width: {
        '90': '90%',
      },
      inset: {
        '5-percent': '5%',
        '10-percent': '10%',
      },
      fontFamily: {
        'nunito': "Nunito, sans-serif",
        'poppins': "Poppins, sans-serif",
        'pacifico': "Pacifico, sans-serif",
      },
      maxHeight: {
        'auto': 'auto'
      },
      minHeight: {
        'auto': 'auto'
      },
      spacing: {
        '150': '150%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
