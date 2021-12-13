<docs>
---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

Basic usage.

</docs>

<template>
  <a-carousel
    :after-change="onChange"
    :imgList="imgUrls"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const onChange = (current: number) => {
      console.log(current);
    };

    return {
      onChange,
      imgUrls: [
        'https://img01.yzcdn.cn/upload_files/2021/07/15/FikfPBWchRpMqQ-pCaqKYuzIYF8z.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
        'https://img01.yzcdn.cn/upload_files/2021/07/15/lmT6p7-Zidq69_5oWDIHtS-HYzIL.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
        'https://img01.yzcdn.cn/upload_files/2021/07/15/lsjdz-NSI3PExOsfAS1oUutlPRXu.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
        'https://img01.yzcdn.cn/upload_files/2021/07/15/lkjEEeyR8wBtQ6QKlLZgzzjEr5gS.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
      ],
    };
  },
});
</script>
<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
```
