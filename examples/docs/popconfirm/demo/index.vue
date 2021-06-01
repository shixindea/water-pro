<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Local from './local.vue';
import LocalString from './local.md?raw';
import LocalCodeString from './local.vue?raw';
import Placement from './placement.vue';
import PlacementString from './placement.md?raw';
import PlacementCodeString from './placement.vue?raw';
import DynamicTrigger from './dynamic-trigger.vue';
import DynamicTriggerString from './dynamic-trigger.md?raw';
import DynamicTriggerCodeString from './dynamic-trigger.vue?raw';
import Icon from './icon.vue';
import IconString from './icon.md?raw';
import IconCodeString from './icon.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Popconfirm

  点击元素，弹出气泡式的确认框。

  ## 何时使用

  目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。

和 'confirm' 弹出的全屏居中模态对话框相比，交互形式更轻量。
            ## 代码演示`,
  us: `# Popconfirm

  A simple and compact confirmation dialog of an action.

  # When To Use

  A simple and compact dialog used for asking for user confirmation.

  The difference with the 'confirm' modal dialog is that it's more lightweight than the static popped full-screen confirm modal.
  ## Examples
  `,
};
export default {
  category: 'Components',
  subtitle: '气泡确认框',
  type: 'Feedback',
  title: 'Popconfirm',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={LocalString} code={LocalCodeString}>
            <Local />
          </demo-container>
          <demo-container api={PlacementString} code={PlacementCodeString}>
            <Placement />
          </demo-container>
          <demo-container api={DynamicTriggerString} code={DynamicTriggerCodeString}>
            <DynamicTrigger />
          </demo-container>
          <demo-container api={IconString} code={IconCodeString}>
            <Icon />
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
