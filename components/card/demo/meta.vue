<docs>
---
order: 7
title:
  zh-CN: 支持更多内容配置
  en-US: Support more content configuration
---

## zh-CN

一种支持封面、头像、标题和描述信息的卡片。

## en-US

A Card that supports `cover`, `avatar`, `title` and `description`.

</docs>

<template>
  <a-card hoverable style="width: 300px">
    <template #cover>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    </template>
    <template #actions>
      <IconBytedSetting :colors="['currentColor']" key="setting" />
      <IconBytedEdit :colors="['currentColor']" key="edit" />
      <IconBytedMore :colors="['currentColor']" key="ellipsis" />
    </template>
    <a-card-meta title="Card title" description="This is the description">
      <template #avatar>
        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </template>
    </a-card-meta>
  </a-card>
</template>

<script lang="ts">
import IconBytedSetting from '@fe6/icon-vue/lib/icons/byted-setting';
import IconBytedEdit from '@fe6/icon-vue/lib/icons/byted-edit';
import IconBytedMore from '@fe6/icon-vue/lib/icons/byted-more';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    IconBytedSetting,
    IconBytedEdit,
    IconBytedMore,
  },
});
</script>
