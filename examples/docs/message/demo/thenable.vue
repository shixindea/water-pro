<template>
  <a-button @click="success">Display a sequence of message</a-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { message } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const success = () => {
      message
        .loading('Action in progress..', 2.5)
        .then(
          () => message.success('Loading finished', 2.5),
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          () => {},
        )
        .then(() => message.info('Loading finished is finished', 2.5));
    };
    return {
      success,
    };
  },
});
</script>
