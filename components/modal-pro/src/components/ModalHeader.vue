<!-- @format -->

<template>
  <BasicTitle :help-message="helpMessage" class="a-modal-title">
    {{ title }}
  </BasicTitle>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTitle } from '../../../basic-title';
  import PropTypes from '../../../_util/vue-types';

  export default defineComponent({
    name: 'BasicModalHeader',
    components: { BasicTitle },
    props: {
      helpMessage: PropTypes.stringArray,
      title: PropTypes.string,
    },
  });
</script>

