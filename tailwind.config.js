/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0D0D12',
          secondary: '#13131A',
          card: '#1A1A24',
          elevated: '#22222E',
        },
        text: {
          primary: '#CDCCCA',
          secondary: '#A1A1AA',
          muted: '#797876',
        },
        accent: {
          primary: '#4F98A3',
          secondary: '#6DBF8F',
          amber: '#F59E42',
          purple: '#8B7EC8',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.06)',
          highlight: 'rgba(79, 152, 163, 0.3)',
        },
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', 'sans-serif'],
        body: ['Satoshi', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
