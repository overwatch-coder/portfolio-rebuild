/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light": "#ffff",
        "dark": "black"
      },
      backgroundImage: {
        'hero': "url('./assets/hero.webp')",
        'service': "url('./assets/service.jpg')",
        'progress': "url('./assets/progress.webp')"
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}