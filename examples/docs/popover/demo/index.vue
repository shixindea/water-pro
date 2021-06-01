<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import ArrowCenter from './arrow-point-at-center.vue';
import ArrowCenterString from './arrow-point-at-center.md?raw';
import ArrowCenterCodeString from './arrow-point-at-center.vue?raw';
import Control from './control.vue';
import ControlString from './control.md?raw';
import ControlCodeString from './control.vue?raw';
import Placement from './placement.vue';
import PlacementString from './placement.md?raw';
import PlacementCodeString from './placement.vue?raw';
import TriggerType from './triggerType.vue';
import TriggerTypeString from './triggerType.md?raw';
import TriggerTypeCodeString from './triggerType.vue?raw';
import HoverWithClick from './hover-with-click.vue';
import HoverWithClickString from './hover-with-click.md?raw';
import HoverWithClickCodeString from './hover-with-click.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Popover

  点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 何时使用

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

和 \`Tooltip\` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。
            ## 代码演示`,
  us: `# Popover

  The floating card popped by clicking or hovering.

## When To Use

A simple popup menu to provide extra information or operations.

Comparing with \`Tooltip\`, besides information \`Popover\` card can also provide action elements like links and buttons.
## Examples
  `,
};
export default {
  category: 'Components',
  subtitle: '气泡卡片',
  type: 'Data Display',
  title: 'Popover',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={ArrowCenterString} code={ArrowCenterCodeString}>
            <ArrowCenter />
          </demo-container>
          <demo-container api={ControlString} code={ControlCodeString}>
            <Control />
          </demo-container>
          <demo-container api={PlacementString} code={PlacementCodeString}>
            <Placement />
          </demo-container>
          <demo-container api={TriggerTypeString} code={TriggerTypeCodeString}>
            <TriggerType />
          </demo-container>
          <demo-container api={HoverWithClickString} code={HoverWithClickCodeString}>
            <HoverWithClick />
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
