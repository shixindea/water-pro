/**
 * Plugin to minimize and use ejs template syntax in index.html.
 * https://github.com/anncwb/vite-plugin-html
 */
  import type { Plugin } from 'vite';
 
 import htmlTemplate from 'vite-plugin-html-mpa'
 
 export function configHtmlTempPlugin() {
   const htmlPlugin: Plugin = htmlTemplate({
    // where pages ?
    pagesDir: 'examples',
    // define pages like vue-cli
    pages: {
      index: {
        template: 'index.html',
        title: 'Home Page',
        entry: 'examples/index.ts',
      },
      demo: {
        template: 'demo/index.html',
        title: 'Sub Page',
        entry: 'index-dev.ts',
      },
    },
    // expose to template
    data: {
      title: 'Home Page',
    },
  });
   return htmlPlugin;
 }
 