/* tailwind.config.ts */
import type { Config } from "tailwindcss"
import plugin          from "tailwindcss/plugin"

const config: Config = {
  darkMode: ["class"],

  /* rutas donde Tailwind debe escanear clases ---------------------- */
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./pages/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
  ],

  theme: {
    container: {
      center  : true,
      padding : "2rem",
      screens : { "2xl": "1400px" },
    },

    extend: {
      /* paleta Otto -------------------------------------------------- */
      colors: {
        border      : "hsl(var(--border))",
        input       : "hsl(var(--input))",
        ring        : "hsl(var(--ring))",
        background  : "hsl(var(--background))",
        foreground  : "hsl(var(--foreground))",

        primary: {
          DEFAULT    : "hsl(var(--primary))",
          foreground : "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT    : "hsl(var(--secondary))",
          foreground : "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT    : "hsl(var(--destructive))",
          foreground : "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT    : "hsl(var(--muted))",
          foreground : "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT    : "hsl(var(--accent))",
          foreground : "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT    : "hsl(var(--popover))",
          foreground : "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT    : "hsl(var(--card))",
          foreground : "hsl(var(--card-foreground))",
        },

        /* —— Colores corporativos —— */
        navy: {
          DEFAULT : "#000D28",
          dark    : "#001B42",
          medium  : "#081F49",
          deep    : "#00081E",
          black   : "#030F1B",
        },
        gold: {
          DEFAULT : "#D7BF80",
          dark    : "#BB9E5F",
          medium  : "#BC9F60",
          light   : "#D1B88A",
        },
        beige       : "#E7E2D6",
        "gray-light": "#EFEFEF",
      },

      fontFamily: {
        sans      : ["var(--font-sans)"],
        logo      : ["var(--font-logo)"],
        secondary : ["var(--font-secondary)"],
      },

      borderRadius: {
        lg : "var(--radius)",
        md : "calc(var(--radius) - 2px)",
        sm : "calc(var(--radius) - 4px)",
      },
    },
  },

  /* plugins extra --------------------------------------------------- */
  plugins: [
    /* texto vertical “COMPRAR” que no sufre con la traducción */
    plugin(({ addUtilities }) => {
      addUtilities({
        ".vertical-text": {
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        },
      })
    }),
  ],
}

export default config
