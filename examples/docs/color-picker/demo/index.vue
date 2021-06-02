<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Size from './size.vue';
import SizeString from './size.md?raw';
import SizeCodeString from './size.vue?raw';
import Predefine from './predefine.vue';
import PredefineString from './predefine.md?raw';
import PredefineCodeString from './predefine.vue?raw';
import Empty from './empty.vue';
import EmptyString from './empty.md?raw';
import EmptyCodeString from './empty.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Input 输入框
          基于 [@simonwep/pickr](https://github.com/Simonwep/pickr) 的封装。用于颜色选择，支持多种格式。。
## 何时使用
- 需要选择颜色。
- 对现有颜色不满意，需要定制。
          ## 代码演示`,
  us: `# ColorPicker
          TODO.
## Examples `,
};
export default {
  category: 'Components',
  subtitle: '输入框',
  type: 'Data Entry',
  title: 'ColorPicker',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={SizeString} code={SizeCodeString}>
            <Size />
          </demo-container>
          <demo-container api={PredefineString} code={PredefineCodeString}>
            <Predefine />
          </demo-container>
          <demo-container api={EmptyString} code={EmptyCodeString}>
            <Empty />
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
<style></style>
