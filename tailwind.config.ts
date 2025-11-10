import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EFF6FF",
          600: "#2563EB",
          700: "#1D4ED8",
          900: "#0B1220"
        }
      }
    },
  },
  plugins: [],
};

export default config;
