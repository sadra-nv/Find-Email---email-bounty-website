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
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "1.5rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      screens: { xs: "25rem" },
      backgroundImage: {
        "orange-grad-btn": "linear-gradient(90deg, #C24B76 0%, #FD8330 100%)",
        "how-circle":
          "radial-gradient(55.49% 57.73% at 49.86% 50%,#7a3da9 0%,rgba(46, 14, 113, 0.46) 88.64%)",
        "how-box":
          "linear-gradient(180deg, rgba(3, 0, 21, 0.8) 47.63%, rgba(46, 14, 113, 0.9) 60.96%, #F5D0FE 108.35%)",
        "how-box-2":
          " linear-gradient(180deg, rgba(3, 0, 21, 0.00) 54.09%, #2E0E71 100%)",
        "how-box-3":
          "linear-gradient(180deg, rgba(3, 0, 20, 0.0) 20.62%, #030014 62.62%)",
        "how-btn":
          "linear-gradient(180deg, rgba(29, 255, 228, 0.20) 0%, rgba(3, 166, 0, 0.20) 100%)",
        "how-circle-2":
          "linear-gradient(358deg, rgba(3, 0, 20, 0.00) 56.46%, rgba(46, 14, 113, 0.35) 97.98%)",
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
        "pyramid-left":
          "linear-gradient(221deg, rgba(3, 0, 21, 0.00) 60.95%, rgba(3, 0, 21, 0.50) 71.31%, #030015 84.88%)",
        "pyramid-right":
          " linear-gradient(-221deg, rgba(3, 0, 21, 0.00) 60.95%, rgba(3, 0, 21, 0.50) 71.31%, #030015 84.88%)",
        "pyramid-bottom":
          "linear-gradient(178deg, rgba(3, 0, 21, 0.00) 34.17%, rgba(3, 0, 21, 0.50) 61.68%, #030015 97.71%)",
        "pyramid-top":
          "linear-gradient(3deg, rgba(3, 0, 21, 0.00) 38.71%, #030015 83.18%, #030015 103.81%)",
        "pyramid-tl":
          "linear-gradient(312deg, rgba(3, 0, 21, 0.00) 57.55%, rgba(3, 0, 21, 0.50) 63.98%, #030015 72.4%)",
        "pyramid-tr":
          "linear-gradient(50deg, rgba(3, 0, 21, 0.00) 57.55%, rgba(3, 0, 21, 0.50) 63.98%, #030015 72.4%)",
      },
      colors: {
        background: "#030015",
        "back-dark": "#0a142f",
        "highlight-med": "#7a3da9",
        "highlight-dark": "#2e0e71",
        "highlight-light": "#f5d0fe",
      },

      keyframes: {
        "how-circle": {
          "0%": { opacity: "1", transform: "scale(0%)" },
          "100%": { opacity: "0", transform: "scale(100%)" },
        },
        database: {
          "0%": { transform: "translateY(0rem)" },
          "100%": { transform: "translateY(-1rem)" },
        },
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
        "3d-qa": {
          "0%": {
            transform: "translateY(0rem)  translateX(0%)",
          },
          "25%": {
            transform: "translateY(0.8rem) translateX( 0.4rem)",
          },
          "50%": {
            transform: "translateY(0rem) translateX(-0.6rem)",
          },
          "75%": {
            transform: "translateY(-0.4rem) translateX(+ 0.6rem)",
          },
          "100%": {
            transform: "translateY(0rem) translateX(0%)",
          },
        },
      },
      animation: {
        "logo-spin": "spin ease 5s infinite",
        "how-circle": "how-circle ease 1.8s infinite",
        "how-circle2": "how-circle ease 1.8s 0.3s  infinite",
        "how-circle3": "how-circle ease 1.8s  0.6s infinite",
        "3d-qa": "3d-qa 7s linear infinite alternate",
        blob: "pulse 3s ease infinite alternate",
        databse: "database 3s ease infinite alternate",
        normal: "rotate 3s infinite linear",
        "ping-normal": "ping-lg 2s cubic-bezier(0, 0, 0.2, 1) infinite;",
      },
      boxShadow: {
        "api-code": "0px 2px 250px 0px rgba(55, 14, 44, 0.78)",
      },
    },
  },
  plugins: [],
};
export default config;
