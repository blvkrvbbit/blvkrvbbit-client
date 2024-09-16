import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        grid: 'grid 15s linear infinite',
      },
      keyframes: {
        grid: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      colors: {
        ...colors,
        // Configure your color palette here
        onyx: '#474448',
        white: '#ffffff',
        gray: '#848C8E',
        purple: '#9730db',
        black: '#272932',
        keppel: '#1ac5b0',
        blue: '#37ebf3',
        yellow: '#fdf500',
        pink: '#e455ae',
        ['smoky-black']: '#0e1212',
        ['steel-pink']: '#cb1dcd',
        ['pale-silver']: '#d1c5c0',
        green: '#06D6A0',
      },
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        '.container': {
          margin: '0 auto',
          maxWidth: 'calc(100% - 32px)',
          '@screen sm': {
            maxWidth: 'calc(640px - 96px)',
          },
          '@screen md': {
            maxWidth: 'calc(760px - 96px)',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1400px',
          },
        },
      });
    },
  ],
};
export default config;
