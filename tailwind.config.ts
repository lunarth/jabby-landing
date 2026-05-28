import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        jabby: {
          blue: "#1B4B9B",
          orange: "#E8651A",
          text: "#111827",
          muted: "#6B7280",
          border: "#E5E7EB",
          bg: "#F8FAFC",
          lightBlue: "#EEF4FF",
          lightOrange: "#FFF4ED",
          lightGreen: "#F4FBF6",
          success: "#16A34A"
        }
      },
      boxShadow: {
        card: "0 24px 60px rgba(17, 24, 39, 0.08)",
        soft: "0 14px 40px rgba(27, 75, 155, 0.10)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" }
        },
        typebar: {
          "0%, 18%": { transform: "translateY(0)" },
          "25%, 43%": { transform: "translateY(-2.5rem)" },
          "50%, 68%": { transform: "translateY(-5rem)" },
          "75%, 93%": { transform: "translateY(-7.5rem)" },
          "100%": { transform: "translateY(0)" }
        },
        draw: {
          "0%": { strokeDashoffset: "420" },
          "100%": { strokeDashoffset: "0" }
        }
      },
      animation: {
        "fade-up": "fade-up 700ms ease both",
        "slide-in": "slide-in 650ms ease both",
        "pulse-soft": "pulse-soft 2.8s ease-in-out infinite",
        typebar: "typebar 9s ease-in-out infinite",
        draw: "draw 2.4s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
