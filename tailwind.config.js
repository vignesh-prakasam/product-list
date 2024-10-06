/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'red-hat': ['Red Hat', 'sans-serif'],
      },
      fontWeight: {
        '400': 400,
        '600': 600,
        '700': 700,
      },
      colors: {
        red: {
          DEFAULT: 'hsl(14, 86%, 42%)',
        },
        green: {
          DEFAULT: 'hsl(159, 69%, 38%)',
        },
        rose: {
          50: 'hsl(20, 50%, 98%)',
          100: 'hsl(13, 31%, 94%)',
          300: 'hsl(14, 25%, 72%)',
          400: 'hsl(7, 20%, 60%)',
          500: 'hsl(12, 20%, 44%)',
          900: 'hsl(14, 65%, 9%)',
        },
      },
    },
  },
  plugins: [],
}


/*
Import these colors

## Colors

- Red: hsl(14, 86%, 42%)
- Green: hsl(159, 69%, 38%)

- Rose 50: hsl(20, 50%, 98%)
- Rose 100: hsl(13, 31%, 94%)
- Rose 300: hsl(14, 25%, 72%)
- Rose 400: hsl(7, 20%, 60%)
- Rose 500: hsl(12, 20%, 44%)
- Rose 900: hsl(14, 65%, 9%)
*/