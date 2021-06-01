<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import ConfigProvider from './config-provider.vue';
import ConfigProviderString from './config-provider.md?raw';
import ConfigProviderCodeString from './config-provider.vue?raw';
import Customize from './customize.vue';
import CustomizeString from './customize.md?raw';
import CustomizeCodeString from './customize.vue?raw';
import Description from './description.vue';
import DescriptionString from './description.md?raw';
import DescriptionCodeString from './description.vue?raw';
import Simple from './simple.vue';
import SimpleString from './simple.md?raw';
import SimpleCodeString from './simple.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 空状态
        空状态时的展示占位图。

      空状态时的展示占位图。

      ## 何时使用

      - 当目前没有数据时，用于显式的用户提示。
      - 初始化场景时的引导创建流程。

       ## 代码演示
        `,
  us: `# Empty
        Empty state placeholder.

        ## When To Use

        - When there is no data provided, display for friendly tips.
        - User tutorial to create something in fresh new situation.
       ## Examples
        `,
};
export default {
  category: 'Components',
  type: 'Data Display',
  title: 'Empty',
  subtitle: '空状态',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={ConfigProviderString} code={ConfigProviderCodeString}>
            <ConfigProvider />
          </demo-container>
          <demo-container api={CustomizeString} code={CustomizeCodeString}>
            <Customize />
          </demo-container>
          <demo-container api={DescriptionString} code={DescriptionCodeString}>
            <Description />
          </demo-container>
          <demo-container api={SimpleString} code={SimpleCodeString}>
            <Simple />
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
