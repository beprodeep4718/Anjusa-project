/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F1CF0C",
          100: "#F0A500",
          200: "#8E8E8E"
        },
      },
      
    },
  },
  plugins: [],
}

