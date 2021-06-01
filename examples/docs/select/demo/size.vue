<template>
  <a-radio-group v-model:value="size">
    <a-radio-button value="large">Large</a-radio-button>
    <a-radio-button value="default">Default</a-radio-button>
    <a-radio-button value="small">Small</a-radio-button>
  </a-radio-group>
  <br />
  <br />
  <a-select :size="size" v-model:value="value1" style="width: 200px">
    <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
      {{ (i + 9).toString(36) + i }}
    </a-select-option>
  </a-select>
  <br />
  <a-select
    mode="multiple"
    :size="size"
    placeholder="Please select"
    v-model:value="value2"
    style="width: 200px"
    @popupScroll="popupScroll"
  >
    <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
      {{ (i + 9).toString(36) + i }}
    </a-select-option>
  </a-select>
  <br />
  <a-select
    mode="tags"
    :size="size"
    placeholder="Please select"
    v-model:value="value3"
    style="width: 200px"
  >
    <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
      {{ (i + 9).toString(36) + i }}
    </a-select-option>
  </a-select>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const popupScroll = () => {
      console.log('popupScroll');
    };

    return {
      popupScroll,
      size: ref('default'),
      value1: ref('a1'),
      value2: ref(['a1', 'b2']),
      value3: ref(['a1', 'b2']),
    };
  },
});
</script>
