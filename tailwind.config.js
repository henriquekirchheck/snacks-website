/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      aria: {
        current: "current=true",
      },
    },
  },
  plugins: [],
};
