/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        pallete: {
          gray: {
            primary: "#F4F6FC",
          },
          red: {
            alert: "#fa6e59",
          },
          blue: {
            primary: "#1ABCFE",
            dark: "#1C1E53",
          },
          main: "#6c63ff",
        },
      },
    },
  },
  plugins: [],
};
