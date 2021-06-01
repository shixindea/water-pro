<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Placement from './placement.vue';
import PlacementString from './placement.md?raw';
import PlacementCodeString from './placement.vue?raw';
import UserProfile from './user-profile.vue';
import UserProfileString from './user-profile.md?raw';
import UserProfileCodeString from './user-profile.vue?raw';
import MultiLevelDrawer from './multi-level-drawer.vue';
import MultiLevelDrawerString from './multi-level-drawer.md?raw';
import MultiLevelDrawerCodeString from './multi-level-drawer.vue?raw';
import FormInDrawer from './form-in-drawer.vue';
import FormInDrawerString from './form-in-drawer.md?raw';
import FormInDrawerCodeString from './form-in-drawer.vue?raw';
import RenderInCurrent from './render-in-current.vue';
import RenderInCurrentString from './render-in-current.md?raw';
import RenderInCurrentCodeString from './render-in-current.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Drawer 抽屉
        屏幕边缘滑出的浮层面板。

## 何时使用

抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。

- 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
- 当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。

       ## 代码演示
        `,
  us: `# Drawer
        A panel which slides in from the edge of the screen.

## When To Use

A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of information or actions. Since the user can interact with the Drawer without leaving the current page, tasks can be achieved more efficiently within the same context.

- Use a Form to create or edit a set of information.
- Processing subtasks. When subtasks are too heavy for a Popover and we still want to keep the subtasks in the context of the main task, Drawer comes very handy.
- When the same Form is needed in multiple places.
       ## Examples
        `,
};
export default {
  category: 'Components',
  type: 'Feedback',
  zhType: '反馈',
  title: 'Drawer',
  subtitle: '抽屉',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={PlacementString} code={PlacementCodeString}>
            <Placement />
          </demo-container>
          <demo-container api={FormInDrawerString} code={FormInDrawerCodeString}>
            <FormInDrawer />
          </demo-container>
          <demo-container api={UserProfileString} code={UserProfileCodeString}>
            <UserProfile />
          </demo-container>
          <demo-container api={MultiLevelDrawerString} code={MultiLevelDrawerCodeString}>
            <MultiLevelDrawer />
          </demo-container>
          <demo-container api={RenderInCurrentString} code={RenderInCurrentCodeString}>
            <RenderInCurrent />
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
