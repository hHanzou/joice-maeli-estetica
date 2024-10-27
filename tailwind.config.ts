import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pbase: "var(--pallete-base)",
        pdark: "var(--pallete-dark)",
        porange: "var(--pallete-orange)",
        plorange: "var(--pallete-lorange)",
        ptlorange: "var(--pallete-t-base)",
        pdorange: "var(--pallete-dorange)",
      },
      fontFamily: {
        "dancing-script": ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
