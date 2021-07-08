<template>
  <a-form layout="horizontal">
    <a-form-item
      label="Top coders"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      name="coders"
    >
      <a-mentions rows="1" v-model:value="modelRef.coders">
        <a-mentions-option value="afc163">afc163</a-mentions-option>
        <a-mentions-option value="zombieJ">zombieJ</a-mentions-option>
        <a-mentions-option value="yesmeck">yesmeck</a-mentions-option>
      </a-mentions>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" @click="handleSubmit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import Mentions from '../../../../components/mentions/index';
import { defineComponent, reactive } from 'vue';
const { getMentions } = Mentions;
export default defineComponent({
  setup() {
    const checkMention = async (rule, value) => {
      const mentions = getMentions(value);
      if (mentions.length < 2) {
        return Promise.reject(new Error('More than one must be selected!'));
      } else {
        return Promise.resolve();
      }
    };
    const modelRef = reactive({
      bio: '',
      coders: '',
    });
    const handleSubmit = e => {
      console.log('submit!', toRaw(formState));
    };
    return {
      modelRef,
      handleSubmit,
    };
  },
});
</script>
