# Water Pro

Following the Ant Design specification, we developed a Vue UI library `antd` that contains a set of high quality components and demos for building rich, interactive user interfaces.

<div class="pic-plus">
  <img width="150" src="/src/assets/logo.png" />
  <span>+</span>
  <img width="160" src="https://qn.antdv.com/vue.png" />
</div>

<style>
.pic-plus > * {
  display: inline-block !important;
  vertical-align: middle;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 20px;
}
</style>

## Version

- Stable: [![npm package](https://img.shields.io/npm/v/ant-design-vue?style=flat-square)](https://www.npmjs.org/package/@fe6/water-pro)
- Next: [![npm package](https://img.shields.io/npm/v/@fe6/water-pro/next.svg?style=flat-square)](https://www.npmjs.org/package/@fe6/water-pro)

## Features

- An enterprise-class UI design language for web applications.
- A set of high-quality Vue components out of the box.
- Shared [Ant Design of React](https://ant.design/docs/spec/introduce) design resources.

## Environment Support

- Modern browsers. You can use [1.x](https://1x.antdv.com/) for IE9+.
- Server-side Rendering
- [Electron](https://electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Electron |
| --- | --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## Installation

### Using npm or yarn

**We recommend using npm or yarn to install**，it not only makes development easier，but also allow you to take advantage of the rich ecosystem of Javascript packages and tooling.

```bash
$ npm install @fe6/water-pro@next --save
```

```bash
$ yarn add @fe6/water-pro@next
```

### Import in Browser

Add `script` and `link` tags in your browser and use the global variable `antd`.

We provide `waterPro.js` `waterPro.css` and `waterPro.min.js` `waterPro.min.css` under `@fe6/water-pro/dist` in waterPro's npm package. You can also download these files directly from [![jsdelivr](https://data.jsdelivr.com/v1/package/npm/@fe6/water-pro/badge)](https://www.jsdelivr.com/package/npm/@fe6/water-pro) or [UNPKG](https://unpkg.com/@fe6/water-pro/dist/).

> **We strongly discourage loading the entire files** this will add bloat to your application and make it more difficult to receive bugfixes and updates. Antd is intended to be used in conjunction with a build tool, such as [webpack](https://webpack.github.io/), which will make it easy to import only the parts of antd that you are using.

> Note: you should import [dayjs](https://day.js.org/) before using antd.js.

## Usage

```jsx
import { DatePicker } from '@fe6/water-pro';
app.use(DatePicker);
```

And import stylesheets manually:

```jsx
import '@fe6/water-pro/dist/water.css'; // or '@fe6/water-pro/dist/water.less'
```

### Use modularized water

- Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

  ```jsx
  // .babelrc or babel-loader option
  {
    "plugins": [
      ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }] // `style: true` for less
    ]
  }
  ```

  > Note: Don't set `libraryDirectory` if you are using webpack 1.

  This allows you to import components from antd without having to manually import the corresponding stylesheet. The antd babel plugin will automatically import stylesheets.

  ```jsx
  // import js and css modularly, parsed by babel-plugin-import
  import { DatePicker } from '@fe6/water-pro';
  ```

- Manually import

  ```jsx
  import DatePicker from '@fe6/water-pro/lib/date-picker'; // for js
  import '@fe6/water-pro/lib/date-picker/style/css'; // for css
  // import '@fe6/water-pro/lib/date-picker/style';         // that will import less
  ```

- For Vite

  ```js
  // vite.config.js
  import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';

  export default {
    plugins: [
      /* ... */
      ViteComponents({
        customComponentResolvers: [AntDesignVueResolver()],
      }),
    ],
  };
  ```

```

## Links

- [Home Page](https://www.antdv.com/)
- [Ant Design Of React](https://ant.design/)
- [Components](https://www.antdv.com/docs/vue/introduce)
- [Change Log](/docs/vue/changelog)
- [CodeSandbox template](https://codesandbox.io/s/agitated-franklin-1w72v) for bug reports
- [Customize Theme](/docs/vue/customize-theme)
- [FAQ](/docs/vue/faq)
- [Support US](/docs/vue/sponsor)
- [Awesome Ant Design](https://github.com/vueComponent/ant-design-vue-awesome)

## Contributing

If you'd like to help us improve antd, just create a [Pull Request](https://github.com/vueComponent/ant-design-vue/pulls). Feel free to report bugs and issues [here](https://vuecomponent.github.io/issue-helper/).

> If you're new to posting issues, we ask that you read [_How To Ask Questions The Smart Way_](http://www.catb.org/~esr/faqs/smart-questions.html) and [How to Ask a Question in Open Source Community](https://github.com/seajs/seajs/issues/545) and [How to Report Bugs Effectively](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html) prior to posting. Well written bug reports help us help you!

## About ant-design-vue

As we all know, Ant Design, as a design language, has gone through many years of iteration and accumulation. Its UI design ideas have become a set of de facto standards and are sought after and loved by many front-end developers and enterprises, and it is also a magic weapon in the hands of React developers. I hope that ant-design-vue will allow Vue developers to enjoy the excellent design of Ant Design.

The ant-design-vue is the Vue implementation of Ant Design. The style of the component is kept in sync with Ant Design. The html structure and css style of the component are also consistent. The style 0 modification is really achieved, and the component API is kept as consistent as possible.

Ant Design Vue is committed to providing programmers with a ** pleasant ** development experience.

## THANK YOU

[Ant Design Team](https://github.com/ant-design/ant-design/blob/master/AUTHORS.txt)
```
