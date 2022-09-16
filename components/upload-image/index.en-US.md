---
category: Components
type: Data Entry
title: UploadImage
cover: https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg
---

Package of upload components.

## When To Use

- Just show the picture
- Single file upload

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- | --- |
| value(v-model) | Uploaded value | string \| object | - | - |
| onFormChange | Method triggered after uploading | function | () => {} | - |
| mergeOriginDatas | Set the data submitted by the form | function | - | - |
| headers | Header settings for uploading pictures | - | - |  |
| placeholder | Copy of upload button | - | - |  |
| accept | For the file types to be uploaded, see [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | 'image/png', 'image/jpeg' |  |
| action | Upload address | string | 无 |  |
| autoUpload | Auto upload | boolean | true |  |
| resultKey | The field where the data returned by AJAX is stored | string | 'data' |  |
| nameKey | Field of picture name storage | string | 'name' |  |
| urlKey | Field of picture address storage | string | 'url' |  |
| limitSize | Picture limit size | number | 2(M) |  |
| disabled | Disabled | boolean | - |  |
| imageWidth | Picture width | number | 100 |  |
| imageHeight | Picture height | number | 100 |  |
| errorImage | Display of value loading failure | string |  |  |
| size | Set the button size. The optional values are 'small', 'large' or none | string | `default` |  |
| allowUpdate | Display preview and can be deleted | boolean | false | 3.41.0 |
| data | 上传所需参数或返回上传参数的方法 | object\|(file) => object | 无 |  | 4.0.0 |

### events

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- | --- |
| change | The status when uploading files is changed, see [change](#change) | Function | 无 |  |
| changeUpload | Upload changes, separated from change, and used in form pro configuration | Function(file) | 无 |  |
