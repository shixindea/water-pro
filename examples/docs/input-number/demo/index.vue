<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Disabled from './disabled.vue';
import DisabledString from './disabled.md?raw';
import DisabledCodeString from './disabled.vue?raw';
import Digit from './digit.vue';
import DigitString from './digit.md?raw';
import DigitCodeString from './digit.vue?raw';
import Formatter from './formatter.vue';
import FormatterString from './formatter.md?raw';
import FormatterCodeString from './formatter.vue?raw';
import Size from './size.vue';
import SizeString from './size.md?raw';
import SizeCodeString from './size.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 数字输入框
  通过鼠标或键盘，输入范围内的数值。
  ## 何时使用
  当需要获取标准数值时。
        ## 代码演示`,
  us: `# InputNumber
  Enter a number within certain range with the mouse or keyboard.
  ## When To Use
  When a numeric value needs to be provided.
  ## Examples
  `,
};
export default {
  category: 'Components',
  subtitle: '数字输入框',
  type: 'Data Entry',
  title: 'InputNumber',
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
          <demo-container api={DisabledString} code={DisabledCodeString}>
            <Disabled />
          </demo-container>
          <demo-container api={DigitString} code={DigitCodeString}>
            <Digit />
          </demo-container>
          <demo-container api={FormatterString} code={FormatterCodeString}>
            <Formatter />
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
