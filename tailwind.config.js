/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#4A99F6',
      white: '#FFFFFF',
      background: '#25272B',
      gray: '#36383C',
      lightgray: '#4A4C4F',
    },
    spacing: {
      '2xs': 2,
      xs: 4,
      sm: 8,
      md: 12,
      lg: 16,
      xl: 24,
      '2xl': 28,
    },
    borderRadius: {
      sm: 4,
      md: 8,
    },
  },
  plugins: [],
};
