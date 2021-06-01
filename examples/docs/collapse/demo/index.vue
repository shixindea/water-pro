<script lang="jsx">
import BasicString from './basic.md?raw';
import Basic from './basic.vue';
import BasicCodeString from './basic.vue?raw';
import AccordionString from './accordion.md?raw';
import Accordion from './accordion.vue';
import AccordionCodeString from './accordion.vue?raw';
import CustomString from './custom.md?raw';
import Custom from './custom.vue';
import CustomCodeString from './custom.vue?raw';
import MixString from './mix.md?raw';
import Mix from './mix.vue';
import MixCodeString from './mix.vue?raw';
import NoarrowString from './noarrow.md?raw';
import Noarrow from './noarrow.vue';
import NoarrowCodeString from './noarrow.vue?raw';
import ExtraString from './extra.md?raw';
import Extra from './extra.vue';
import ExtraCodeString from './extra.vue?raw';
import BorderlessString from './borderless.md?raw';
import Borderless from './borderless.vue';
import BorderlessCodeString from './borderless.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Collapse折叠面板

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- '手风琴' 是一种特殊的折叠面板，只允许单个内容区域展开。

          ## 代码演示`,
  us: `# Collapse
A content area which can be collapsed and expanded.
## When To Use

- Can be used to group or hide complex regions to keep the page clean.
- 'Accordion' is a special kind of 'Collapse', which allows only one panel to be expanded at a time.
## Examples
`,
};
export default {
  category: 'Components',
  type: 'Data Display',
  zhType: '数据展示',
  title: 'Collapse',
  subtitle: '折叠面板',
  cols: 1,
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={AccordionString} code={AccordionCodeString}>
            <Accordion />
          </demo-container>
          <demo-container api={MixString} code={MixCodeString}>
            <Mix />
          </demo-container>
          <demo-container api={BorderlessString} code={BorderlessCodeString}>
            <Borderless />
          </demo-container>
          <demo-container api={CustomString} code={CustomCodeString}>
            <Custom />
          </demo-container>
          <demo-container api={NoarrowString} code={NoarrowCodeString}>
            <Noarrow />
          </demo-container>
          <demo-container api={ExtraString} code={ExtraCodeString}>
            <Extra />
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
