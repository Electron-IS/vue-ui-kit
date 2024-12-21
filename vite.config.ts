import { resolve } from 'path';
import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';

const getFormatName = (format: string): string => (format === 'es' ? 'js' : 'cjs');

export const temp = {
  esbuild: {
    pure: [],
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({}),
      ],
    },
  },
  build: {
    sourcemap: true,
    cssCodeSplit: true,
    // cssMinify: false,
    minify: true,
    target: 'esnext',
    lib: {
      entry: 'src/components/index.ts',
      name: 'vue-ui-kit',
      formats: ['es', 'cjs'],
      fileName: (format) => `vue-ui-kit.${getFormatName(format)}`,
    },
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
};

export default defineConfig(({ command, mode }): UserConfig => {
  if (command === 'serve') {
    // dev specific config
    return temp as UserConfig;
  }
  // command === 'build'

  return temp as UserConfig;
});
