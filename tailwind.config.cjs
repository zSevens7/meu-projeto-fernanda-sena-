/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // Adicionando as famílias de fontes personalizadas
      fontFamily: {
        // A classe `font-serif` usará 'Playfair Display'
        serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        // A classe `font-sans` usará 'Montserrat'
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      // Adicionando as novas cores personalizadas
      colors: {
        'light-gold': '#E6D7B4',
        'dark-green': '#2E4E1E',
        'medium-green': '#4A7C3E',
        'soft-green': '#A8C4A2',
        'accent-green': '#6B8E23',
        'background-green': '#F0F4F1',
        'gold-accent': '#D4AF37',
        'gold-yellow': '#FFD700',
        'white-smoke': '#F5F5F5',
        'white-cream': '#FFFDD0',
        'dark-olive': '#556B2F',
        'forest-green': '#228B22',
        'sage-green': '#B2AC88',
        'mint-green': '#98FF98',
        'olive-green': '#808000',
        'charcoal-gray': '#36454F',
        // Nome da cor corrigido, sem espaço.
        'forest-green-2': '#014421',
        'bottle-green': '#006A4E',
      },
      // Adicionando text shadows personalizados
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.2)',
        'DEFAULT': '0 2px 4px rgba(0, 0, 0, 0.4)',
        'md': '0 3px 6px rgba(0, 0, 0, 0.6)',
        'lg': '0 4px 8px rgba(0, 0, 0, 0.8)',
        'none': 'none',
      },
    },
  },
  plugins: [
    // Plugin que adiciona as classes de sombreamento de texto (text-shadow)
    function({ addUtilities, theme, e }) {
      const textShadows = theme('textShadow');
      const utilities = Object.entries(textShadows).map(([key, value]) => {
        return {
          [`.${e(`text-shadow-${key}`)}`]: {
            textShadow: value,
          },
        };
      });
      addUtilities(utilities, ['responsive', 'hover']);
    },
  ],
};
