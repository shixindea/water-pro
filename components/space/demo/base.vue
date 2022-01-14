<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic Usage
---

## zh-CN

相邻组件水平间距。


## en-US

Crowded components horizontal spacing.

</docs>

<template>
  <a-space>
    Space
    <a-button type="primary">Button</a-button>
    <a-upload>
      <a-button>
        <template #icon>
          <IconBytedUpload :colors="['currentColor']" />
        </template>
        Click to Upload
      </a-button>
    </a-upload>
    <a-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
      <a-button>Confirm</a-button>
    </a-popconfirm>
  </a-space>
</template>
<script lang="ts">
import { IconBytedUpload } from '@fe6/icon-vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IconBytedUpload,
  },
});
</script>
