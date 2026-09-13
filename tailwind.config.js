/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A1628',
          navy: '#0F2038',
          navyLight: '#182C4A',
          teal: '#0D9488',
          tealLight: '#14B8A6',
          tealDark: '#0F766E',
          gold: '#D97706',
          goldLight: '#F59E0B',
          slate: '#F8FAFC',
          muted: '#64748B',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Montserrat', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px -2px rgba(15, 32, 56, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(15, 32, 56, 0.12)',
        'floating': '0 10px 30px -5px rgba(10, 22, 40, 0.25)',
      },
    },
  },
  plugins: [],
};
