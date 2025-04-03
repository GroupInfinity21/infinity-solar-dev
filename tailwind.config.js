/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#123c6f',
        secondary: '#040f58',
        accent: '#f35425',
      },
      fontSize: {
        'custom': '15px',  // Cria a classe `text-custom`
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        ethnocentric: ['Ethnocentric', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
