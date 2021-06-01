<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Half from './half.vue';
import HalfString from './half.md?raw';
import HalfCodeString from './half.vue?raw';
import Text from './text.vue';
import TextString from './text.md?raw';
import TextCodeString from './text.vue?raw';
import Disabled from './disabled.vue';
import DisabledString from './disabled.md?raw';
import DisabledCodeString from './disabled.vue?raw';
import Clear from './clear.vue';
import ClearString from './clear.md?raw';
import ClearCodeString from './clear.vue?raw';
import Character from './character.vue';
import CharacterString from './character.md?raw';
import CharacterCodeString from './character.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Rate

  评分组件。

  ## 何时使用

  - 对评价进行展示。
  - 对事物进行快速的评级操作。
            ## 代码演示`,
  us: `# Rate

  Rate component.

  # When To Use

  - Show evaluation.
  - A quick rating operation on something.
  ## Examples
  `,
};
export default {
  category: 'Components',
  subtitle: '评分',
  type: 'Data Entry',
  cols: 1,
  title: 'Rate',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={HalfString} code={HalfCodeString}>
            <Half />
          </demo-container>
          <demo-container api={TextString} code={TextCodeString}>
            <Text />
          </demo-container>
          <demo-container api={DisabledString} code={DisabledCodeString}>
            <Disabled />
          </demo-container>
          <demo-container api={ClearString} code={ClearCodeString}>
            <Clear />
          </demo-container>
          <demo-container api={CharacterString} code={CharacterCodeString}>
            <Character />
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
