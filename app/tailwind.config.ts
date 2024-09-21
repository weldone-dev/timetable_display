import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        latin: ["var(--font-latin)", 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;
