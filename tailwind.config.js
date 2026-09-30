/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#021E3D', // Ye tumhara primary color hoga
        secondary: '#1326B2',
        secondarylight:'#167af0',
      },
      backgroundImage: {
        secondary: 'linear-gradient(to left, #4a90e2, #1326B2)',
        secondarydark:'linear-gradient(to right, #4a90e2, #1326B2)', 

        // secondarydark:'#1a5403', // Gradient as a background
      },
    },
  },
  plugins: [],
};
