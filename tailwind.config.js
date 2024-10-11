// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'chr': '#292929',//chromaphobic
      },
      keyframes: {
        ping: {
          '75%, 100%': { transform: 'scale(3)' },
        },
      },
      animation: {
        ping: 'ping 2s ease-out infinite',
      },
    },
    plugins: [],
  }
}
