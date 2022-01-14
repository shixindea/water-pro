<docs>
---
order: 2
title:
  zh-CN: 在卡片中使用
  en-US: In Card
---

## zh-CN

在卡片中展示统计数值。

## en-US

Display statistic data in Card.

</docs>

<template>
  <div style="background: #ececec; padding: 30px">
    <a-row :gutter="16">
      <a-col :span="12">
        <a-card>
          <a-statistic
            title="Feedback"
            :value="11.28"
            :precision="2"
            suffix="%"
            :value-style="{ color: '#3f8600' }"
            style="margin-right: 50px"
          >
            <template #prefix>
              <IconBytedArrowUp :colors="['currentColor']" />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          <a-statistic
            title="Idle"
            :value="9.3"
            :precision="2"
            suffix="%"
            class="demo-class"
            :value-style="{ color: '#cf1322' }"
          >
            <template #prefix>
              <IconBytedArrowDown :colors="['currentColor']" />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { IconBytedArrowUp, IconBytedArrowDown } from '@fe6/icon-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    IconBytedArrowUp,
    IconBytedArrowDown,
  },
});
</script>
