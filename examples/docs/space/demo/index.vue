<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Vertical from './vertical.vue';
import VerticalString from './vertical.md?raw';
import VerticalCodeString from './vertical.vue?raw';
import Size from './size.vue';
import SizeString from './size.md?raw';
import SizeCodeString from './size.vue?raw';
import Align from './align.vue';
import AlignString from './align.md?raw';
import AlignCodeString from './align.vue?raw';
import Customize from './customize.vue';
import CustomizeString from './customize.md?raw';
import CustomizeCodeString from './customize.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Space 间距
  设置组件之间的间距。
  ## 何时使用
  避免组件紧贴在一起，拉开统一的空间。
  - 适合行内元素的水平间距。
  - 可以设置各种水平对齐方式。
  ## 代码演示`,
  us: `# Space
  Set components spacing.
  # When To Use
  Avoid components clinging together and set a unified space.
  ## Examples
  `,
};
export default {
  category: 'Components',
  subtitle: '间距',
  type: 'Layout',
  title: 'Space',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={VerticalString} code={VerticalCodeString}>
            <Vertical />
          </demo-container>
          <demo-container api={SizeString} code={SizeCodeString}>
            <Size />
          </demo-container>
          <demo-container api={AlignString} code={AlignCodeString}>
            <Align />
          </demo-container>
          <demo-container api={CustomizeString} code={CustomizeCodeString}>
            <Customize />
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

<style scoped></style>
