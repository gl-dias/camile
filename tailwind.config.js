/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#fff7ed',
          100: '#ffe4d5',
          200: '#ffd4b9',
          300: '#ffb399',
          400: '#ff9977',
          500: '#ff8855',
          600: '#ff6644',
          700: '#ff4433',
          800: '#dd3322',
          900: '#bb2211',
        },
      },
      animation: {
        'flee': 'flee 0.3s ease-out',
      },
      keyframes: {
        flee: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(var(--tx), var(--ty))' },
        },
      },
    },
  },
  plugins: [],
}
