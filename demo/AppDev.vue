<template>
  <div style="padding: 200px;">
    <a-tag-group
    :value="tagDatas"
  >
    <template #more>
      +{{tagDatas.length - 4}}
    </template>
  </a-tag-group>
    <!-- 滚动的时候颜色选择器有问题 -->
    <!-- <AColorPicker
    ></AColorPicker> -->
  </div>
</template>
<script lang="tsx">
// TODO
// - 指令
// - use
import { defineComponent, ref } from 'vue';
import CloseCircleFilled from '@ant-design/icons-vue/CloseCircleFilled';

import ATagGroup from '@fe6/water-pro/es/tag-group';
import '@fe6/water-pro/es/tag-group/style';
// import ColorPicker from '@fe6/water-pro/es/color-picker/index';
// import '@fe6/water-pro/es/color-picker/style';

const tagDatas = [
  {
    name: '这是很长的标签',
    id: 190
  },
  {
    name: 'water',
    id: 290
  },
  {
    name: '榴莲',
    id: 390
  },
  {
    name: '山药',
    id: 490
  },
  {
    name: '洗手液',
    id: 590
  },
  {
    name: '快手',
    id: 690
  }
];

export default defineComponent({
  components: {
    ATagGroup,
    // AColorPicker: ColorPicker,
  },
  setup() {
    return {
      tagDatas,
    };
  },
});
</script>
