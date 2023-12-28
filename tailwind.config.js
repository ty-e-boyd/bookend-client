module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        white: '#EEE0CB',
        black: '#0B0A07',
        primary: '#839788',
        secondary: '#C16200',
        warning: '#A62639'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
