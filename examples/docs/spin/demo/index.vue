<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import CustomIndicator from './custom-indicator.vue';
import CustomIndicatorString from './custom-indicator.md?raw';
import CustomIndicatorCodeString from './custom-indicator.vue?raw';
import DelayAndDebounce from './delayAndDebounce.vue';
import DelayAndDebounceString from './delayAndDebounce.md?raw';
import DelayAndDebounceCodeString from './delayAndDebounce.vue?raw';
import Inside from './inside.vue';
import InsideString from './inside.md?raw';
import InsideCodeString from './inside.vue?raw';
import Nested from './basic.vue';
import NestedString from './basic.md?raw';
import NestedCodeString from './basic.vue?raw';
import Size from './size.vue';
import SizeString from './size.md?raw';
import SizeCodeString from './size.vue?raw';
import Tip from './tip.vue';
import TipString from './tip.md?raw';
import TipCodeString from './tip.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Spin 加载中

  用于页面和区块的加载中状态。

  ## 何时使用

  页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。
            ## 代码演示`,
  us: `# Spin

  A spinner for displaying loading state of a page or a section.

  # When To Use

  When part of the page is waiting for asynchronous data or during a rendering process, an appropriate loading animation can effectively alleviate users' inquietude.
  ## Examples `,
};
export default {
  category: 'Components',
  type: 'Feedback',
  title: 'Spin',
  subtitle: '加载中',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={SizeString} code={SizeCodeString}>
            <Size />
          </demo-container>
          <demo-container api={InsideString} code={InsideCodeString}>
            <Inside />
          </demo-container>
          <demo-container api={NestedString} code={NestedCodeString}>
            <Nested />
          </demo-container>
          <demo-container api={TipString} code={TipCodeString}>
            <Tip />
          </demo-container>
          <demo-container api={DelayAndDebounceString} code={DelayAndDebounceCodeString}>
            <DelayAndDebounce />
          </demo-container>
          <demo-container api={CustomIndicatorString} code={CustomIndicatorCodeString}>
            <CustomIndicator />
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
