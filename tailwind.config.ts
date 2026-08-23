import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        void: "rgb(var(--void) / <alpha-value>)",
        bone: "rgb(var(--bone) / <alpha-value>)",
        ash: "rgb(var(--ash) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        flare: "rgb(var(--flare) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        xs: ["11px", { letterSpacing: "0.02em" }],
        sm: ["13px", { letterSpacing: "0.02em" }],
        base: ["15px", { letterSpacing: "0" }],
        md: ["20px", { letterSpacing: "0" }],
        lg: ["32px", { letterSpacing: "0" }],
        xl: ["56px", { letterSpacing: "0.02em" }],
        "2xl": ["96px", { letterSpacing: "0.02em" }],
      },
      letterSpacing: {
        nav: "0.02em",
        label: "0.12em",
        wordmark: "0.28em",
        wordmarkWide: "0.4em",
      },
      maxWidth: {
        content: "1600px",
      },
      spacing: {
        section: "160px",
        "section-mobile": "80px",
        gutter: "24px",
        "gutter-mobile": "16px",
      },
      borderRadius: {
        none: "0px",
        DEFAULT: "0px",
      },
      transitionTimingFunction: {
        entrance: "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      transitionDuration: {
        micro: "400ms",
        section: "800ms",
        page: "1200ms",
      },
      aspectRatio: {
        product: "3 / 4",
        editorial: "16 / 10",
        "hero-desktop": "21 / 9",
        "hero-mobile": "4 / 5",
        portrait: "1 / 1",
      },
    },
  },
  plugins: [],
};
export default config;
