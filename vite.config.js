import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [
    reactRefresh(),
  ],
  assetsInclude: ["**/*.png", "**/*.PNG"],
  css: {
    postcss: './postcss.config.cjs',
  },
});
