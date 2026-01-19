/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9966E6',
        accent: '#FF6699',
        action: '#FF994D',
        highlight: '#4DCCFF',
        success: '#33E699',
        warning: '#FFCC33',
        error: '#FF8080',
        'background-light': '#F2EBFF',
        'background-pink': '#FFF2F9',
        'gradient-start': '#B380FF',
        'gradient-end': '#FF80B3',
        surface: '#FAF7FF',
        'input-background': '#F7F2FF',
        border: '#CCB3F2',
        'input-border': '#B399E6',
        'button-disabled': '#D9D9D9',
        'button-pressed': '#804DCC',
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #B380FF 0%, #FF80B3 100%)',
        'gradient-action': 'linear-gradient(90deg, #9966E6 0%, #FF6699 100%)',
        'gradient-background': 'linear-gradient(135deg, rgba(242, 235, 255, 0.3) 0%, rgba(255, 242, 249, 0.3) 100%)',
        'gradient-personality': 'linear-gradient(90deg, rgba(153, 51, 230, 1) 0%, rgba(230, 77, 153, 1) 50%, rgba(255, 128, 77, 1) 100%)',
      },
    },
  },
  plugins: [],
}
