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
                },
                'ping-lg': {
                    "90%, 100%" :{
                        transform: 'scale(1.5)',
                        opacity: '0'
                    }
                }
            },
            animation: {
                "normal": 'rotate 3s infinite linear',
                "ping-normal": 'ping-lg 2s cubic-bezier(0, 0, 0.2, 1) infinite;',
            }
        },
    },
    plugins: [],
};
export default config;
