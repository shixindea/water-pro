<template>
  <div>
    <a-popconfirm
      title="Are you sure delete this task?"
      :visible="visible"
      ok-text="Yes"
      cancel-text="No"
      @visibleChange="handleVisibleChange"
      @confirm="confirm"
      @cancel="cancel"
    >
      <a href="#">Delete a task</a>
    </a-popconfirm>
    <br />
    <br />
    Whether directly execute：
    <a-checkbox v-model:checked="condition" />
  </div>
</template>
<script lang="ts">
import message from '../../../../components/message';
import { ref, defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref<boolean>(false);
    const condition = ref<boolean>(true);

    const confirm = () => {
      visible.value = false;
      message.success('Next step.');
    };

    const cancel = () => {
      visible.value = false;
      message.error('Click on cancel.');
    };

    const handleVisibleChange = (bool: boolean) => {
      if (!bool) {
        visible.value = false;
        return;
      }
      // Determining condition before show the popconfirm.
      console.log(condition.value);
      if (condition.value) {
        confirm(); // next step
      } else {
        visible.value = true;
      }
    };
    return {
      visible,
      condition,
      confirm,
      cancel,
      handleVisibleChange,
    };
  },
});
</script>
