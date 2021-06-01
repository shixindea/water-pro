<script lang="jsx">
import BasicString from './basic.md?raw';
import Basic from './basic.vue';
import BasicCodeString from './basic.vue?raw';
import NoWapperString from './no-wrapper.md?raw';
import NoWapper from './no-wrapper.vue';
import NoWapperCodeString from './no-wrapper.vue?raw';
import DotString from './dot.md?raw';
import Dot from './dot.vue';
import DotCodeString from './dot.vue?raw';
import ChangeString from './change.md?raw';
import Change from './change.vue';
import ChangeCodeString from './change.vue?raw';
import OverflowString from './overflow.md?raw';
import Overflow from './overflow.vue';
import OverflowCodeString from './overflow.vue?raw';
import StatusString from './status.md?raw';
import Status from './status.vue';
import StatusCodeString from './status.vue?raw';
import TitleString from './title.md?raw';
import Title from './title.vue';
import TitleCodeString from './title.vue?raw';
import ColorsString from './colors.md?raw';
import Colors from './colors.vue';
import ColorsCodeString from './colors.vue?raw';

import CN from './../index.zh-CN.md';

const md = {
  cn: `# Badge徽标数
         图标右上角的圆形徽标数字。
         ## 何时使用
         一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。
         ## 代码演示
        `,
  us: `# Badge
         Small numerical value or status descriptor for UI elements.
         ## When To Use
         Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count.
         ## Examples
        `,
};

export default {
  category: 'Components',
  subtitle: '徽标数',
  type: 'Data Display',
  zhType: '数据展示',
  title: 'Badge',
  render() {
    return (
      <div id="components-badge-demo">
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={NoWapperString} code={NoWapperCodeString}>
            <NoWapper />
          </demo-container>
          <demo-container api={OverflowString} code={OverflowCodeString}>
            <Overflow />
          </demo-container>
          <demo-container api={DotString} code={DotCodeString}>
            <Dot />
          </demo-container>
          <demo-container api={StatusString} code={StatusCodeString}>
            <Status />
          </demo-container>
          <demo-container api={ChangeString} code={ChangeCodeString}>
            <Change />
          </demo-container>
          <demo-container api={TitleString} code={TitleCodeString}>
            <Title />
          </demo-container>
          <demo-container api={ColorsString} code={ColorsCodeString}>
            <Colors />
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

<style>
#components-badge-demo .ant-badge:not(.ant-badge-not-a-wrapper) {
  margin-right: 20px;
}
#components-badge-demo .head-example {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
  vertical-align: middle;
}
#components-badge-demo .ant-badge-not-a-wrapper:not(.ant-badge-status) {
  margin-right: 8px;
}
</style>
