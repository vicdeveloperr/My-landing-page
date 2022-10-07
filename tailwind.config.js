/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./cerebro/index.js"],
  theme: {
    extend: {
      colors: {
        'oscuro': '#111',
        'azul': '#3a00ff',
        'claro': '#f2f2f2',
        'amarilloClaro': '#ffd429',
        'amarilloIntenso': '#ffba14'
      },
      boxShadow: {
        'sombraBotones': '0px 0px 17px 4px rgba(58,0,255,0.24)',
        'sombra': '0px 0px 11px 0px rgba(58,0,255,0.24)'
      },
      screens: {
      '276': '276px',
      '425': '425px',
      '450': '450px',
      '546': '546px',
      '570': '570px',
      '586': '586px',
      '600': '600px',
      '674': '674px',
      '700': '700px',
      'sm': '640px',
      'md': '768px',
      '818': '818px',
      '850': '850px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
      }
    },
  },
  plugins: [],
}
