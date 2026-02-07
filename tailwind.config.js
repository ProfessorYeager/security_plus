/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // We might add custom colors here later based on design
                'cyber-black': '#0a0a0a',
                'cyber-green': '#00ff41',
                'cyber-blue': '#00f0ff',
            }
        },
    },
    plugins: [],
}
