/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        vt323: ['VT323', 'monospace', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      backgroundImage: {
        landscape: "url('./assets/anime-sky-landscape.png')",
        portrait: "url('./assets/anime-sky.jpg')",
      },
    },
  },
  plugins: [],
};
