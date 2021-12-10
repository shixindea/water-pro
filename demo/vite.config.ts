import path from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import htmlTemplate from 'vite-plugin-html-mpa';

import defaultVar from '../scripts/default-vars';

export default {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@fe6/water-pro/es': path.resolve(__dirname, '../components'),
      '@fe6/water-pro': path.resolve(__dirname, '../components'),
    },
  },
  server: {
    port: 5000,
    hmr: {
      overlay: true,
    },
  },
  plugins: [
    vueJsx({
      mergeProps: false,
      enableObjectSlots: false,
    }),
    vue({
      include: [/\.vue$/],
    }),
    htmlTemplate({
      pagesDir: 'demo',
      pages: {
        index: {
          template: path.resolve(__dirname, '../demo/index.html'),
          entry: path.resolve(__dirname, '../demo/main.ts'),
        },
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          ...defaultVar,
        },
        javascriptEnabled: true,
      },
    },
  },
};
