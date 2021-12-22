import { defineComponent, PropType } from 'vue';
import { FormOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'EditTableHeaderIcon',
  props: {
    title: {
      type: String as PropType<string>,
      default: '',
    },
  },
  render() {
    return (
      <span v-slots={this.$slots}>
        {this.title}
        <FormOutlined />
      </span>
    );
  },
});
