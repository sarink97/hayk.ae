import type { Config } from "tailwindcss";
import scrollbarPlugin from 'tailwind-scrollbar';
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cerise: "#E12454",
        prussianBlue : "#223645",
        grey: "#CBCBCF",
        white : "#FFFFFF"
      },
      keyframes: {
        'border-spin': {
          '0%': { borderColor: 'black' },
          '100%': { borderColor: '#E12454' },
        },
      },
      animation: {
        'border-spin-once': 'border-spin 0.3s linear forwards',
      },
    },
  },
  plugins: [scrollbarPlugin],
};
export default config;
