import type { Config } from 'tailwindcss';

const numbers = [...Array(600).keys()].map((number) => number / 2);

const handleNumbers = (): Record<number, string> => {
  let numberObject = {};

  numbers.forEach((number) => {
    numberObject = { ...numberObject, [number]: `${number / 4}rem` };
  });

  return { 0: '0', ...numberObject };
};

const sizes = handleNumbers();

const withNegative = (object: Record<string, string>): Record<string, string> => {
  let negatives = {};

  Object.keys(object).forEach((key) => {
    // eslint-disable-next-line no-prototype-builtins
    if (object.hasOwnProperty(key)) {
      negatives = { ...negatives, [`-${key}`]: `-${object[key]}` };
    }
  });

  return { ...negatives, ...object };
};
const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '7.75rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      margin: withNegative(sizes),
      spacing: withNegative(sizes),
      inset: withNegative(sizes),
      lineHeight: sizes,
      borderWidth: sizes,
      padding: sizes,
      width: sizes,
      height: sizes,
      maxWidth: sizes,
      maxHeight: sizes,
      minWidth: sizes,
      minHeight: sizes,
      fontSize: sizes,
      letterSpacing: sizes,
      gap: sizes,
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        brand: {
          primary: '#4CAF4F',
          secondary: '#263238'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        text: {
          main: '#18191F'
        },
        neutral: {
          silver: '#F5F7FA',
          grey: '#717171',
          darkGrey: '#4D4D4D'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config;

export default config;
