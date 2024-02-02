// tailwind.config.js
module.exports = {
  // Other Tailwind CSS configuration...

  // Specify the content sources
  content: [
    "./apps/mern-todolist/**/*.{js,ts,jsx,tsx}", // Include JavaScript and TypeScript files
    "./apps/**/*.html",          // Include HTML files
  ],
  theme: {
    colors: {
      customblue: "#2b1887",
      textWhite: "#ffffff",
      bgWhite: "#ffffff",
      bgRed: "#e42c5f",
      textBlack: "#000000",
      iconBg: "#735efa",
      dayGrayBg: "#d9d9d9",
      cardBg: "#f5f2ff"
    }
  }

  // Other Tailwind CSS configuration...
};
