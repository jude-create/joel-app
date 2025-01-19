/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'combined-radial': 'radial-gradient(115.42% 115.42% at 6.17% 9.21%, #000000 0%, #0A1D1F 58.56%, #111111 100%), radial-gradient(43.83% 75.96% at 82.38% 0%, rgba(58, 119, 122, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)',
      
  
      },
      fontFamily: {
        anta: ['Anta', 'sans-serif'], // Correct definition
        unigeo: ["Unigeo64", "sans-serif"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
