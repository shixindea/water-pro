<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Circle from './circle.vue';
import CircleString from './circle.md?raw';
import CircleCodeString from './circle.vue?raw';
import LineMini from './line-mini.vue';
import LineMiniString from './line-mini.md?raw';
import LineMiniCodeString from './line-mini.vue?raw';
import CircleMini from './circle-mini.vue';
import CircleMiniString from './circle-mini.md?raw';
import CircleMiniCodeString from './circle-mini.vue?raw';
import CircleDynamic from './circle-dynamic.vue';
import CircleDynamicString from './circle-dynamic.md?raw';
import CircleDynamicCodeString from './circle-dynamic.vue?raw';
import Format from './format.vue';
import FormatString from './format.md?raw';
import FormatCodeString from './format.vue?raw';
import Dynamic from './dynamic.vue';
import DynamicString from './dynamic.md?raw';
import DynamicCodeString from './dynamic.vue?raw';
import Dashboard from './dashboard.vue';
import DashboardString from './dashboard.md?raw';
import DashboardCodeString from './dashboard.vue?raw';
import Segment from './segment.vue';
import SegmentString from './segment.md?raw';
import SegmentCodeString from './segment.vue?raw';
import Linecap from './linecap.vue';
import LinecapString from './linecap.md?raw';
import LinecapCodeString from './linecap.vue?raw';
import GradientLine from './gradient-line.vue';
import GradientLineString from './gradient-line.md?raw';
import GradientLineCodeString from './gradient-line.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Progress 进度条
  展示操作的当前进度。
  ## 何时使用
  在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

  - 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；
  - 当需要显示一个操作完成的百分比时。
        ## 代码演示`,
  us: `# Progress
  Display the current progress of an operation flow.
  ## When To Use
  If it will take a long time to complete an operation, you can use \`Progress\` to show the current progress and status.

  - When an operation will interrupt the current interface, or it needs to run in the background for more than 2 seconds.
  - When you need to display the completion percentage of an operation.
  ## Examples
  `,
};
export default {
  category: 'Components',
  subtitle: '进度条',
  type: 'Feedback',
  title: 'Progress',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={CircleString} code={CircleCodeString}>
            <Circle />
          </demo-container>
          <demo-container api={LineMiniString} code={LineMiniCodeString}>
            <LineMini />
          </demo-container>
          <demo-container api={CircleMiniString} code={CircleMiniCodeString}>
            <CircleMini />
          </demo-container>
          <demo-container api={CircleDynamicString} code={CircleDynamicCodeString}>
            <CircleDynamic />
          </demo-container>
          <demo-container api={FormatString} code={FormatCodeString}>
            <Format />
          </demo-container>
          <demo-container api={DynamicString} code={DynamicCodeString}>
            <Dynamic />
          </demo-container>
          <demo-container api={DashboardString} code={DashboardCodeString}>
            <Dashboard />
          </demo-container>
          <demo-container api={SegmentString} code={SegmentCodeString}>
            <Segment />
          </demo-container>
          <demo-container api={LinecapString} code={LinecapCodeString}>
            <Linecap />
          </demo-container>
          <demo-container api={GradientLineString} code={GradientLineCodeString}>
            <GradientLine />
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
