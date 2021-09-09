<script lang="jsx">
import Card from './card.vue';
import CardString from './card.md?raw';
import CardCodeString from './card.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# TablePro 表格加强版

    普通表格只能一点点写，加强版表格配一下就行~

    ## 何时使用

    - 想偷懒的时候
    - 加速迭代项目的时候

    ## 代码演示`,
  us: `# TablePro
TODO
    ## Examples `,
};
export default {
  category: 'Components',
  subtitle: '表格 PRO',
  type: 'Data Display',
  title: 'TablePro',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <demo-container api={CardString} code={CardCodeString}>
            <Card />
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
