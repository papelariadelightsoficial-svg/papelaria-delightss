/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8EE',
        'cream-light': '#FFFDF8',
        'cream-dark': '#F2E4D6',
        red: {
          DEFAULT: '#D94B6A',
          light: '#E97991',
          dark: '#B83A58',
        },
        brown: {
          DEFAULT: '#573323',
          light: '#80604D',
          dark: '#3C2116',
        },
        yellow: {
          DEFAULT: '#F6C84C',
          light: '#F9D979',
          dark: '#D9A936',
        },
        blue: {
          DEFAULT: '#5B8DEF',
          light: '#86ABF4',
          dark: '#426FCC',
        },
        lilac: '#9B7AE7',
        pink: '#D94B6A',
        green: '#39A875',
        'delight-cream': '#FFF8EE',
        'delight-cream-dark': '#F2E4D6',
        'delight-pink': '#D94B6A',
        'delight-red': '#D94B6A',
        'delight-yellow': '#F6C84C',
        'delight-brown': '#573323',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Fredoka', 'Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'float-slow': 'floatSlow 3s ease-in-out infinite',
        'float-medium': 'floatMedium 2.5s ease-in-out infinite',
        wiggle: 'wiggle 2s ease-in-out infinite',
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
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
};
