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
            padding: "1rem"
        },
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                'merriweather-regular': 'Merriweather-Regular'
            },
            keyframes: {
                rotate: {
                    '0%, 100%': { transform: 'rotate(-201deg)' },
                    '100%': { transform: 'rotate(159deg)' },
                }
            },
            animation: {
                "normal": 'rotate 3s infinite linear'
            }
        },
    },
    plugins: [],
};
export default config;
