/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#013a55',
          50: '#e6f0f3',
          100: '#cce0e7',
          200: '#99c2cf',
          300: '#66a3b7',
          400: '#33859f',
          500: '#013a55',
          600: '#012e44',
          700: '#012333',
          800: '#011722',
          900: '#000c11',
        },
        accent: {
          DEFAULT: '#d1d927',
          50: '#f9fbe6',
          100: '#f3f7cc',
          200: '#e7ef99',
          300: '#dbe766',
          400: '#cfdf33',
          500: '#d1d927',
          600: '#a7ae1f',
          700: '#7d8217',
          800: '#545710',
          900: '#2a2b08',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'xxl': '1.375rem', // 22px - für bessere Lesbarkeit
      },
      minHeight: {
        '11': '2.75rem', // 44px für touch-friendly
        '12': '3rem',    // 48px
      },
      minWidth: {
        '11': '2.75rem',
        '12': '3rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
