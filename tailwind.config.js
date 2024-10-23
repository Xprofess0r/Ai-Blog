/** @type {import('tailwindcss').Config} */
export default {
  server: {
    hmr: {
      overlay: false,
    },
  },
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
  
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], 
    },
  },
},
  plugins: [],
};
