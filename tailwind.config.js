module.exports = {
  content: ["./*.html", "./assets/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },

    extend: {
      colors: {
        primary: "#202c03",
        secondary: "#f7a800",
      },

      fontFamily: {
        body: "'Barlow'",
        heading: "'Libre Baskerville'",
      },
    },
  },
  plugins: [],
};
