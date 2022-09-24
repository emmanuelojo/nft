/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "n-bg": "rgb(21,178,229)",
        "n-bg-sec": "rgba(255,255,255,0.9)",
        "n-black": "#04111d",
        "n-gray": "#707a83",
        "n-green": "#34c778",
        "n-black-10%": "rgba(0,0,0,0.1)",
        "n-transparent-bg": "rgba(4,17,29,0.3)",
        "n-blue": "#1868b7",
        "n-blue-sec": "#2081e2",
        "n-gray-sec": "rgb(229,232,235)",
      },
      backgroundImage: {
        "n-blue-gradient":
          'url("https://opensea.io/static/images/magellan-gradient-light.png")',
        "n-blue-gradient-sm":
          'url("https://opensea.io/static/images/magellan-gradient-light-sm.png")',
      },
      gridTemplateColumns: {
        "n-20-fr": "repeat(20,1fr)",
        "n-14": "repeat(14,minmax(86px,1fr))",
        "n-10": "repeat(10,minmax(86px,1fr))",
        "n-10-fr": "repeat(10,1fr)",
        "n-8-fr": "repeat(8,1fr)",
        "n-4-fr": "repeat(4,1fr)",
      },
    },
  },
  plugins: [],
};
