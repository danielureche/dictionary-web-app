import type { Config } from "tailwindcss";

const config: Config = {
    content:[
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Lora', 'serif'],
                mono: ['Inconsolata', 'monospace'],
            },
            colors: {
                purple: {
                    400: '#A445ED',
                    500: '#8F32D6',
                    600: '#7F2BB9',
                    800: '#5A1B8A',
                    900: '#3F1366',
                }
            }
        },
    },
    plugins: [],
};

export default config;
