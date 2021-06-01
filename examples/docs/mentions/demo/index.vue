<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Async from './async.vue';
import AsyncString from './async.md?raw';
import AsyncCodeString from './async.vue?raw';
// import Form from './form.vue';
// import FormString from './form.md?raw';
// import FormCodeString from './form.vue?raw';
import Prefix from './prefix.vue';
import PrefixString from './prefix.md?raw';
import PrefixCodeString from './prefix.vue?raw';
import Readonly from './readonly.vue';
import ReadonlyString from './readonly.md?raw';
import ReadonlyCodeString from './readonly.vue?raw';
import Placement from './placement.vue';
import PlacementString from './placement.md?raw';
import PlacementCodeString from './placement.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Mentions提及 (版本：1.5.0+)
          提及组件。
## 何时使用
- 用于在输入中提及某人或某事，常用于发布、聊天或评论功能。

          ## 代码演示`,
  us: `# Mentions (Version: 1.5.0+)
      Mention component.
## When To Use
- When need to mention someone or something.
## Examples `,
};
export default {
  category: 'Components',
  subtitle: '提及',
  type: 'Data Entry',
  title: 'Mentions',

  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={AsyncString} code={AsyncCodeString}>
            <Async />
          </demo-container>
          <demo-container api={PrefixString} code={PrefixCodeString}>
            <Prefix />
          </demo-container>
          <demo-container api={ReadonlyString} code={ReadonlyCodeString}>
            <Readonly />
          </demo-container>
          <demo-container api={PlacementString} code={PlacementCodeString}>
            <Placement />
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
