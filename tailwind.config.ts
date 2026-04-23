import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1440px'
      }
    },
    extend: {
      colors: {
        background: '#080A0D',
        foreground: '#F7F8FA',
        card: '#0F1218',
        muted: '#A0A6B3',
        accent: '#00A3FF',
        border: 'rgba(255,255,255,0.1)'
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 35px rgba(0,163,255,0.35)'
      },
      backgroundImage: {
        noise: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.08) 0, transparent 24%), radial-gradient(circle at 80% 0, rgba(0,163,255,0.15) 0, transparent 36%)'
      }
    }
  },
  plugins: []
};

export default config;
