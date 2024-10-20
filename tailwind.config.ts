import {nextui} from "@nextui-org/theme";
import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blanco: "#FAFAFA",
        whitesmoke: "#F5F5F5",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primario: {
          50: "#FFFFFF99",
          200: "#777777",
          300: "#2D2A2A",
          400: "#333333",
          500: "#111111",
        },
        secundario: {
          300: "#C7A17A",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
