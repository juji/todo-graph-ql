/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],

  daisyui:{
    styled: true,
    themes: ["light", "night"],
    base: true,
    utils: true,
    logs: true,
    darkTheme: "night"
  }
}
