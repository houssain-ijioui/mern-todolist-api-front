// tailwind.config.js
module.exports = {
  // Other Tailwind CSS configuration...

  // Specify the content sources
  content: [
    "./apps/mern-todolist/**/*.{js,ts,jsx,tsx}", // Include JavaScript and TypeScript files
    "./apps/**/*.html",          // Include HTML files
    'node_modules/flowbite-react/lib/esm/**/*.js',

  ],

  plugins: [
    // ...
    require('flowbite/plugin'),
  ],

  // Other Tailwind CSS configuration...
};
