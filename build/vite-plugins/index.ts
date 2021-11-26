import type { Plugin } from 'vite';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Markdown from 'vite-plugin-md';

import { ViteEnv } from '../utils';
import { configHtmlPlugin } from './html';
import { configStyleImportPlugin } from './styleImport';
import { configHtmlDevPlugin } from './html-dev';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean, isLib?: boolean) {
  const { VITE_APP_SITE } = viteEnv;

  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue({
      include: isLib ? [/\.vue$/] : [/\.vue$/, /\.md$/], // <--
    }),
    // have to
    vueJsx(),
  ];

  // vite-plugin-html
  if (!isLib) {
    vitePlugins.push(Markdown());
    if (VITE_APP_SITE) {
      vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));
    } else {
      vitePlugins.push(configHtmlDevPlugin(viteEnv));
    }
  }

  vitePlugins.push(configStyleImportPlugin());

  return vitePlugins;
}
