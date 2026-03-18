export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        lightBlue: "#009EE3", // light blue theme (daylight ocean)
        darkBlue: "#003057", // dark blue theme (midnight ocean)
      },
      fontFamily: {
        ranchers: ["Ranchers", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
