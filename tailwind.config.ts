import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      backgroundImage: {
        "blog-arc":
          "linear-gradient(118deg,  rgba(217, 217, 217, 0.00) 16%, #030014 52.7%)",
        "blog-arc-left":
          "linear-gradient(242deg, rgba(217, 217, 217, 0.00) 16%, #030014 52.7%)",
        "blog-arc-inside":
          "radial-gradient(23.75% 20.36% at 50% 1.99%, #08022A 0%, #05011D 34.08%, #070224 63.43%, #030014 100%)",
        "blog-arc-main":
          "linear-gradient(179deg, #F5D0FE -11.49%, #7E22CE 18.99%, #1E1B4B 53.86%)",
        "blog-arc-second":
          "linear-gradient(180deg, #060317 -7.87%, #7E22CE 23.9%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "merriweather-regular": "Merriweather-Regular",
      },
      keyframes: {
        rotate: {
          "0%, 100%": { transform: "rotate(-201deg)" },
          "100%": { transform: "rotate(159deg)" },
        },
        "ping-lg": {
          "90%, 100%": {
            transform: "scale(1.5)",
            opacity: "0",
          },
        },
      },
      animation: {
        normal: "rotate 3s infinite linear",
        "ping-normal": "ping-lg 2s cubic-bezier(0, 0, 0.2, 1) infinite;",
      },
    },
  },
  plugins: [],
};
export default config;
