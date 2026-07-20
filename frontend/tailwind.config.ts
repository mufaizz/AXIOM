
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages//*.{ts,tsx}",
    "./components//.{ts,tsx}",
    "./hooks/**/.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0b0f17", soft: "#1a2030", mute: "#2a3142" },
        accent: { DEFAULT: "#6366f1", glow: "#818cf8" },
        canvas: { DEFAULT: "#f8fafc", grid: "#e2e8f0" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        math: ["KaTeX_Main", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
