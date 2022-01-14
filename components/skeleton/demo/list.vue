<docs>
---
order: 5
title:
  zh-CN: 列表
  en-US: List
---

## zh-CN

在列表组件中使用加载占位符。

## en-US

Use skeleton in list component.

</docs>

<template>
  <div>
    <a-switch :checked="!loading" @change="onChange" />
    <a-list item-layout="vertical" size="large" :data-source="listData">
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <template v-if="!loading" #actions>
            <span v-for="{ type, text } in actions" :key="type">
              <component
                :is="type"
                style="margin-right: 8px"
                :colors="['currentColor']"
              ></component>
              {{ text }}
            </span>
          </template>
          <template #extra>
            <img
              v-if="!loading"
              width="272"
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          </template>
          <a-skeleton :loading="loading" active avatar>
            <a-list-item-meta :description="item.description">
              <template #title>
                <a :href="item.href">{{ item.title }}</a>
              </template>
              <template #avatar><a-avatar :src="item.avatar" /></template>
            </a-list-item-meta>
            {{ item.content }}
          </a-skeleton>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>
<script lang="ts">
import { IconBytedStar, IconBytedLike, IconBytedMessage } from '@fe6/icon-vue';
import { defineComponent, ref } from 'vue';
interface DataItem {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}
const listData: DataItem[] = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: `ant design vue part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
export default defineComponent({
  components: {
    IconBytedStar,
    IconBytedLike,
    IconBytedMessage,
  },
  setup() {
    const loading = ref<boolean>(true);

    const actions = [
      { type: 'IconBytedStar', text: '156' },
      { type: 'IconBytedLike', text: '156' },
      { type: 'IconBytedMessage', text: '2' },
    ];

    const onChange = (checked: boolean) => {
      loading.value = !checked;
    };

    return {
      loading,
      listData,
      actions,
      onChange,
    };
  },
});
</script>
<style scoped>
.skeleton-demo {
  border: 1px solid #f4f4f4;
}
</style>
