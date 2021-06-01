<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Color from './color.vue';
import ColorString from './color.md?raw';
import ColorCodeString from './color.vue?raw';
import Pending from './pending.vue';
import PendingString from './pending.md?raw';
import PendingCodeString from './pending.vue?raw';
import Custom from './custom.vue';
import CustomString from './custom.md?raw';
import CustomCodeString from './custom.vue?raw';
import Alternate from './alternate.vue';
import AlternateString from './alternate.md?raw';
import AlternateCodeString from './alternate.vue?raw';
import Right from './right.vue';
import RightString from './right.md?raw';
import RightCodeString from './right.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 时间轴
  垂直展示的时间流信息。
  ## 何时使用
  - 当有一系列信息需按时间排列时，可正序和倒序。
  - 需要有一条时间轴进行视觉上的串联时。
        ## 代码演示`,
  us: `# Timeline
  Vertical display timeline.
  ## When To Use
  - When a series of information needs to be ordered by time (ascending or descending).
  - When you need a timeline to make a visual connection.
  ## Examples
  `,
};
export default {
  category: 'Components',
  subtitle: '时间轴',
  type: 'Data Display',
  title: 'Timeline',
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
          <demo-container api={PendingString} code={PendingCodeString}>
            <Pending />
          </demo-container>
          <demo-container api={CustomString} code={CustomCodeString}>
            <Custom />
          </demo-container>
          <demo-container api={AlternateString} code={AlternateCodeString}>
            <Alternate />
          </demo-container>
          <demo-container api={RightString} code={RightCodeString}>
            <Right />
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
