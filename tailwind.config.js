/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': 'inset 10px -50px 94px 0 rgb(199, 199, 199, 0.2)',
        'summary': 'inset 10px -50px 94px 0 rgb(199, 199, 199, 0.2)',
      }
    },
  },
  plugins: [],
}

