<script lang="jsx">
import BasicString from './basic.md?raw';
import Basic from './basic.vue';
import BasicCodeString from './basic.vue?raw';
import CheckAllString from './check-all.md?raw';
import CheckAll from './check-all.vue';
import CheckAllCodeString from './check-all.vue?raw';
import ControllerString from './controller.md?raw';
import Controller from './controller.vue';
import ControllerCodeString from './controller.vue?raw';
import DisabledString from './disabled.md?raw';
import Disabled from './disabled.vue';
import DisabledCodeString from './disabled.vue?raw';
import GroupString from './group.md?raw';
import Group from './group.vue';
import GroupCodeString from './group.vue?raw';
import LayoutString from './layout.md?raw';
import Layout from './layout.vue';
import LayoutCodeString from './layout.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Checkbox 多选框
           多选框
         ## 何时使用
         - 在一组可选项中进行多项选择时；
         - 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。
         ## 代码演示
        `,
  us: `# Checkbox
           Checkbox component
         ## When to use
         - Used for selecting multiple values from several options.
         - If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.
         ## Examples
        `,
};

export default {
  category: 'Components',
  subtitle: '多选框',
  type: 'Data Entry',
  zhType: '数据录入',
  title: 'Checkbox',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={CheckAllString} code={CheckAllCodeString}>
            <CheckAll />
          </demo-container>
          <demo-container api={DisabledString} code={DisabledCodeString}>
            <Disabled />
          </demo-container>
          <demo-container api={ControllerString} code={ControllerCodeString}>
            <Controller />
          </demo-container>
          <demo-container api={GroupString} code={GroupCodeString}>
            <Group />
          </demo-container>
          <demo-container api={LayoutString} code={LayoutCodeString}>
            <Layout />
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
