<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Presuffix from './presuffix.vue';
import PresuffixString from './presuffix.md?raw';
import PresuffixCodeString from './presuffix.vue?raw';
import SearchInput from './search-input.vue';
import SearchInputString from './search-input.md?raw';
import SearchInputCodeString from './search-input.vue?raw';
import SearchInputLoading from './search-input-loading.vue';
import SearchInputLoadingString from './search-input-loading.md?raw';
import SearchInputLoadingCodeString from './search-input-loading.vue?raw';
import Size from './size.vue';
import SizeString from './size.md?raw';
import SizeCodeString from './size.vue?raw';
import Group from './group.vue';
import GroupString from './group.md?raw';
import GroupCodeString from './group.vue?raw';
import AllowClear from './allowClear.vue';
import AllowClearString from './allowClear.md?raw';
import AllowClearCodeString from './allowClear.vue?raw';
import PasswordInput from './password-input.vue';
import PasswordInputString from './password-input.md?raw';
import PasswordInputCodeString from './password-input.vue?raw';
import InputCount from './input-count.vue';
import InputCountString from './input-count.md?raw';
import InputCountCodeString from './input-count.vue?raw';
import Addon from './addon.vue';
import AddonString from './addon.md?raw';
import AddonCodeString from './addon.vue?raw';
import Tooltip from './tooltip.vue';
import TooltipString from './tooltip.md?raw';
import TooltipCodeString from './tooltip.vue?raw';
import TextareaAutosize from './textarea-autosize.vue';
import TextareaAutosizeString from './textarea-autosize.md?raw';
import TextareaAutosizeCodeString from './textarea-autosize.vue?raw';
import TextareaShowCount from './textarea-show-count.vue';
import TextareaShowCountString from './textarea-show-count.md?raw';
import TextareaShowCountCodeString from './textarea-show-count.vue?raw';
import TextArea from './textarea.vue';
import TextAreaString from './textarea.md?raw';
import TextAreaCodeString from './textarea.vue?raw';
import SmsCode from './sms-code.vue';
import SmsCodeString from './sms-code.md?raw';
import SmsCodeCodeString from './sms-code.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Input 输入框
          通过鼠标或键盘输入内容，是最基础的表单域的包装。
## 何时使用
- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。
          ## 代码演示`,
  us: `# Input
          A basic widget for getting the user input is a text field.
Keyboard and mouse can be used for providing or changing data.
## When To Use
- A user input in a form field is needed.
- A search input is required.
## Examples `,
};
export default {
  category: 'Components',
  subtitle: '输入框',
  type: 'Data Entry',
  title: 'Input',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={SearchInputString} code={SearchInputCodeString}>
            <SearchInput />
          </demo-container>
          <demo-container api={SearchInputLoadingString} code={SearchInputLoadingCodeString}>
            <SearchInputLoading />
          </demo-container>
          <demo-container api={SizeString} code={SizeCodeString}>
            <Size />
          </demo-container>
          <demo-container api={GroupString} code={GroupCodeString}>
            <Group />
          </demo-container>
          <demo-container api={AllowClearString} code={AllowClearCodeString}>
            <AllowClear />
          </demo-container>
          <demo-container api={PasswordInputString} code={PasswordInputCodeString}>
            <PasswordInput />
          </demo-container>
          <demo-container api={InputCountString} code={InputCountCodeString}>
            <InputCount />
          </demo-container>
          <demo-container api={AddonString} code={AddonCodeString}>
            <Addon />
          </demo-container>
          <demo-container api={TooltipString} code={TooltipCodeString}>
            <Tooltip />
          </demo-container>
          <demo-container api={TextareaAutosizeString} code={TextareaAutosizeCodeString}>
            <TextareaAutosize />
          </demo-container>
          <demo-container api={TextareaShowCountString} code={TextareaShowCountCodeString}>
            <TextareaShowCount />
          </demo-container>
          <demo-container api={TextAreaString} code={TextAreaCodeString}>
            <TextArea />
          </demo-container>
          <demo-container api={SmsCodeString} code={SmsCodeCodeString}>
            <SmsCode />
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
<style></style>
