/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",

    '../../packages/**/*/.{js, ts, jsx, tsx}',
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      oceanBlue: '#116AE3',
      aboveOcean: '#2b83fe',
      deepOcean:'#0f5dcb',
      midnight:'#333333',
      silver:'#C4C4C4',
      white:'#fff',
    },
    fontSize: {
      'xs': '.8rem',
      'sm':'1rem',
      'md':'1.5rem',
      'lg':"2rem",
      'xl':'2.5rem',
      '2xl':'3rem',
      '3xl':'4rem',
    },
    screens: {
      xxs:'300px',
      xs:'400px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      monsterrat: ['monsterrat', 'sans-serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}