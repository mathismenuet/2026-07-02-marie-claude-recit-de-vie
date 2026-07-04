/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': 'var(--dark-green)',
        'medium-dark-green': 'var(--medium-dark-green)',
        'button-hover': 'var(--button-hover)',
        'body-green': 'var(--body-green)',
        'heading-primary': 'var(--heading-primary)',
        'heading-accent': 'var(--heading-accent)',
        'bottom-text': 'var(--bottom-text)',
        'bottom-btn': 'var(--bottom-btn)',
        'bottom-btn-hover': 'var(--bottom-btn-hover)',
        'bg-light': 'var(--bg-light)',
      },
      fontFamily: {
        sans: ['Neue Haas Grotesk Display Pro 55 Roman', 'Neue Haas Grotesk Text Pro', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
