<template>
  <a-time-picker v-model:value="value" :defaultOpenValue="moment('00:00:00', 'HH:mm:ss')">
    <template #suffixIcon><smile-outlined /></template>
  </a-time-picker>
</template>
<script lang="ts">
import moment, { Moment } from 'moment';
import { SmileOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    SmileOutlined,
  },
  setup() {
    return {
      moment,
      value: ref<Moment | undefined>(),
    };
  },
});
</script>
