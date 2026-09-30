/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // Watches all your React files
  ],
  safelist: [
    'highlight-day', // ✅ Force keep this class
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'],
      },
      colors: {
        // Main sections
        cream: "#f5f3ec",     // Top hero background (light beige)
        paper: "#ffffff",     // Mid section (pure white)
        tan: "#dcd0b4",       // Bottom section (light tan / sand)

        // Brand + UI elements
        base: "#f7f6f1",      // Overall fallback bg
        accent: "#eae6da",    // Light card background
        soil: "#3e2f24",      // Deep footer brown / dark text
        leaf: "#7cb342",      // Heading green / highlight
        sprout: "#388e3c",    // CTA button green
      },
    },
  },
  plugins: [],
};
