import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B1320',      // Primary Dark
          blue: '#13243B',      // Deep Blue
          orange: '#F59E0B',    // Accent Orange
          'orange-hover': '#EA580C',
          warm: '#FFE7B3',      // Warm Accent
          white: '#FFFFFF',     // White
          gray: '#F7F8FA',      // Soft Gray
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      boxShadow: {
        'brand-glow': '0 0 20px -3px rgba(245, 158, 11, 0.35)',
        'header-dark': '0 4px 20px -2px rgba(11, 19, 32, 0.8)',
        'header-light': '0 4px 20px -2px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
