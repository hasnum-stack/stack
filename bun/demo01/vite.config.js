import { defineConfig, splitVendorChunkPlugin } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    legacy({
      targets: ['IE >= 10'],
    }),
  ],
  build: {
    minify: false,
  },
});
