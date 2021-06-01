<script lang="jsx">
import BasicString from './basic.md?raw';
import Basic from './basic.vue';
import BasicCodeString from './basic.vue?raw';
import ChangeOnSelectString from './change-on-select.md?raw';
import ChangeOnSelect from './change-on-select.vue';
import ChangeOnSelectCodeString from './change-on-select.vue?raw';
import CustomRenderString from './custom-render.md?raw';
import CustomRender from './custom-render.vue';
import CustomRenderCodeString from './custom-render.vue?raw';
import CustomTriggerString from './custom-trigger.md?raw';
import CustomTrigger from './custom-trigger.vue';
import CustomTriggerCodeString from './custom-trigger.vue?raw';
import DefaultValueString from './default-value.md?raw';
import DefaultValue from './default-value.vue';
import DefaultValueCodeString from './default-value.vue?raw';
import DisabledOptionString from './disabled-option.md?raw';
import DisabledOption from './disabled-option.vue';
import DisabledOptionCodeString from './disabled-option.vue?raw';
import HoverString from './hover.md?raw';
import Hover from './hover.vue';
import HoverCodeString from './hover.vue?raw';
import LazyString from './lazy.md?raw';
import Lazy from './lazy.vue';
import LazyCodeString from './lazy.vue?raw';
import SearchString from './search.md?raw';
import Search from './search.vue';
import SearchCodeString from './search.vue?raw';
import SizeString from './size.md?raw';
import Size from './size.vue';
import SizeCodeString from './size.vue?raw';
import FieldsNameString from './fields-name.md?raw';
import FieldsName from './fields-name.vue';
import FieldsNameCodeString from './fields-name.vue?raw';
import SuffixString from './suffix.md?raw';
import Suffix from './suffix.vue';
import SuffixCodeString from './suffix.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Cascader 级联选择
          级联选择框。
## 何时使用
- 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。
- 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。
- 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。
          ## 代码演示`,
  us: `# Cascader
          Cascade selection box.
## When To Use
- When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.
- When selecting from a large data set, with multi-stage classification separated for easy selection.
- Chooses cascade items in one float layer for better user experience.
## Examples
          `,
};
export default {
  category: 'Components',
  type: 'Data Entry',
  zhType: '数据录入',
  title: 'Cascader',
  subtitle: '级联选择',
  render() {
    return (
      <div id="components-cascader-demo">
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={ChangeOnSelectString} code={ChangeOnSelectCodeString}>
            <ChangeOnSelect />
          </demo-container>
          <demo-container api={CustomRenderString} code={CustomRenderCodeString}>
            <CustomRender />
          </demo-container>
          <demo-container api={CustomTriggerString} code={CustomTriggerCodeString}>
            <CustomTrigger />
          </demo-container>
          <demo-container api={DefaultValueString} code={DefaultValueCodeString}>
            <DefaultValue />
          </demo-container>
          <demo-container api={DisabledOptionString} code={DisabledOptionCodeString}>
            <DisabledOption />
          </demo-container>
          <demo-container api={HoverString} code={HoverCodeString}>
            <Hover />
          </demo-container>
          <demo-container api={LazyString} code={LazyCodeString}>
            <Lazy />
          </demo-container>
          <demo-container api={SearchString} code={SearchCodeString}>
            <Search />
          </demo-container>
          <demo-container api={SizeString} code={SizeCodeString}>
            <Size />
          </demo-container>
          <demo-container api={FieldsNameString} code={FieldsNameCodeString}>
            <FieldsName />
          </demo-container>
          <demo-container api={SuffixString} code={SuffixCodeString}>
            <Suffix />
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
#components-cascader-demo .ant-cascader-picker {
  width: 300px;
}
</style>
