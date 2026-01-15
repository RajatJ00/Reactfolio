// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'Name': ['Source Code Pro', 'monospace'],
    },
    screens:{
      's_phone': '360px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
      colors: {
        title1: '#CCFFFF',
        title2: '#34274E',
        color1: '#E2F3F4',
        color2: '#6DC7D1',
      },
      keyframes: {
        ping: {
          '50%': { transform: 'scale(3)' },
        },
        slide_out: {
          '0%': { transform: 'translateX(2.5rem)' },
          '100%': { transform: 'translateX(0)' },
        },
        slide_in: {
          '0%': { transform: 'translateX(-2.5rem)' },
          '100%': { transform: 'translateX(0)', display: 'none' },
        },
        fade: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        ping: 'ping 2s ease-out infinite',
        smooth_slide: 'slide_out 1.2s ease-out',
        smooth_slide_in: 'slide_in 1.2s ease-out',
        fade: 'fade 1.5s ease-out',
      },
    },
    plugins: [],
  }
}
