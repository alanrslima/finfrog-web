import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        dark: "#2C2C2C",
        "gray-dark": "#363636",
        gray: "#5A5A5A",
        "gray-light": "#D8D8D8",
        "yellow-dark": "#E1BA58",
        "yellow-light": "#F6D78B",
        "green-dark": "#8CA573",
        "green-light": "#C6D0BC",
        surface: "#F1EEE4",
        "surface-light": "#F8F7F1",
      },
    },
  },
  plugins: [],
};
export default config;
