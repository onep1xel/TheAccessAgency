module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  // safelist: ["bg-blue-50"],
  darkMode: "class",
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sand: {
          light: '#EDEDE6',
          regular: '#D6D6CE',
          dark: '#B5B5B0',
        },
        whale: {
          light: '#6E99C4',
          regular: '#253148',
          dark: '#181F2D',
        },
        mint: {
          light: '#E5F3EB',
          regular: '#8DC6B3',
          dark: '#7CAA99',
        },
        rose: {
          light: '#EFACAB',
          regular: '#DC4B36',
          dark: '#C63D32',
        },
      },
      fontFamily: {
        sans: "'degular',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
        serif: ["Faustina", "serif"],
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
      typography: {
        DEFAULT: {
          css: {
            color: '#253148',
            fontWeight: 400,
            lineHeight: 1.3,
            fontSize: '1.8125rem',
            fontFamily: 'Faustina',
            'h1, h2, h3, h4, h5, h6': { 
              marginBottom: '1.1669rem !important',
              fontFamily: 'degular',
              lineHeight: 1,
            },
            //p: {fontFamily: 'Faustina'},
            h2: {
              fontWeight: 700,
              fontSize: '2.6875rem',
              
            },
            h3: {
              fontWeight: 600,
              fontSize: '2.5rem',
            },
            h4: {
              fontWeight: 600,
              fontSize: '2.3331rem',
            },
            h5: {
              fontWeight: 800,
              fontSize: '1.75rem',
              textTransform: 'uppercase',
            },
          },
        },
      },
      
      
      // lineHeight: {
      //   tighter: '1.125',
      // },
      maxWidth: ({ theme, breakpoints }) => ({
        '8xl': '82.5rem',
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
