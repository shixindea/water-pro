<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Disabled from './disabled.vue';
import DisabledString from './disabled.md?raw';
import DisabledCodeString from './disabled.vue?raw';
import RadioButton from './radioButton.vue';
import RadioButtonString from './radioButton.md?raw';
import RadioButtonCodeString from './radioButton.vue?raw';
import RadioGroupMore from './radioGroup-more.vue';
import RadioGroupMoreString from './radioGroup-more.md?raw';
import RadioGroupMoreCodeString from './radioGroup-more.vue?raw';
import RadioGroupOptions from './radioGroup-options.vue';
import RadioGroupOptionsString from './radioGroup-options.md?raw';
import RadioGroupOptionsCodeString from './radioGroup-options.vue?raw';
import RadioGroupWithName from './radioGroup-with-name.vue';
import RadioGroupWithNameString from './radioGroup-with-name.md?raw';
import RadioGroupWithNameCodeString from './radioGroup-with-name.vue?raw';
import RadioGroup from './radioGroup.vue';
import RadioGroupString from './radioGroup.md?raw';
import RadioGroupCodeString from './radioGroup.vue?raw';
import RadioButtonSolid from './radioButton-solid.vue';
import RadioButtonSolidString from './radioButton-solid.md?raw';
import RadioButtonSolidCodeString from './radioButton-solid.vue?raw';
import Size from './size.vue';
import SizeString from './size.md?raw';
import SizeCodeString from './size.vue?raw';

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
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={DisabledString} code={DisabledCodeString}>
            <Disabled />
          </demo-container>
          <demo-container api={RadioButtonString} code={RadioButtonCodeString}>
            <RadioButton />
          </demo-container>
          <demo-container api={RadioButtonSolidString} code={RadioButtonSolidCodeString}>
            <RadioButtonSolid />
          </demo-container>
          <demo-container api={RadioGroupMoreString} code={RadioGroupMoreCodeString}>
            <RadioGroupMore />
          </demo-container>
          <demo-container api={RadioGroupOptionsString} code={RadioGroupOptionsCodeString}>
            <RadioGroupOptions />
          </demo-container>
          <demo-container api={RadioGroupWithNameString} code={RadioGroupWithNameCodeString}>
            <RadioGroupWithName />
          </demo-container>
          <demo-container api={RadioGroupString} code={RadioGroupCodeString}>
            <RadioGroup />
          </demo-container>
          <demo-container api={SizeString} code={SizeCodeString}>
            <Size />
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
