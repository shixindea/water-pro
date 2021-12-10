import type { UserConfig, ConfigEnv } from 'vite';

import path from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import htmlTemplate from 'vite-plugin-html-mpa';

import md from '../plugin/md';
import docs from '../plugin/docs';
import { additionalData } from './themeConfig';
import defaultVar from '../scripts/default-vars';

export function configHtmlDevPlugin(env: any) {
  const { VITE_APP_ENV } = env;
  const isDemo = VITE_APP_ENV === 'demo';
  const index = {
    template: isDemo ? 'site/index.html' : 'site/demo.html',
    entry: isDemo ? '/index.ts' : '/demo.ts',
  };
  const htmlPlugin: any = htmlTemplate({
    pagesDir: 'site',
    pages: {
      index,
    },
  });
  return htmlPlugin;
}

/**
 * @type {import('vite').UserConfig}
 */
export default ({ mode }: ConfigEnv): UserConfig => {
  return {
    resolve: {
      alias: {
        vue: 'vue/dist/vue.esm-bundler.js',
        '@fe6/water-pro/es': path.resolve(__dirname, '../components'),
        '@fe6/water-pro': path.resolve(__dirname, '../components'),
      },
    },
    server: {
      port: 5000,
      // Load proxy configuration from .env
      hmr: {
        overlay: true,
      },
    },
    plugins: [
      vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
        mergeProps: false,
        enableObjectSlots: false,
      }),
      docs(),
      md(),
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      configHtmlDevPlugin(mode),
    ],
    optimizeDeps: {
      include: [
        'fetch-jsonp',
        '@ant-design/icons-vue',
        'lodash-es',
        'dayjs',
        'vue',
        'vue-router',
        'vue-i18n',
        'async-validator',
      ],
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true;@import "${require.resolve(
              '../components/style/color/colorPalette.less',
            )}";`,
            ...defaultVar,
          },
          javascriptEnabled: true,
          // includePaths: ["node_modules/"],
          additionalData,
        },
      },
    },
  };
};
