<docs>
---
order: 4
title:
  zh-CN: 自定义分页
  en-US: Custom Paging
---

## zh-CN

自定义分页展示。

## en-US

Custom paging display

</docs>

<template>
  <a-carousel-img :imgList="imgUrls" preivewPageable />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

const imgUrls = [
  'https://img01.yzcdn.cn/upload_files/2021/07/15/FikfPBWchRpMqQ-pCaqKYuzIYF8z.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
  'https://img01.yzcdn.cn/upload_files/2021/07/15/lmT6p7-Zidq69_5oWDIHtS-HYzIL.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
  'https://img01.yzcdn.cn/upload_files/2021/07/15/lsjdz-NSI3PExOsfAS1oUutlPRXu.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
  'https://img01.yzcdn.cn/upload_files/2021/07/15/lkjEEeyR8wBtQ6QKlLZgzzjEr5gS.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
  'https://img01.yzcdn.cn/upload_files/2021/07/15/lhyIDYdCCsQwpx9x576m4qZsr4A7.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
  'https://img01.yzcdn.cn/upload_files/2021/07/15/Fo7E1JSqweCxNvn1NsyEcUFoYZ0d.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
  'https://img01.yzcdn.cn/upload_files/2021/07/15/FikfPBWchRpMqQ-pCaqKYuzIYF8z.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
  'https://img01.yzcdn.cn/upload_files/2021/07/15/FikfPBWchRpMqQ-pCaqKYuzIYF8z.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
  'https://img01.yzcdn.cn/upload_files/2021/07/15/lmT6p7-Zidq69_5oWDIHtS-HYzIL.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
];
export default defineComponent({
  setup() {
    return {
      imgUrls,
    };
  },
});
</script>
