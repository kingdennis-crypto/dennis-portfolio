module.exports = {
  content: [
    "./src/**/*.{js,ts}",
    "./components/**/*.{js,ts}",
    "./pages/**/*.{js,ts}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('autoprefixer')
  ],
}
