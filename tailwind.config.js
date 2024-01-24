/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui';
import autoprefixer from 'autoprefixer';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "sans": ["Inter", "system-ui", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    daisyui,
    autoprefixer,
  ],
}

