<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Form Pro 表单加强版
        表单增强版。不支持 table-pro 。

      ## 何时使用

      - 偷懒的时候
      - 快速实现数据提交

       ## 代码演示
        `,
  us: `# Form Pro
        TODO
       ## Examples
        `,
};
export default {
  category: 'Components',
  subtitle: '表单 PRO',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 1,
  title: 'Form Pro',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
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
