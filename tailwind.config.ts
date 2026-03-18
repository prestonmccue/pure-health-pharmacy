import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          500: '#0891b2',
          600: '#0e7490',
          700: '#155e75',
          900: '#164e63'
        }
      },
      boxShadow: {
        card: '0 15px 40px -20px rgba(15, 23, 42, 0.25)'
      }
    }
  },
  plugins: []
};

export default config;
