import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Includes all files in the app directory
    './pages/**/*.{js,ts,jsx,tsx}', // Ensures all pages are scanned for Tailwind classes
    './components/**/*.{js,ts,jsx,tsx}', // Scans the components directory
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000', // Default black
        white: '#ffffff', // Default white
        blue: {
          400: '#60a5fa', // Custom blue shade
        },
        gray: {
          100: '#f5f5f5', // Light gray
        },
        green: {
          900: '#344E41', // Dark green for shadow
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Poppins font as the primary option
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'], // Default fallback sans-serif fonts
      },
      animation: {
        'shadow-flow': 'shadowFlow 2s linear infinite', // Smooth shadow animation
      },
      keyframes: {
        shadowFlow: {
          '0%': {
            boxShadow: '0 0 10px rgba(52, 78, 65, 0.5)', // Initial shadow
          },
          '50%': {
            boxShadow: '0 0 30px rgba(52, 78, 65, 1)', // Maximum shadow
          },
          '100%': {
            boxShadow: '0 0 10px rgba(52, 78, 65, 0.5)', // Return to initial
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
