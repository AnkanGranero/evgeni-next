const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./app/components/**/*.{js,ts,jsx,tsx}",
        "./styles/**/*.{js,ts,css,jsx,tsx}",
      ],
    theme: {
      extend: {
        colors: {
            ...defaultTheme.colors,
          peach: '#FFC19',
          pinkish: '#FFB2B2',
        },
      },
    },
  }