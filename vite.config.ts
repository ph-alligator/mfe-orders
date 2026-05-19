import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
import path from 'path';
import {
  createRemoteFederation,
  createRemotePreview,
  createRemoteServer,
} from './config/create-remote-federation.mjs';

export default defineConfig({
  plugins: [
    react(),
    federation(
      createRemoteFederation({
        name: 'orders',
        exposes: {
          './App': './src/bootstrap.tsx',
        },
      }),
    ),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: createRemoteServer('orders', '.'),
  preview: createRemotePreview('orders', '.'),
  build: {
    target: 'chrome89',
  },
});
