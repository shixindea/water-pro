<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Color from './color.vue';
import ColorString from './color.md?raw';
import ColorCodeString from './color.vue?raw';
import ArrowPointAtCenter from './arrow-point-at-center.vue';
import ArrowPointAtCenterString from './arrow-point-at-center.md?raw';
import ArrowPointAtCenterCodeString from './arrow-point-at-center.vue?raw';
import AutoAdjustOverflow from './auto-adjust-overflow.vue';
import AutoAdjustOverflowString from './auto-adjust-overflow.md?raw';
import AutoAdjustOverflowCodeString from './auto-adjust-overflow.vue?raw';
import Placement from './placement.vue';
import PlacementString from './placement.md?raw';
import PlacementCodeString from './placement.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Tooltip

  简单的文字提示气泡框。

  ## 何时使用

  鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 'title' 提示，提供一个'按钮/文字/操作'的文案解释。
            ## 代码演示`,
  us: `# Tooltip

  A simple text popup tip.

  # When To Use

  - The tip is shown on mouse enter, and is hidden on mouse leave. The Tooltip doesn't support complex text or operations.
  - To provide an explanation of a 'button/text/operation'. It's often used instead of the html 'title' attribute.
  ## Examples
  `,
};
export default {
  category: 'Components',
  subtitle: '文字提示',
  type: 'Data Display',
  title: 'Tooltip',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={ColorString} code={ColorCodeString}>
            <Color />
          </demo-container>
          <demo-container api={PlacementString} code={PlacementCodeString}>
            <Placement />
          </demo-container>
          <demo-container api={ArrowPointAtCenterString} code={ArrowPointAtCenterCodeString}>
            <ArrowPointAtCenter />
          </demo-container>
          <demo-container api={AutoAdjustOverflowString} code={AutoAdjustOverflowCodeString}>
            <AutoAdjustOverflow />
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
