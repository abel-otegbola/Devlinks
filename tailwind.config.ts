import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#633CFF",
        "secondary": "#BEADFF",
        "tetiary": "#EFEBFF",
        "black": "#333333",
        "brown": "#737373",
        "gray": "#D9D9D9",
        "slate": "#FAFAFA",
        "red": "#FF3939",
        "github": "#1A1A1A",
        "youtube": "#EE3939",
        "linkedin": "#2D68FF",
        "facebook": "#1877F2",
        "x": "#000000",
        "pinterest": "#BD081C",
        "whatsapp": "#075E54",
        "tumblr": "#35465D",
        "reddit": "#FF4500",
        "twitch": "#9146FF",
        "discord": "5865F2",
      },
      boxShadow: {
        "input-active" : "0px 0px 32px 0px #633CFF40"
      }
    },
  },
  plugins: [],
};

export default config;