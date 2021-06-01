<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Duration from './duration.vue';
import DurationString from './duration.md?raw';
import DurationCodeString from './duration.vue?raw';
import Loading from './loading.vue';
import LoadingString from './loading.md?raw';
import LoadingCodeString from './loading.vue?raw';
import Other from './other.vue';
import OtherString from './other.md?raw';
import OtherCodeString from './other.vue?raw';
import Thenable from './thenable.vue';
import ThenableString from './thenable.md?raw';
import ThenableCodeString from './thenable.vue?raw';
import Update from './update.vue';
import UpdateString from './update.md?raw';
import UpdateCodeString from './update.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 全局提示
全局展示操作反馈信息。
## 何时使用
- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 代码演示`,
  us: `# Message
Display global messages as feedback in response to user operations.
## When To Use
- To provide feedback such as success, warning, error etc.
- A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt.
## Examples `,
};
export default {
  category: 'Components',
  subtitle: '全局提示',
  type: 'Feedback',
  noinstant: true,
  title: 'Message',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={DurationString} code={DurationCodeString}>
            <Duration />
          </demo-container>
          <demo-container api={LoadingString} code={LoadingCodeString}>
            <Loading />
          </demo-container>
          <demo-container api={OtherString} code={OtherCodeString}>
            <Other />
          </demo-container>
          <demo-container api={ThenableString} code={ThenableCodeString}>
            <Thenable />
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
