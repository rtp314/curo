/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, loadEnv, UserConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src'),
        },
      ],
    },
    plugins: [react()],
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
    build: {
      outDir: '../public',
      assetsDir: 'static',
      sourcemap: false,
    },
    server: {
      host: process.env.VITE_DEV_HOST || 'localhost',
      port: process.env.VITE_DEV_PORT ? Number(process.env.VITE_DEV_PORT) : 3006,
      open: true,
    },
    esbuild: {
      // jsxFactory: 'jsx',
      // jsxInject: 'import { jsx } from \'@emotion/react\'',
    },
  } satisfies UserConfig;
});
