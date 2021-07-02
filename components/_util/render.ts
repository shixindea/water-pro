/** @format */
import { defineComponent } from 'vue';

export default defineComponent({
  functional: true,
  props: {
    render: Function,
  },
  render: ({ $props }: any) => $props.render($props),
});
