module.exports = {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)'
          },
          '50%': {
            transform: 'rotate(3deg)'
          },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      colors: {
        'pastel-pink': '#ffcdd2',
        'pastel-purple': '#e1bee7',
        'pastel-blue': '#bbdefb',
        'pastel-green': '#c8e6c9',
        'pastel-yellow': '#fff9c4',
      },
    },
  },
  plugins: [],
}
