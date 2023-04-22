import path from 'path';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import react from '@vitejs/plugin-react-swc';

const envVars = {
  VAULT_API_URL: 'http://localhost:4000',
};

export default () =>
  defineConfig({
    plugins: [react(), EnvironmentPlugin(envVars)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  });
