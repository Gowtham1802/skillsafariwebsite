/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage:{
        'skillSafariLogo' : "url('../src/components/navbarpage/img/logo-black.png')",
      }
    },
  },
  plugins: [],
}

