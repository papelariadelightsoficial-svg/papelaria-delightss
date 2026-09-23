/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF9F0',
        'cream-light': '#FFFCF8',
        'cream-dark': '#F1E3D8',
        red: {
          DEFAULT: '#E85D5D',
          light: '#EF8585',
          dark: '#C74848',
        },
        brown: {
          DEFAULT: '#5B3828',
          light: '#80604D',
          dark: '#412619',
        },
        yellow: {
          DEFAULT: '#F5C84C',
          light: '#F8D778',
          dark: '#D8AA37',
        },
        blue: {
          DEFAULT: '#4E8FD8',
          light: '#7AADE6',
          dark: '#3974B8',
        },
        lilac: '#F4A6B8',
        pink: '#F4A6B8',
        green: '#39A875',
        'delight-cream': '#FFF9F0',
        'delight-cream-dark': '#F1E3D8',
        'delight-pink': '#F4A6B8',
        'delight-red': '#E85D5D',
        'delight-yellow': '#F5C84C',
        'delight-brown': '#5B3828',
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
