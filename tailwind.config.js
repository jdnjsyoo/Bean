module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {"variable-collection-background": "var(--variable-collection-background)",
                "variable-collection-theme-color": "var(--variable-collection-theme-color)",
      }
    },
  },
  plugins: [],
}

