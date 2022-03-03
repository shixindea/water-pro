<docs>
---
order: 2
title:
  zh-CN: 带 icon 的滑块
  en-US: Slider with icon
---

## zh-CN

滑块左右可以设置图标来表达业务含义。

## en-US

You can add an icon beside the slider to make it meaningful.
</docs>

<template>
  <div class="icon-wrapper">
    <IconBytedFormOne :colors="[preColor]" />
    <a-slider v-model:value="sliderValue" :min="0" :max="20" />
    <IconBytedSmilingFace :colors="[nextColor]" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import IconBytedFormOne from '@fe6/icon-vue/lib/icons/byted-form-one';
import IconBytedSmilingFace from '@fe6/icon-vue/lib/icons/byted-smiling-face';
export default defineComponent({
  components: {
    IconBytedFormOne,
    IconBytedSmilingFace,
  },
  setup() {
    const sliderValue = ref<number>(0);
    const min = ref<number>(0);
    const max = ref<number>(20);

    const preColor = computed(() => {
      const mid = +((max.value - min.value) / 2).toFixed(5);
      return sliderValue.value >= mid ? '' : 'rgba(0, 0, 0, .45)';
    });

    const nextColor = computed(() => {
      const mid = +((max.value - min.value) / 2).toFixed(5);
      return sliderValue.value >= mid ? 'rgba(0, 0, 0, .45)' : '';
    });

    return {
      sliderValue,
      min,
      max,
      preColor,
      nextColor,
    };
  },
});
</script>
<style scoped>
.icon-wrapper {
  position: relative;
  padding: 0px 30px;
}

.icon-wrapper .cube-icon {
  position: absolute;
  top: -2px;
  width: 16px;
  height: 16px;
  line-height: 1;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.25);
}

.icon-wrapper .cube-icon:first-child {
  left: 0;
}

.icon-wrapper .cube-icon:last-child {
  right: 0;
}
</style>
