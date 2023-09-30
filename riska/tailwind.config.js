/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      spacing: {
        'custom-length': '55rem',
        'custom-length1': '19rem',
        'custom-size1': '80px',
        'custom-size3': '35vh',
        'custom-size2': '9px',
        'custom-size4': '8vh',
      },
      colors: {
        'color1': '#618264',
        'color2': '#618264',
        'color3': '#B0D9B1',
        'color4': '#D0E7D2',
        'color5': '#EEE3CB',
        'color6': '#D7C0AE',
        'color7': '#6D5D6E',
        'color8': '#272829',
        'color9': '#41644A',
        'color10': '#263A29',
        'color11': '#040D12',
      }
    },
  },
  plugins: [],
}

