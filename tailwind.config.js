module.exports = {
  purge: ['./pages/**/*.jsx', './components/**/*.jsx'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      sans: ['Mulish', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      primary: '#56CCF2',
      gray: '#505050',
    },
    fontSize: {
      title: '45px',
      base: '16px',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 700,
    },
    boxShadow: {
      default: '0 5px 10px rgba(224, 220, 220, 0.25)',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
  corePlugins: {},
}
