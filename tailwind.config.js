/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071426',
          900: '#0a1c33',
          800: '#102a49',
          700: '#173b63',
        },
        skysoft: '#e8f4ff',
        mint: '#19b58a',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(10, 28, 51, 0.12)',
        glow: '0 20px 70px rgba(57, 148, 255, 0.24)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
