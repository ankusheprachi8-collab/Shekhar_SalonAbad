import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // This tells Tailwind to look in ALL subfolders for ANY .js, .ts, .jsx, .tsx, .mdx files
    // starting from the root of your project. This is the most robust setting.
    "./{app,components,pages}/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: { 50: '#FCFCFA', 100: '#F5F5F0', 200: '#EBEBE0' },
        charcoal: { 800: '#2D2D2D', 900: '#1A1A1A' },
        bronze: { 400: '#C5A059', 500: '#A68442', 600: '#8A6D36' },
        sage: { 100: '#E6E8E3', 900: '#2C3E33' }
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
};
export default config;