/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'; // Use import instead of require

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui, // Use imported daisyui plugin here
  ],
};
