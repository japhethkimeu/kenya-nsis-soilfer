/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // SoilFER / NSIS brand palette extracted from logo
        soil: {
          cyan:    '#00AEEF',  // SoilFER sky blue
          brown:   '#6B3A1F',  // earth / soil tone
          green:   '#2E7D32',  // KALRO green / agriculture
          amber:   '#E8930A',  // warm harvest accent
          orange:  '#C85C1A',  // terracotta secondary
          cream:   '#F5F0E8',  // light soil background
          dark:    '#1A1008',  // near-black for text
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'hero': "url('/static/nsis_kenya/assets/background-photo.png')",
      }
    },
  },
  plugins: [],
}
