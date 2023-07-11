module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkmode: "class", 
  theme: {
    extend: {
      
    },
  },
  plugins: [   require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['dark']
}
}