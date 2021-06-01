<script lang="jsx">
import LocaleString from './locale.md?raw';
import Locale from './locale.vue';
import LocaleCodeString from './locale.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# ConfigProvider 全局化配置
为组件提供统一的全局化配置。`,
  us: `# ConfigProvider
\`ConfigProvider\` provides a uniform configuration support for components.
`,
};
export default {
  category: 'Components',
  subtitle: '全局化配置',
  cols: 1,
  type: '其他',
  title: 'ConfigProvider',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <demo-container api={LocaleString} code={LocaleCodeString}>
            <Locale />
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
