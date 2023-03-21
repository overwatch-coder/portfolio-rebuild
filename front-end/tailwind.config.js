/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
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