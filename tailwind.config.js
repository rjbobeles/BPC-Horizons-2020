module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px', 
      md: '768px', 
      lg: '1024px', 
      xl: '1280px'
    }, 
    colors: {
      kofi: '#7D5E33', 
      cocoa: '#554632', 
      roast: '#333', 
      smoke: '#9C9B99', 
      ceramic: '#fff'
    }, 
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
