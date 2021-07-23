<script lang="jsx">
import RadioGroupOptions from './radioGroup-options.vue';
import RadioGroupOptionsString from './radioGroup-options.md?raw';
import RadioGroupOptionsCodeString from './radioGroup-options.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 单选框
  单选框。

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。
        ## 代码演示`,
  us: `# Radio
  Radio.

## When To Use

- Used to select a single state from multiple options.
- The difference from Select is that Radio is visible to the user and can facilitate the comparison of choice, which means there shouldn't be too many of them.
  ## Examples
  `,
};
export default {
  category: 'Components',
  subtitle: '单选框',
  type: 'Data Entry',
  title: 'Radio',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={RadioGroupOptionsString} code={RadioGroupOptionsCodeString}>
            <RadioGroupOptions />
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
