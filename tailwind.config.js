/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          '100': '#FFF9E6',
          '300': '#FFE4A1',
          '500': '#FFD666',
          '600': '#FFB800',
          '700': '#CC9200',
          '800': '#997000',
          '900': '#664B00',
        },
      },
    },
  },
  plugins: [],
} 