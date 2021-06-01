<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import CustomIcon from './custom-icon.vue';
import CustomIconString from './custom-icon.md?raw';
import CustomIconCodeString from './custom-icon.vue?raw';
import CustomStyle from './custom-style.vue';
import CustomStyleString from './custom-style.md?raw';
import CustomStyleCodeString from './custom-style.vue?raw';
import Duration from './duration.vue';
import DurationString from './duration.md?raw';
import DurationCodeString from './duration.vue?raw';
import Placement from './placement.vue';
import PlacementString from './placement.md?raw';
import PlacementCodeString from './placement.vue?raw';
import WithBtn from './with-btn.vue';
import WithBtnString from './with-btn.md?raw';
import WithBtnCodeString from './with-btn.vue?raw';
import WithIcon from './with-icon.vue';
import WithIconString from './with-icon.md?raw';
import WithIconCodeString from './with-icon.vue?raw';
import Update from './update.vue';
import UpdateString from './update.md?raw';
import UpdateCodeString from './update.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 通知提醒框
全局展示通知提醒信息。
## 何时使用
在系统四个角显示通知提醒信息。经常用于以下情况：
- 较为复杂的通知内容。
- 带有交互的通知，给出用户下一步的行动点。
- 系统主动推送。

## 代码演示`,
  us: `# Notification
Display a notification message globally.
## When To Use
To display a notification message at any of the four corners of the viewport. Typically it can be
used in the following cases:
- A notification with complex content.
- A notification providing a feedback based on the user interaction. Or it may show some details
  about upcoming steps the user may have to follow.
- A notification that is pushed by the application.
## Examples `,
};
export default {
  category: 'Components',
  type: 'Feedback',
  noinstant: true,
  title: 'Notification',
  subtitle: '通知提醒框',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={CustomIconString} code={CustomIconCodeString}>
            <CustomIcon />
          </demo-container>
          <demo-container api={CustomStyleString} code={CustomStyleCodeString}>
            <CustomStyle />
          </demo-container>
          <demo-container api={DurationString} code={DurationCodeString}>
            <Duration />
          </demo-container>
          <demo-container api={PlacementString} code={PlacementCodeString}>
            <Placement />
          </demo-container>
          <demo-container api={WithBtnString} code={WithBtnCodeString}>
            <WithBtn />
          </demo-container>
          <demo-container api={WithIconString} code={WithIconCodeString}>
            <WithIcon />
          </demo-container>
          <demo-container api={UpdateString} code={UpdateCodeString}>
            <Update />
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
