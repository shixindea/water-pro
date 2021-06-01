<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Size from './size.vue';
import SizeString from './size.md?raw';
import SizeCodeString from './size.vue?raw';
import Tags from './tags.vue';
import TagsString from './tags.md?raw';
import TagsCodeString from './tags.vue?raw';
import AutomaticTokenization from './automatic-tokenization.vue';
import AutomaticTokenizationString from './automatic-tokenization.md?raw';
import AutomaticTokenizationCodeString from './automatic-tokenization.vue?raw';
import LabelInValue from './label-in-value.vue';
import LabelInValueString from './label-in-value.md?raw';
import LabelInValueCodeString from './label-in-value.vue?raw';
import Multiple from './multiple.vue';
import MultipleString from './multiple.md?raw';
import MultipleCodeString from './multiple.vue?raw';
import Coordinate from './coordinate.vue';
import CoordinateString from './coordinate.md?raw';
import CoordinateCodeString from './coordinate.vue?raw';
import Optgroup from './optgroup.vue';
import OptgroupString from './optgroup.md?raw';
import OptgroupCodeString from './optgroup.vue?raw';
import SearchBox from './search-box.vue';
import SearchBoxString from './search-box.md?raw';
import SearchBoxCodeString from './search-box.vue?raw';
import Search from './search.vue';
import SearchString from './search.md?raw';
import SearchCodeString from './search.vue?raw';
import SelectUsers from './select-users.vue';
import SelectUsersString from './select-users.md?raw';
import SelectUsersCodeString from './select-users.vue?raw';
import Suffix from './suffix.vue';
import SuffixString from './suffix.md?raw';
import SuffixCodeString from './suffix.vue?raw';
import HideSelected from './hide-selected.vue';
import HideSelectedString from './hide-selected.md?raw';
import HideSelectedCodeString from './hide-selected.vue?raw';
import CustomDropdownMenu from './custom-dropdown-menu.vue';
import CustomDropdownMenuString from './custom-dropdown-menu.md?raw';
import CustomDropdownMenuCodeString from './custom-dropdown-menu.vue?raw';
import OptionLabelProp from './option-label-prop.vue';
import OptionLabelPropString from './option-label-prop.md?raw';
import OptionLabelPropCodeString from './option-label-prop.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Select 选择器
          下拉选择器。
          ## 何时使用
          - 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
          - 当选项少时（少于 5 项），建议直接将选项平铺，使用 [Radio](/ant-design/components/radio-cn/) 是更好的选择。

          ## 代码演示`,
  us: `# Select
        Select component to select value from options.
        ## When To Use
        - A dropdown menu for displaying choices - an elegant alternative to the native \`<select>\` element.
        - Utilizing [Radio](/ant-design/components/radio/) is recommended when there are fewer total options (less than 5).
        ## Examples `,
};
export default {
  category: 'Components',
  subtitle: '选择器',
  type: 'Data Entry',
  title: 'Select',
  render() {
    return (
      <div id="components-select-demo">
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={SizeString} code={SizeCodeString}>
            <Size />
          </demo-container>
          <demo-container api={TagsString} code={TagsCodeString}>
            <Tags />
          </demo-container>
          <demo-container api={AutomaticTokenizationString} code={AutomaticTokenizationCodeString}>
            <AutomaticTokenization />
          </demo-container>
          <demo-container api={LabelInValueString} code={LabelInValueCodeString}>
            <LabelInValue />
          </demo-container>
          <demo-container api={MultipleString} code={MultipleCodeString}>
            <Multiple />
          </demo-container>
          <demo-container api={CoordinateString} code={CoordinateCodeString}>
            <Coordinate />
          </demo-container>
          <demo-container api={OptgroupString} code={OptgroupCodeString}>
            <Optgroup />
          </demo-container>
          <demo-container api={SearchBoxString} code={SearchBoxCodeString}>
            <SearchBox />
          </demo-container>
          <demo-container api={SearchString} code={SearchCodeString}>
            <Search />
          </demo-container>
          <demo-container api={SelectUsersString} code={SelectUsersCodeString}>
            <SelectUsers />
          </demo-container>
          <demo-container api={SuffixString} code={SuffixCodeString}>
            <Suffix />
          </demo-container>
          <demo-container api={HideSelectedString} code={HideSelectedCodeString}>
            <HideSelected />
          </demo-container>
          <demo-container api={CustomDropdownMenuString} code={CustomDropdownMenuCodeString}>
            <CustomDropdownMenu />
          </demo-container>
          <demo-container api={OptionLabelPropString} code={OptionLabelPropCodeString}>
            <OptionLabelProp />
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
