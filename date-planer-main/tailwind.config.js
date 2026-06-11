/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fff0f3',
          100: '#ffe4e8',
          200: '#fecdd6',
          300: '#fea3b6',
          400: '#fb718e',
          500: '#f43f6c',
          600: '#e11d53',
          700: '#be1243',
          800: '#9f123d',
          900: '#881338',
        },
        mint: {
          50: '#f2fcf9',
          100: '#d1f4e6',
          200: '#a3e7d0',
          300: '#6dd2b3',
          400: '#41b695',
          500: '#239a79',
          600: '#187b61',
          700: '#13634f',
          800: '#114f40',
          900: '#0e4136',
        },
        beige: {
          50: '#fbfaf8',
          100: '#f6f3ef',
          200: '#efe9df',
          300: '#e3d7c5',
          400: '#d3bca1',
          500: '#c5a27e',
          600: '#ba8c65',
          700: '#9c6f4e',
          800: '#805d43',
          900: '#674d39',
        }
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
