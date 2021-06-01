<script lang="jsx">
import BasicString from './basic.md?raw';
import Basic from './basic.vue';
import BasicCodeString from './basic.vue?raw';
import CertainCategoryString from './certain-category.md?raw';
import CertainCategory from './certain-category.vue';
import CertainCategoryCodeString from './certain-category.vue?raw';
import CustomString from './custom.md?raw';
import Custom from './custom.vue';
import CustomCodeString from './custom.vue?raw';
import NonCaseSensitiveString from './non-case-sensitive.md?raw';
import NonCaseSensitive from './non-case-sensitive.vue';
import NonCaseSensitiveCodeString from './non-case-sensitive.vue?raw';
import OptionsString from './options.md?raw';
import Options from './options.vue';
import OptionsCodeString from './options.vue?raw';
import UncertainCategoryString from './uncertain-category.md?raw';
import UncertainCategory from './uncertain-category.vue';
import UncertainCategoryCodeString from './uncertain-category.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# AutoComplete 自动完成
          输入框自动完成功能。
## 何时使用
需要自动完成时。
          ## 代码演示`,
  us: `# AutoComplete
        Autocomplete function of input field.
## When To Use
When there is a need for autocomplete functionality.
## Examples
`,
};
export default {
  category: 'Components',
  subtitle: '自动完成',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 2,
  title: 'AutoComplete',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={CertainCategoryString} code={CertainCategoryCodeString}>
            <CertainCategory />
          </demo-container>
          <demo-container api={CustomString} code={CustomCodeString}>
            <Custom />
          </demo-container>
          <demo-container api={NonCaseSensitiveString} code={NonCaseSensitiveCodeString}>
            <NonCaseSensitive />
          </demo-container>
          <demo-container api={OptionsString} code={OptionsCodeString}>
            <Options />
          </demo-container>
          <demo-container api={UncertainCategoryString} code={UncertainCategoryCodeString}>
            <UncertainCategory />
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
