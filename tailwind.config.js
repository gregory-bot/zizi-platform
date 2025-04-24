/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2f2',
          100: '#cce6e6',
          200: '#99cccc',
          300: '#66b3b3',
          400: '#339999',
          500: '#008080', // Main primary color
          600: '#006666',
          700: '#004d4d',
          800: '#003333',
          900: '#001a1a',
        },
        secondary: {
          50: '#f5f9ff',
          100: '#ebf3ff',
          200: '#d6e7ff',
          300: '#c2dbff',
          400: '#99c3ff',
          500: '#4d91ff', // Main secondary color
          600: '#3366cc',
          700: '#264d99',
          800: '#193366',
          900: '#0d1a33',
        },
        accent: {
          50: '#fff9eb',
          100: '#ffefc4',
          200: '#ffe49d',
          300: '#ffd876',
          400: '#ffcd4f',
          500: '#ffc229', // Main accent color
          600: '#cc9b21',
          700: '#997419',
          800: '#664d10',
          900: '#332708',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)',
        'medium': '0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -2px rgba(0,0,0,0.04)',
      }
    },
  },
  plugins: [],
};