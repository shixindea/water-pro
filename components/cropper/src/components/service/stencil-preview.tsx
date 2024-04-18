
import { defineComponent } from 'vue';
import { Preview } from '../../components/helpers';

export default defineComponent({
  components: {
    Preview,
  },
  inheritAttrs: false,
  render() {
    return <Preview {...this.$attrs} fill={true} />
  },
});
