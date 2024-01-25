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
    tokens: {
      colors: {
        'gray.50': {
          value: '#f9fafb'
        },
        'gray.100': {
          value: '#f3f4f6'
        },
        'gray.200': {
          value: '#e5e7eb'
        },
        'gray.300': {
          value: '#d1d5db'
        },
        'gray.400': {
          value: '#9ca3af'
        },
        'gray.500': {
          value: '#6b7280'
        },
        'gray.600': {
          value: '#4b5563'
        },
        'gray.700': {
          value: '#374151'
        },
        'gray.800': {
          value: '#1f2937'
        },
        'gray.900': {
          value: '#111827'
        },
        'gray.950': {
          value: '#030712'
        }
      }
    },
    semanticTokens: {
      colors: {
        negativeRed: { value: '#f6475d' },
        positiveGreen: { value: '#0dcb81' },
        iconDefault: { value: 'gray.950' }
      }
    },
    extend: {
      breakpoints: {
        sm: '360px',
        md: '640px',
        lg: '860px',
        xl: '1280px',
        '2xl': '1536px'
      },
      tokens: {
        animations: {
          fadeIn: {
            value: 'fadeIn 0.5s ease-in-out forwards'
          }
        }
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)'
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          }
        }
      }
    }
  },

  conditions: {
    dark: '[data-theme=dark] &'
  },

  importMap: '@style',
  watch: true,
  hash: true,

  presets: ['@pandacss/preset-base'],

  // The output directory for your css system
  outdir: 'styled-system'
});
