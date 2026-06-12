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
          blueHover: "#163E82",
          navy: "#0F2C5C",
          navyDeep: "#0A1E40",
          orange: "#E8651A",
          orangeDark: "#C24A0B",
          ink: "#111827",
          muted: "#6B7280",
          faint: "#9CA3AF",
          border: "#E5E7EB",
          bg: "#F8F9FA",
          tintBlue: "#EEF3FB",
          tintOrange: "#FDEFE4",
          tintGreen: "#EAF7EF",
          success: "#15803D"
        }
      },
      maxWidth: {
        shell: "1200px"
      },
      boxShadow: {
        hairline: "0 1px 2px rgba(16, 24, 40, 0.05)",
        card: "0 1px 2px rgba(16, 24, 40, 0.04), 0 1px 3px rgba(16, 24, 40, 0.04)",
        lift: "0 12px 32px -12px rgba(16, 24, 40, 0.14)",
        mockup:
          "0 1px 2px rgba(16, 24, 40, 0.05), 0 24px 64px -24px rgba(15, 44, 92, 0.28)"
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif"
        ]
      },
      letterSpacing: {
        eyebrow: "0.14em"
      }
    }
  },
  plugins: []
};

export default config;
