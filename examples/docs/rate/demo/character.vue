<template>
  <div>
    <a-rate v-model:value="value1" allowHalf>
      <template #character>
        <heart-outlined />
      </template>
    </a-rate>
    <br />
    <a-rate v-model:value="value2" character="A" allow-half style="font-size: 36px" />
    <br />
    <a-rate v-model:value="value3" character="好" allow-half />
    <br />
  </div>
</template>
<script lang="ts">
import { HeartOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<number>(2);
    const value2 = ref<number>(2.5);
    const value3 = ref<number>(0.5);
    return {
      value1,
      value2,
      value3,
    };
  },
  components: {
    HeartOutlined,
  },
});
</script>
