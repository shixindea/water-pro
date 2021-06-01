<template>
  <a-popconfirm title="Are you sure？">
    <template #icon><question-circle-outlined style="color: red" /></template>
    <a href="#">Delete</a>
  </a-popconfirm>
</template>
<script lang="ts">
import { QuestionCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    QuestionCircleOutlined,
  },
});
</script>
