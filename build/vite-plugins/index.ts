import type { Plugin } from 'vite';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Markdown from 'vite-plugin-md';

import { ViteEnv } from '../utils';
import { configHtmlPlugin } from './html';
// import { configCompressPlugin } from './compress';
import { configStyleImportPlugin } from './styleImport';
// import { configImageminPlugin } from './imagemin';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  // const { VITE_USE_IMAGEMIN, VITE_BUILD_COMPRESS } = viteEnv;

  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    // have to
    vueJsx(),
    Markdown(),
  ];

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));


  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin());

  // The following plugins only work in the production environment
  // if (isBuild) {
    //vite-plugin-imagemin
    // VITE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin());

    // rollup-plugin-gzip
  //   vitePlugins.push(configCompressPlugin(VITE_BUILD_COMPRESS));
  // }

  return vitePlugins;
}
