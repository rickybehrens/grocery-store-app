import { defineConfig, searchForWorkspaceRoot } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
    fs: {
      allow: [
        // Search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
        // Allow serving files from one level up to the project root
        '..',
        // Paths from your project structure
        '/main/client/src/components',
        '/main/client/src',
      ],
    },
  },
});
