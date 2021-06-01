<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import CardTop from './card-top.vue';
import CardTopString from './card-top.md?raw';
import CardTopCodeString from './card-top.vue?raw';
import Card from './card.vue';
import CardString from './card.md?raw';
import CardCodeString from './card.vue?raw';
import CustomAddTrigger from './custom-add-trigger.vue';
import CustomAddTriggerString from './custom-add-trigger.md?raw';
import CustomAddTriggerCodeString from './custom-add-trigger.vue?raw';
import Disabled from './disabled.vue';
import DisabledString from './disabled.md?raw';
import DisabledCodeString from './disabled.vue?raw';
import EditableCard from './editable-card.vue';
import EditableCardString from './editable-card.md?raw';
import EditableCardCodeString from './editable-card.vue?raw';
import Extra from './extra.vue';
import ExtraString from './extra.md?raw';
import ExtraCodeString from './extra.vue?raw';
import Icon from './icon.vue';
import IconString from './icon.md?raw';
import IconCodeString from './icon.vue?raw';
import Position from './position.vue';
import PositionString from './position.md?raw';
import PositionCodeString from './position.vue?raw';
import Size from './size.vue';
import SizeString from './size.md?raw';
import SizeCodeString from './size.vue?raw';
import Slide from './slide.vue';
import SlideString from './slide.md?raw';
import SlideCodeString from './slide.vue?raw';
import CustomTabBar from './custom-tab-bar.vue';
import CustomTabBarString from './custom-tab-bar.md?raw';
import CustomTabBarCodeString from './custom-tab-bar.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Tabs 标签页

    选项卡切换组件。

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

Ant Design 依次提供了三级选项卡，分别用于不同的场景。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。
- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。
- [RadioButton](/ant-design/components/radio-cn/) 可作为更次级的页签来使用。

    ## 代码演示`,
  us: `# Tabs

Tabs make it easy to switch between different views.

### When To Use

Ant Design has 3 types of Tabs for different situations.

- Card Tabs: for managing too many closeable views.
- Normal Tabs: for functional aspects of a page.
- [RadioButton](/ant-design/components/radio/): for secondary tabs.
    ## Examples `,
};
export default {
  category: 'Components',
  subtitle: '标签页',
  type: 'Data Display',
  title: 'Tabs',
  cols: 1,
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={DisabledString} code={DisabledCodeString}>
            <Disabled />
          </demo-container>
          <demo-container api={IconString} code={IconCodeString}>
            <Icon />
          </demo-container>
          <demo-container api={SlideString} code={SlideCodeString}>
            <Slide />
          </demo-container>
          <demo-container api={ExtraString} code={ExtraCodeString}>
            <Extra />
          </demo-container>
          <demo-container api={SizeString} code={SizeCodeString}>
            <Size />
          </demo-container>
          <demo-container api={PositionString} code={PositionCodeString}>
            <Position />
          </demo-container>
          <demo-container api={CardString} code={CardCodeString}>
            <Card />
          </demo-container>
          <demo-container api={EditableCardString} code={EditableCardCodeString}>
            <EditableCard />
          </demo-container>
          <demo-container api={CardTopString} code={CardTopCodeString}>
            <CardTop />
          </demo-container>
          <demo-container api={CustomAddTriggerString} code={CustomAddTriggerCodeString}>
            <CustomAddTrigger />
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
