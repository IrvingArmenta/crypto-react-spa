import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  globalCss: {
    body: {
      fontFamily: '"Work Sans", Helvetica, Arial, sans-serif'
    }
  },
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {}
  },

  importMap: '@style',

  conditions: {
    dark: '[data-theme=dark] &'
  },

  // The output directory for your css system
  outdir: 'styled-system'
});
