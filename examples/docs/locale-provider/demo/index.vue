<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import All from './all.vue';
import AllString from './all.md?raw';
import AllCodeString from './all.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# ConfigProvider 全局化配置

为组件提供统一的全局化配置。

ConfigProvider 使用 Vue 的 [provide / inject](https://vuejs.org/v2/api/#provide-inject) 特性，只需在应用外围包裹一次即可全局生效。

`,
  us: `## API

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| locale | language package setting, you can find the packages in this path: \`ant-design-vue/lib/locale-provider/\` | object | - |
`,
};
export default {
  category: 'Components',
  subtitle: '国际化',
  cols: 1,
  type: 'Other',
  title: 'LocaleProvider',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={AllString} code={AllCodeString}>
            <All />
          </demo-container>
        </demo-sort>
        <api>
          <CN />
        </api>
      </div>
    );
  },
};
</script>
