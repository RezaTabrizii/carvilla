/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rufina: ['Rufina-Regular'],
        poppins: ['Poppins']
      },
      padding: {
        '780px': '780px'
      }
    }
  },
  plugins: []
}
