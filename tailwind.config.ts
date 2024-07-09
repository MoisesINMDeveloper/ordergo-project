/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#FF5733",
        },
        yellow: {
          DEFAULT: "#FFD700",
        },
        green: {
          DEFAULT: "#7FFF00",
        },
        brown: {
          DEFAULT: "#8B4513",
        },
      },
    },
  },
  plugins: [],
};
