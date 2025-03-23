import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        'primary-dark': 'hsl(var(--primary-dark))',
        secondary: 'hsl(var(--secondary))',
        accent: 'hsl(var(--accent))',
        background: 'hsl(var(--background))',
        text: 'hsl(var(--text))',
        muted: 'hsl(var(--muted))',
      },
      fontFamily: {
        serif: ['var(--font-playfair)'],
        sans: ['var(--font-lora)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;