module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      lineClamp: {
        3: '3',
        8: '8',
        9: '9',
        10: '10',
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
}