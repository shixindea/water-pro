---
category: Components
type: Data Entry
title: UploadCard
cover: https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg
---

Packaging of multiple pictures.

## When To Use

- Need multiple uploaded pictures
- Card display

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
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
| draggable | Drag to change position | boolean | - | 3.12.0 |
| imageWidth | Image width | number | 100 |  |
| imageHeight | Image height | number | 100 |  |
| errorImage | Display of value loading failure | string |  |  |
| size | Set the button size. The optional values are 'small', 'large' or none | string | `default` |  |
| maxUploadCount | How many copies can I upload at most | number | - |  |
| objectFit | Determine how the picture fits into the container box, the same as native [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) | contain \| cover | - |  |

### 事件

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- | --- |
| change | The status when uploading files is changed, see [change](#change) | Function | 无 |  |
| changeUpload | Upload changes, separated from change, and used in form pro configuration | Function(file) | 无 |  |
