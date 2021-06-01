<script lang="jsx">
import BannerString from './banner.md?raw';
import Banner from './banner.vue';
import BannerCodeString from './banner.vue?raw';
import BasicString from './basic.md?raw';
import Basic from './basic.vue';
import BasicCodeString from './basic.vue?raw';
import ClosableString from './closable.md?raw';
import Closable from './closable.vue';
import ClosableCodeString from './closable.vue?raw';
import CloseTextString from './close-text.md?raw';
import CloseText from './close-text.vue';
import CloseTextCodeString from './close-text.vue?raw';
import DescriptionString from './description.md?raw';
import Description from './description.vue';
import DescriptionCodeString from './description.vue?raw';
import IconString from './icon.md?raw';
import Icon from './icon.vue';
import IconCodeString from './icon.vue?raw';
import StyleString from './style.md?raw';
import Style from './style.vue';
import StyleCodeString from './style.vue?raw';
import SmoothClosedString from './smooth-closed.md?raw';
import SmoothClosed from './smooth-closed.vue';
import SmoothClosedCodeString from './smooth-closed.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Alert 警告提示
          警告提示，展现需要关注的信息。
## 何时使用
- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。
          ## 代码演示`,
  us: `# Alert
          Alert component for feedback.
## When To Use
- When you need to show alert messages to users.
- When you need a persistent static container which is closable by user actions.
## Examples
`,
};
export default {
  category: 'Components',
  subtitle: '警告提示',
  type: 'Feedback',
  zhType: '反馈',
  title: 'Alert',
  render() {
    return (
      <div id="components-alert-demo">
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BannerString} code={BannerCodeString}>
            <Banner />
          </demo-container>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={ClosableString} code={ClosableCodeString}>
            <Closable />
          </demo-container>
          <demo-container api={CloseTextString} code={CloseTextCodeString}>
            <CloseText />
          </demo-container>
          <demo-container api={DescriptionString} code={DescriptionCodeString}>
            <Description />
          </demo-container>
          <demo-container api={IconString} code={IconCodeString}>
            <Icon />
          </demo-container>
          <demo-container api={StyleString} code={StyleCodeString}>
            <Style />
          </demo-container>
          <demo-container api={SmoothClosedString} code={SmoothClosedCodeString}>
            <SmoothClosed />
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
#components-alert-demo .ant-alert {
  margin-bottom: 16px;
}
</style>
