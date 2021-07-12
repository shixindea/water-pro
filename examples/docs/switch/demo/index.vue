<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Disabled from './disabled.vue';
import DisabledString from './disabled.md?raw';
import DisabledCodeString from './disabled.vue?raw';
import Text from './text.vue';
import TextString from './text.md?raw';
import TextCodeString from './text.vue?raw';
import Size from './size.vue';
import SizeString from './size.md?raw';
import SizeCodeString from './size.vue?raw';
import Loading from './loading.vue';
import LoadingString from './loading.md?raw';
import LoadingCodeString from './loading.vue?raw';
import Value from './value.vue';
import ValueString from './value.md?raw';
import ValueCodeString from './value.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Switch 开关

    开关选择器。

    ## 何时使用

    - 需要表示开关状态/两种状态之间的切换时；
    - 和 \`checkbox\`的区别是，切换 \`switch\` 会直接触发状态改变，而 \`checkbox\` 一般用于状态标记，需要和提交操作配合。

    ## 代码演示`,
  us: `# Switch

    Switching Selector.

    ## When To Use

    - If you need to represent the switching between two states or on-off state.
    - The difference between \`Switch\` and \`Checkbox\` is that \`Switch\` will trigger a state change directly when you toggle it, while \`Checkbox\` is generally used for state marking, which should work in conjunction with submit operation.
    ## Examples `,
};
export default {
  category: 'Components',
  subtitle: '开关',
  type: 'Data Entry',
  title: 'Switch',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={DisabledString} code={DisabledCodeString}>
            <Disabled />
          </demo-container>
          <demo-container api={TextString} code={TextCodeString}>
            <Text />
          </demo-container>
          <demo-container api={SizeString} code={SizeCodeString}>
            <Size />
          </demo-container>
          <demo-container api={LoadingString} code={LoadingCodeString}>
            <Loading />
          </demo-container>
          <demo-container api={ValueString} code={ValueCodeString}>
            <Value />
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
