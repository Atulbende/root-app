import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({

  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes:   {
        login:  `http://localhost:3001/assets/remoteEntry.js`,
        home: 'http://localhost:3002/assets/remoteEntry.js',
      },
      exposes: {
        './toast': './src/utils/toast.js',
      },
      
      shared: ['react', 'react-dom', 'react-router-dom','sonner'],
    }),
  ],
  server: {  headers: {
    'Access-Control-Allow-Origin': '*',
  },port: 3000 },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
