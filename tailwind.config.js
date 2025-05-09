/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // or 'media'
    theme: {
      extend: {
        colors: {
          primary: '#1f2937',  // Dark gray background
          secondary: '#4b5563', // Muted elements
          accent: '#f59e0b',    // Highlight color (amber)
          rating: '#facc15',    // Star rating color
        },
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
        boxShadow: {
          card: '0 4px 14px rgba(0,0,0,0.15)',
        },
        animation: {
          fadeIn: 'fadeIn 1s ease-in-out',
          pop: 'pop 0.3s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          pop: {
            '0%': { transform: 'scale(0.95)', opacity: 0 },
            '100%': { transform: 'scale(1)', opacity: 1 },
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require( '@tailwindcss/aspect-ratio'),
    ],
}
