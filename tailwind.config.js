/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themePrimary: '#0c3727',
        themeSecondary: '#967844',
        lightSecondary: '#cfa152'
      }
    },
    fontFamily: {
      DM_Serif: ['DM Serif Display', 'serif'],
      Kaushan: ['Kaushan Script', 'cursive']
    }
  },
  plugins: [],
}

// 
// #EEA800
// #967844