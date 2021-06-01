<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Border from './border.vue';
import BorderString from './border.md?raw';
import BorderCodeString from './border.vue?raw';
import Responsive from './responsive.vue';
import ResponsiveString from './responsive.md?raw';
import ResponsiveCodeString from './responsive.vue?raw';
import Size from './size.vue';
import SizeString from './size.md?raw';
import SizeCodeString from './size.vue?raw';
import VerticalBorder from './vertical-border.vue';
import VerticalBorderString from './vertical-border.md?raw';
import VerticalBorderCodeString from './vertical-border.vue?raw';
import Vertical from './vertical.vue';
import VerticalString from './vertical.md?raw';
import VerticalCodeString from './vertical.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Descriptions 描述列表 (版本: 1.5.0+)
        成组展示多个只读字段。
       ## 何时使用
        常见于详情页的信息展示。
       ## 代码演示
        `,
  us: `# Descriptions (Version: 1.5.0+)
        Display multiple read-only fields in groups.
       ## When To Use
        Commonly displayed on the details page.
       ## Examples
        `,
};
export default {
  category: 'Components',
  type: 'Data Display',
  zhType: '数据展示',
  title: 'Descriptions',
  subtitle: '描述列表',
  cols: 1,
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={BorderString} code={BorderCodeString}>
            <Border />
          </demo-container>
          <demo-container api={SizeString} code={SizeCodeString}>
            <Size />
          </demo-container>
          <demo-container api={ResponsiveString} code={ResponsiveCodeString}>
            <Responsive />
          </demo-container>
          <demo-container api={VerticalString} code={VerticalCodeString}>
            <Vertical />
          </demo-container>
          <demo-container api={VerticalBorderString} code={VerticalBorderCodeString}>
            <VerticalBorder />
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
