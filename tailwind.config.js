/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./envio-exitoso.html", "./cerebro/envio-formulario-ajax.js"],
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
        'sombraBotones': '0px 0px 17px 4px rgba(58,0,255,0.24)'
      },
      screens: {
      '450': '450px',
      '600': '600px',
      '700': '700px',
      'sm': '640px',
      'md': '768px',
      '850': '850px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
      },
    },
  },
  plugins: [],
}
