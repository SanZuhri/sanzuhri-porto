import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'hsl(var(--foreground) / 0.9)',
            a: {
              color: 'hsl(var(--primary))',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: 'hsl(var(--foreground))',
              fontWeight: '700',
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
              marginTop: '1.5em',
              marginBottom: '0.75em',
              scrollMarginTop: '2rem',
            },
            h1: {
              fontSize: '2.25rem',
              lineHeight: 1.1,
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              fontWeight: '800',
            },
            h2: {
              fontSize: '1.75rem',
              marginTop: '2.5rem',
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid hsl(var(--border) / 0.2)',
            },
            h3: {
              fontSize: '1.4rem',
              marginTop: '2rem',
              marginBottom: '0.75rem',
            },
            'p, ul, ol, pre, blockquote': {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            'ul, ol': {
              paddingLeft: '1.5em',
            },
            'ul > li, ol > li': {
              marginTop: '0.5em',
              marginBottom: '0.5em',
              paddingLeft: '0.25em',
            },
            'ul > li::marker': {
              color: 'hsl(var(--muted-foreground) / 0.7)',
            },
            'ol > li::marker': {
              color: 'hsl(var(--muted-foreground) / 0.7)',
              fontWeight: '600',
            },
            blockquote: {
              borderLeftWidth: '4px',
              borderLeftColor: 'hsl(var(--primary))',
              fontStyle: 'normal',
              paddingLeft: '1.5rem',
              color: 'hsl(var(--muted-foreground))',
              fontWeight: '450',
            },
            code: {
              backgroundColor: 'hsl(var(--muted))',
              borderRadius: '0.25rem',
              padding: '0.2em 0.4em',
              fontSize: '0.9em',
              fontWeight: '500',
              '&::before, &::after': {
                content: 'none',
              },
            },
            'pre': {
              backgroundColor: 'hsl(var(--muted))',
              borderRadius: '0.5rem',
              padding: '1.25rem',
              overflowX: 'auto',
              marginTop: '1.5em',
              marginBottom: '1.5em',
              code: {
                backgroundColor: 'transparent',
                padding: 0,
                fontSize: '0.9em',
                lineHeight: 1.6,
              },
            },
            hr: {
              marginTop: '2.5rem',
              marginBottom: '2.5rem',
              borderColor: 'hsl(var(--border) / 0.3)',
            },
            'figure, img, video': {
              marginTop: '2em',
              marginBottom: '2em',
              borderRadius: '0.5rem',
            },
            figcaption: {
              textAlign: 'center',
              fontSize: '0.875rem',
              color: 'hsl(var(--muted-foreground))',
              marginTop: '0.75em',
            },
            'table, th, td': {
              border: '1px solid hsl(var(--border))',
              borderCollapse: 'collapse',
            },
            'th, td': {
              padding: '0.5rem 1rem',
            },
            th: {
              backgroundColor: 'hsl(var(--muted))',
              textAlign: 'left',
            },
            'tr:nth-child(even)': {
              backgroundColor: 'hsl(var(--muted) / 0.3)',
            },
          },
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.4s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
