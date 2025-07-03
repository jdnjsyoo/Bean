module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {"variable-collection-background": "var(--variable-collection-background)",
                "variable-collection-theme-color": "var(--variable-collection-theme-color)",
      }
    },
  },
  plugins: [],
}

