<script lang="jsx">
import BasicString from './basic.md?raw';
import Basic from './basic.vue';
import BasicCodeString from './basic.vue?raw';
import StaticString from './static.md?raw';
import Static from './static.vue';
import StaticCodeString from './static.vue?raw';
import OnClickString from './onClick.md?raw';
import OnClick from './onClick.vue';
import OnClickCodeString from './onClick.vue?raw';
import CustomizeHighlightString from './customizeHighlight.md?raw';
import CustomizeHighlight from './customizeHighlight.vue';
import CustomizeHighlightCodeString from './customizeHighlight.vue?raw';
import OnChangeString from './onChange.md?raw';
import OnChange from './onChange.vue';
import OnChangeCodeString from './onChange.vue?raw';
import TargetOffsetString from './targetOffset.md?raw';
import TargetOffset from './targetOffset.vue';
import TargetOffsetCodeString from './targetOffset.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Anchor 锚点
          用于跳转到页面指定位置。

## 何时使用

需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。
          ## 代码演示`,
  us: `# Anchor

Hyperlinks to scroll on one page.

## When To Use

For displaying anchor hyperlinks on page and jumping between them.
## Examples
`,
};
export default {
  category: 'Components',
  subtitle: '锚点',
  cols: 2,
  type: 'Other',
  zhType: '其他',
  title: 'Anchor',
  render() {
    return (
      <div id="components-anchor-demo">
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={StaticString} code={StaticCodeString}>
            <Static />
          </demo-container>
          <demo-container api={OnClickString} code={OnClickCodeString}>
            <OnClick />
          </demo-container>
          <demo-container api={CustomizeHighlightString} code={CustomizeHighlightCodeString}>
            <CustomizeHighlight />
          </demo-container>
          <demo-container api={OnChangeString} code={OnChangeCodeString}>
            <OnChange />
          </demo-container>
          <demo-container api={TargetOffsetString} code={TargetOffsetCodeString}>
            <TargetOffset />
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
#components-anchor-demo .ant-affix {
  z-index: 11;
}
</style>
