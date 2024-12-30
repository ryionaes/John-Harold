import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}', // Make sure all pages are included
    './components/**/*.{js,ts,jsx,tsx}', // Add any other directories where you're using Tailwind CSS
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        blue: {
          400: '#60a5fa',
        },
        gray: {
          100: '#f5f5f5',
        },
        green: {
          900: '#344E41', // Dark green for shadow
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Poppins font
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'], // Default sans-serif font
      },
      animation: {
        'shadow-flow': 'shadowFlow 2s linear infinite', // Animation for green shadow
      },
      keyframes: {
        shadowFlow: {
          '0%': {
            boxShadow: '0 0 10px rgba(52, 78, 65, 0.5)', // Starting shadow (dark green)
          },
          '50%': {
            boxShadow: '0 0 30px rgba(52, 78, 65, 1)', // Midpoint shadow (dark green)
          },
          '100%': {
            boxShadow: '0 0 10px rgba(52, 78, 65, 0.5)', // Ending shadow (dark green)
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
