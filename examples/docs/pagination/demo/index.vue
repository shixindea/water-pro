<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Changer from './changer.vue';
import ChangerString from './changer.md?raw';
import ChangerCodeString from './changer.vue?raw';
import CustomChanger from './custom-changer.vue';
import CustomChangerString from './custom-changer.md?raw';
import CustomChangerCodeString from './custom-changer.vue?raw';
import ItemRender from './itemRender.vue';
import ItemRenderString from './itemRender.md?raw';
import ItemRenderCodeString from './itemRender.vue?raw';
import Jump from './jump.vue';
import JumpString from './jump.md?raw';
import JumpCodeString from './jump.vue?raw';
import Mini from './mini.vue';
import MiniString from './mini.md?raw';
import MiniCodeString from './mini.vue?raw';
import More from './more.vue';
import MoreString from './more.md?raw';
import MoreCodeString from './more.vue?raw';
import Simple from './simple.vue';
import SimpleString from './simple.md?raw';
import SimpleCodeString from './simple.vue?raw';
import Total from './total.vue';
import TotalString from './total.md?raw';
import TotalCodeString from './total.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Pagination 分页

    采用分页的形式分隔长列表，每次只加载一个页面。

    ## 何时使用

    - 当加载/渲染所有数据将花费很多时间时；
    - 可切换页码浏览数据。

    ## 代码演示`,

  us: `# Pagination

    A long list can be divided into several pages by 'Pagination', and only one page will be loaded at a time.

    ## When To Use

    - When it will take a long time to load/render all items.
    - If you want to browse the data by navigating through pages.
    ## Examples `,
};
export default {
  category: 'Components',
  subtitle: '分页',
  type: 'Navigation',
  title: 'Pagination',
  cols: 1,
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={MoreString} code={MoreCodeString}>
            <More />
          </demo-container>
          <demo-container api={ChangerString} code={ChangerCodeString}>
            <Changer />
          </demo-container>
          <demo-container api={CustomChangerString} code={CustomChangerCodeString}>
            <CustomChanger />
          </demo-container>
          <demo-container api={JumpString} code={JumpCodeString}>
            <Jump />
          </demo-container>
          <demo-container api={MiniString} code={MiniCodeString}>
            <Mini />
          </demo-container>
          <demo-container api={SimpleString} code={SimpleCodeString}>
            <Simple />
          </demo-container>
          <demo-container api={TotalString} code={TotalCodeString}>
            <Total />
          </demo-container>
          <demo-container api={ItemRenderString} code={ItemRenderCodeString}>
            <ItemRender />
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
