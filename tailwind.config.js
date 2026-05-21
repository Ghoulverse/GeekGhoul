/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'ghoul-bg': '#0a0a0f',
        'ghoul-card': 'rgba(10, 10, 15, 0.9)',
        'ghoul-cyan': '#00d4ff',
        'ghoul-green': '#00ff41',
        'ghoul-amber': '#f59e0b',
        'ghoul-magenta': '#ff00ff',
        'ghoul-text': '#e2e8f0',
        'ghoul-muted': '#64748b',
        'ghoul-dim': '#334155',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'glow': '0 0 20px rgba(0, 212, 255, 0.4), 0 0 40px rgba(0, 255, 65, 0.2)',
        'glow-intense': '0 0 30px rgba(0, 212, 255, 0.6), 0 0 60px rgba(0, 255, 65, 0.3)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "ghost-bob": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "ghost-sway": {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { filter: "drop-shadow(0 0 10px #00d4ff) drop-shadow(0 0 20px #00ff41)" },
          "50%": { filter: "drop-shadow(0 0 20px #00d4ff) drop-shadow(0 0 40px #00ff41)" },
        },
        "glow-intense": {
          "0%, 100%": { filter: "drop-shadow(0 0 20px #00d4ff) drop-shadow(0 0 40px #00ff41)" },
          "50%": { filter: "drop-shadow(0 0 35px #00d4ff) drop-shadow(0 0 70px #00ff41)" },
        },
        "pulse-hint": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(4px)" },
        },
        "screen-shake": {
          "0%, 100%": { transform: "translate(0)" },
          "10%": { transform: "translate(-6px, -3px)" },
          "20%": { transform: "translate(6px, 3px)" },
          "30%": { transform: "translate(-4px, 2px)" },
          "40%": { transform: "translate(4px, -2px)" },
          "50%": { transform: "translate(-3px, 3px)" },
          "60%": { transform: "translate(3px, -3px)" },
          "70%": { transform: "translate(-2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "90%": { transform: "translate(-1px, 1px)" },
        },
        "terminal-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "float-around": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(30px, -20px)" },
          "50%": { transform: "translate(-20px, 30px)" },
          "75%": { transform: "translate(20px, 20px)" },
        },
        "scanline": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "ghost-bob": "ghost-bob 2.5s ease-in-out infinite",
        "ghost-sway": "ghost-sway 3.5s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "glow-intense": "glow-intense 1.5s ease-in-out infinite",
        "pulse-hint": "pulse-hint 2s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 0.4s ease-in-out infinite",
        "screen-shake": "screen-shake 0.5s ease-in-out",
        "terminal-blink": "terminal-blink 1s step-end infinite",
        "float-around": "float-around 8s ease-in-out infinite",
        "scanline": "scanline 4s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
