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
      background: '#2B2B2B',
      gray: '#3A3A3A',
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
