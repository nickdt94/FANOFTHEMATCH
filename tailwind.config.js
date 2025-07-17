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
        'brand-bg': '#121212',
        'brand-primary': '#FF7A00',
        'brand-secondary': '#FF7A00',
        'brand-text-heading': '#FFFFFF',
        'brand-text': '#E0E1DD',
        'brand-text-inactive': '#888888',
        'brand-card-bg': '#1A1A1A',
        'brand-border': '#282828',
      },
      borderRadius: {
        'brand': '16px',
      },
    },
  },
  plugins: [],
}
