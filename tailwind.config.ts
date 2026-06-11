import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        // Tokens da marca IMEA — atualizar em lib/brand-tokens.ts também
        'verde-escuro': '#003828',
        'verde-teal': '#056D4F',
        'verde-campo': '#139050',
        'verde-folha': '#C2DCA5',
        'off-white': '#F2EFEB',
        ink: '#1A1A18',
      },
      fontFamily: {
        sans: ['Ubuntu', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
