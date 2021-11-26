/**
 * Plugin to minimize and use ejs template syntax in index.html.
 * https://github.com/anncwb/vite-plugin-html
 */
import type { ViteEnv } from '../utils';
 
 import htmlTemplate from 'vite-plugin-html-mpa'
 
 export function configHtmlDevPlugin(env: ViteEnv) {
  const { VITE_APP_ENV } = env;
  const isDemo = VITE_APP_ENV === 'demo';
  const index = {
    template: isDemo ? 'demo/index.html':'index.html',
    entry: isDemo ? 'demo/index-dev.ts': 'examples/index.ts',
  };
  const htmlPlugin: any = htmlTemplate({
    pagesDir: isDemo?'demo':'examples',
    pages: {
      index,
    },
    data: {
      title: 'Home Page',
    },
  });
   return htmlPlugin;
 }
 