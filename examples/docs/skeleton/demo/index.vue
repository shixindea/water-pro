<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Active from './active.vue';
import ActiveString from './active.md?raw';
import ActiveCodeString from './active.vue?raw';
import Children from './children.vue';
import ChildrenString from './children.md?raw';
import ChildrenCodeString from './children.vue?raw';
import Complex from './complex.vue';
import ComplexString from './complex.md?raw';
import ComplexCodeString from './complex.vue?raw';
import List from './list.vue';
import ListString from './list.md?raw';
import ListCodeString from './list.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 加载占位图

  在需要等待加载内容的位置提供一个占位图。

  ## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下。
- 图文信息内容较多的列表/卡片中。
- 只在第一次加载数据的时候使用。
- 可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。

            ## 代码演示`,
  us: `# Skeleton

  Provide a placeholder while you wait for content to load, or to visualise content that doesn't exist yet.

## When To Use

- When a resource needs long time to load.
- When the component contains lots of information, such as List or Card.
- Only works when loading data for the first time.
- Could be replaced by Spin in any situation, but can provide a better user experience.

  ## Examples
  `,
};
export default {
  category: 'Components',
  subtitle: '加载占位图',
  type: 'Feedback',
  title: 'Skeleton',
  cols: 1,
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={ComplexString} code={ComplexCodeString}>
            <Complex />
          </demo-container>
          <demo-container api={ActiveString} code={ActiveCodeString}>
            <Active />
          </demo-container>
          <demo-container api={ChildrenString} code={ChildrenCodeString}>
            <Children />
          </demo-container>
          <demo-container api={ListString} code={ListCodeString}>
            <List />
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
