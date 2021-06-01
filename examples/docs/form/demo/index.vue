<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import DynamicFormItem from './dynamic-form-item.vue';
import DynamicFormItemString from './dynamic-form-item.md?raw';
import DynamicFormItemCodeString from './dynamic-form-item.vue?raw';
import HorizontalLogin from './horizontal-login.vue';
import HorizontalLoginString from './horizontal-login.md?raw';
import HorizontalLoginCodeString from './horizontal-login.vue?raw';
import Layout from './layout.vue';
import LayoutString from './layout.md?raw';
import LayoutCodeString from './layout.vue?raw';
// import UseFormBasic from './use-form-basic.vue';
// import UseFormBasicString from './use-form-basic.md?raw';
// import UseFormBasicCodeString from './use-form-basic.vue?raw';
// import UseFormCustom from './use-form-custom.vue';
// import UseFormCustomString from './use-form-custom.md?raw';
// import UseFormCustomCodeString from './use-form-custom.vue?raw';
// import UseFormError from './use-form-error.vue';
// import UseFormErrorString from './use-form-error.md?raw';
// import UseFormErrorCodeString from './use-form-error.vue?raw';
import ValidateStatic from './validate-static.vue';
import ValidateStaticString from './validate-static.md?raw';
import ValidateStaticCodeString from './validate-static.vue?raw';
import Validate from './validate.vue';
import ValidateString from './validate.md?raw';
import ValidateCodeString from './validate.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# Form 表单
           具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。
#### 如需要使用 \`v-model\` 双向绑定式的校验功能可使用新的表单 [\`a-form-model\`](/components/form-model-cn/)。

## 何时使用

- 用于创建一个实体或收集信息。
- 需要对输入的数据类型进行校验时。

## 表单

我们为 \`form\` 提供了以下三种排列方式：

- 水平排列：标签和表单控件水平排列；（默认）
- 垂直排列：标签和表单控件上下垂直排列；
- 行内排列：表单项水平行内排列。

## 表单域

表单一定会包含表单域，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。

这里我们封装了表单域 \`<Form.Item />\` 。


 ## 注意：
1、如果使用 \`Form.create\` 处理表单使其具有自动收集数据并校验的功能，建议使用\`jsx\`。
2、如果不是使用Vue.use(Form)形式注册的\`Form\`组件，你需要自行将\`$form\`挂载到Vue原型上。
\`Vue.prototype.$form = Form\`


## 代码演示
        `,
  us: `# Form
           Form is used to collect, validate, and submit the user input, usually contains various form items including checkbox, radio, input, select, and etc.

#### If you need to use \`v-model\` verification, you can use new form [\`a-form-model\`](/components/form-model/)。

## When to use

- When you need to create a instance or collect information.
- When you need to validate fields in certain rules.

## Form Component

You can align the controls of a \`form\` using the \`layout\` prop：

- \`horizontal\`：to horizontally align the \`label\`s and controls of the fields. (Default)
- \`vertical\`：to vertically align the \`label\`s and controls of the fields.
- \`inline\`：to render form fields in one line.

## Form Item Component

A form consists of one or more form fields whose type includes input, textarea, checkbox, radio, select, tag, and more. A form field is defined using \`<Form.Item />\`.

 ## Note:
1. If you use \`Form.create\` to process the form to have the ability to automatically collect data and verify it, it is recommended to use \`jsx\`.
2. If you are not using the \`Form\` component registered in Vue.use(Form) form, you need to mount \`$form\` to the Vue prototype yourself.
\`Vue.prototype.$form = Form\`

## Examples
        `,
};

export default {
  category: 'Components',
  subtitle: '表单',
  type: 'Data Entry',
  zhType: '数据录入',
  cols: 1,
  title: 'Form',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort cols={1}>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={DynamicFormItemString} code={DynamicFormItemCodeString}>
            <DynamicFormItem />
          </demo-container>
          <demo-container api={HorizontalLoginString} code={HorizontalLoginCodeString}>
            <HorizontalLogin />
          </demo-container>
          <demo-container api={LayoutString} code={LayoutCodeString}>
            <Layout />
          </demo-container>
          <demo-container api={ValidateStaticString} code={ValidateStaticCodeString}>
            <ValidateStatic />
          </demo-container>
          <demo-container api={ValidateString} code={ValidateCodeString}>
            <Validate />
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
.code-box-demo .ant-form:not(.ant-form-inline):not(.ant-form-vertical) {
  max-width: 600px;
}
</style>
