/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        xs: "0px 1px 2px rgba(0, 0, 0, 0.05)",
        sm: "0px 1px 3px rgba(0, 0, 0, 0.08)",
        md: "0px 2.5px 4px -1px rgba(0, 0, 0, 0.15)",
        lg: "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
        xl: "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
        "2xl": "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
        flat: "0px 1px 0px #E4E4E7",
        inside: "inset 0px 2px 4px #525252",
        "button-focus": "0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #3B82F6",
      },
    },
  },
  plugins: [],
};
