import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        black: '#18181b',
        gray: '#d4d4d8',
        'gray-dark': '#616161',
        white: '#fafafa',
      },
      fontFamily: {
        sans: ['lato', 'sans-serif'],
        display: ['playfair display', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
