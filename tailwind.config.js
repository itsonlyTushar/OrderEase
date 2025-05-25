/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "var(--color-main)",
        grayText: "var(--gray-text)",
        blackBg: "var(--black-color)",
        whiteBg: "var(--white-bg)",
      },
    },
  },
  plugins: [],
};
