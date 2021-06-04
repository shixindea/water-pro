<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import List from './list.vue';
import ListString from './list.md?raw';
import ListCodeString from './list.vue?raw';
import StyleDemo from './style.vue';
import StyleDemoString from './style.md?raw';
import StyleDemoCodeString from './style.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 帮助提示
           有感叹号的帮助提示的封装
         ## 何时使用
         简单的说明不变全展示在页面中
         ## 代码演示
        `,
  us: `# BasicHelp
         TODO
         ## Examples
        `,
};

export default {
  category: 'Components',
  subtitle: '帮助提示',
  type: 'Data Display',
  title: 'BasicHelp',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={ListString} code={ListCodeString}>
            <List />
          </demo-container>
          <demo-container api={StyleDemoString} code={StyleDemoCodeString}>
            <StyleDemo />
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
