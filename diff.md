# 记录了与 ant-design-vue 不一样的地方

## 独有组件

- BasicArrow, BasicHelp, BasicTitle, BasicClose, BasicClear
- Scrollbar
- ContainerCollapse, ContainerLazy, ContainerScroll, ContainerList
- ModalPro, useModal, ModalUser
- PreviewImage
- UploadCard, UploadImage, UploadName
- TagGroup
- TagModalList
- SelectApi
- ColorPicker
- FormPro, useForm
- TablePro, useTable, TableCard, TableImage, TableAction
- Classify

## 原组件的扩展

- input
  - prefix, suffix, addonBefore, addonAfter 支持 render 函数
- menu
  - 多一种风格
- carousel
  - 小图支持横向滚动
- table
  - 依然支持 3.x 的各种 slot
- datepicker
  - 多选
- rangpicker
  - 快捷按钮， 今天，昨天，明天等
  - 开始是 00:00:00 结束是 23:59:59
