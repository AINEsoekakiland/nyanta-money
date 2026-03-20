import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rounded: ["var(--font-rounded)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        primary: "#FF6B35",
        secondary: "#FFD166",
        accent: "#06D6A0",
        sky: "#118AB2",
        purple: "#845EC2",
        cream: "#FFF9F0",
        dark: "#2D2D2D",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        pop: "4px 4px 0px 0px rgba(0,0,0,0.15)",
        "pop-lg": "6px 6px 0px 0px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
