<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Grid from './grid.vue';
import GridString from './grid.md?raw';
import GridCodeString from './grid.vue?raw';
import Loadmore from './loadmore.vue';
import LoadmoreString from './loadmore.md?raw';
import LoadmoreCodeString from './loadmore.vue?raw';
import Resposive from './resposive.vue';
import ResposiveString from './resposive.md?raw';
import ResposiveCodeString from './resposive.vue?raw';
import Simple from './simple.vue';
import SimpleString from './simple.md?raw';
import SimpleCodeString from './simple.vue?raw';
import Vertical from './vertical.vue';
import VerticalString from './vertical.md?raw';
import VerticalCodeString from './vertical.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 列表
  通用列表。
## 何时使用
最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。
        ## 代码演示`,
  us: `# List
  Simple List.

## When To Use

A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.
  ## Examples
  `,
};
export default {
  category: 'Components',
  type: 'Data Display',
  title: 'List',
  subtitle: '列表',
  cols: 1,
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={GridString} code={GridCodeString}>
            <Grid />
          </demo-container>
          <demo-container api={LoadmoreString} code={LoadmoreCodeString}>
            <Loadmore />
          </demo-container>
          <demo-container api={ResposiveString} code={ResposiveCodeString}>
            <Resposive />
          </demo-container>
          <demo-container api={SimpleString} code={SimpleCodeString}>
            <Simple />
          </demo-container>
          <demo-container api={VerticalString} code={VerticalCodeString}>
            <Vertical />
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
