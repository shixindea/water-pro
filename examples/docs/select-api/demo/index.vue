<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Search from './search.vue';
import SearchString from './search.md?raw';
import SearchCodeString from './search.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# SelectApi 接口选择器
          带接口请求的下拉选择器。
          ## 何时使用
          - 字段固定。
          - 需要接口。
          - 表单

          ## 代码演示`,
  us: `# SelectApi
        TODO.
        ## Examples `,
};
export default {
  category: 'Components',
  subtitle: 'API 选择器',
  type: 'Data Entry',
  title: 'SelectApi',
  render() {
    return (
      <div id="components-select-demo">
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={SearchString} code={SearchCodeString}>
            <Search />
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
#components-select-demo .ant-select {
  margin: 0 8px 10px 0;
}
</style>
>
