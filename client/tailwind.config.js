// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        globalblack: "var(--globalblack)",
        "variable-collection-global-tan": "var(--variable-collection-global-tan)",
        "variable-collection-global-white": "var(--variable-collection-global-white)",
      },
    },
  },
  plugins: [],
};