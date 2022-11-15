module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  // safelist: ["bg-blue-50"],
  darkMode: "class",
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F8F5FF',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          600: '#642eff',
          800: '#2F225F',
          900: '#150042',
          920: '#2F225F',
          940: '#1A094A',
          960: '#170545',
          980: '#150042',

        },
      },
      fontFamily: {
        sans: "'Poppins',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
        // serif: ["PT Serif", "serif"],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.875rem' }],
        '5xl': ['3rem', { lineHeight: '1.1872' }],
        '6xl': ['3.75rem', { lineHeight: '1.1872' }],
        '7xl': ['4.5rem', { lineHeight: '1.1872' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },

      
      
      // lineHeight: {
      //   tighter: '1.125',
      // },
      maxWidth: ({ theme, breakpoints }) => ({
        '8xl': '84rem',
        ...breakpoints(theme('screens')),
      }),


    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
