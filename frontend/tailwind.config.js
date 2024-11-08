/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue", // for Nuxt 3
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
