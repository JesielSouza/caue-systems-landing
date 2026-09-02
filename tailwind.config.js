/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0F1411',
        bg2: '#1A221D',
        bg3: '#1F2922',
        border: '#27322B',
        border2: '#2F3C34',
        text: '#EAF2EC',
        text2: '#8FA39A',
        text3: '#6F857A',
        accent: '#C68A2B',
        accentDim: '#3A2A14',
        accentText: '#0F1411',
        green: '#C68A2B',
        green2: '#A97020',
        green3: '#E0A040',
        emeraldAccent: '#10B981',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      }
    },
  },
  plugins: [],
}
