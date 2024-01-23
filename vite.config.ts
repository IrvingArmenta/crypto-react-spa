import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { dependencies } from './package.json';
import EnvironmentalPlugin from 'vite-plugin-environment';
import path from 'path';

function renderChunks(deps: Record<string, string>) {
  const chunks = {};
  Object.keys(deps).forEach((key) => {
    if (['react', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ...renderChunks(dependencies)
        }
      }
    }
  },
  plugins: [
    react(),
    tsconfigPaths(),
    createSvgIconsPlugin({
      // https://github.com/vbenjs/vite-plugin-svg-icons
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-first',
      customDomId: '__svg__icons__dom__'
    }),
    EnvironmentalPlugin(['GECKO_COIN_API'])
  ]
});
