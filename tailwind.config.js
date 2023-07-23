/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,js,svelte,html}"],
  theme: {
      fontFamily: {
          'noto': ['Noto Serif JP', 'serif'],
          'mo': ['Moirai One', 'cursive'],
          'bodo': ['Bodoni Moda', 'serif']
      },
    extend: {},
  },
  plugins: [],
}

