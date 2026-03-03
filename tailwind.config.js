/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff5f0',
          100: '#ffe8dc',
          200: '#ffc9a3',
          300: '#ffaa6f',
          400: '#ff8b3c',
          500: '#ff6b1a',
          600: '#e65a0f',
          700: '#cc4905',
          800: '#b33800',
          900: '#992a00',
        },
        secondary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '4xs': '0.25rem',
        '3xs': '0.5rem',
        '2xs': '0.75rem',
        'xs': '1rem',
        'sm': '1.5rem',
        'md': '2rem',
        'lg': '2.5rem',
        'xl': '3rem',
        '2xl': '3.5rem',
        '3xl': '4rem',
      },
      borderRadius: {
        'xs': '0.25rem',
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 12px rgba(0, 0, 0, 0.12)',
        'hard': '0 8px 24px rgba(0, 0, 0, 0.16)',
      },
      transition: {
        'smooth': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
