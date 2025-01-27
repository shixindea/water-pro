# Water Pro

这里是 Ant Design 的 Vue 实现，开发和服务于企业级后台产品。

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

## 版本

- 稳定版：[![npm package](https://img.shields.io/npm/v/ant-design-vue?style=flat-square)](https://www.npmjs.org/package/@fe6/water-pro)

- 下个版本：[![npm package](https://img.shields.io/npm/v/@fe6/water-pro/next.svg?style=flat-square)](https://www.npmjs.org/package/@fe6/water-pro)

## 特性

- 提炼自企业级中后台产品的交互语言和视觉风格。
- 开箱即用的高质量 Vue 组件。
- 共享[Ant Design of React](http://ant-design.gitee.io/docs/spec/introduce-cn)设计工具体系。

## 支持环境

- 现代浏览器, 如果需要支持 IE9，你可以选择使用 [3.x 版本](https://1x.antdv.com/)。
- 支持服务端渲染。
- [Electron](https://electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Electron |
| --- | --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 安装

### 使用 npm 或 yarn 安装

**我们推荐使用 npm 或 yarn 的方式进行开发**，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```bash
$ npm install @fe6/water-pro@next --save
```

```bash
$ yarn add @fe6/water-pro@next
```

### 浏览器引入

在浏览器中使用 `script` 和 `link` 标签直接引入文件，并使用全局变量 `antd`。

我们在 npm 发布包内的 `@fe6/water-pro/dist` 目录下提供了 `waterPro.js` `waterPro.css` 以及 `waterPro.min.js` `waterPro.min.css`。你也可以通过 [![jsdelivr](https://data.jsdelivr.com/v1/package/npm/@fe6/water-pro/badge)](https://www.jsdelivr.com/package/npm/@fe6/water-pro) 或 [UNPKG](https://unpkg.com/@fe6/water-pro/dist/) 进行下载。

> **强烈不推荐使用已构建文件**，这样无法按需加载，而且难以获得底层依赖模块的 bug 快速修复支持。

> 注意：引入 waterPro.js 前你需要自行引入 [dayjs](https://day.js.org/)。

## 示例

```jsx
import { DatePicker } from '@fe6/water-pro';
app.use(DatePicker);
```

引入样式：

```jsx
import '@fe6/water-pro/dist/waterPro.css'; // or '@fe6/water-pro/dist/water.less'
```

### 按需加载

下面两种方式都可以只加载用到的组件。

- 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（推荐）。

  ```jsx
  // .babelrc or babel-loader option
  {
    "plugins": [
      ["import", { "libraryName": "waterPro", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
    ]
  }
  ```

  > 注意：webpack 1 无需设置 `libraryDirectory`。

  然后只需从 `@fe6/water-pro` 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。

  ```jsx
  // babel-plugin-import 会帮助你加载 JS 和 CSS
  import { DatePicker } from '@fe6/water-pro';
  ```

- 手动引入

  ```jsx
  import DatePicker from '@fe6/water-pro/lib/date-picker'; // 加载 JS
  import '@fe6/water-pro/lib/date-picker/style/css'; // 加载 CSS
  // import '@fe6/water-pro/lib/date-picker/style';         // 加载 LESS
  ```

- Vite 按需

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

## 链接

- [更新日志](/docs/vue/changelog-cn)
- [定制主题](/docs/vue/customize-theme-cn)
- [常见问题](/docs/vue/faq-cn)
- [支持我们](/docs/vue/sponsor-cn)
- [Awesome Ant Design](https://github.com/vueComponent/ant-design-vue-awesome)
