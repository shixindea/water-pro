/** @format */

export default {
  functional: true,
  props: {
    render: Function,
  },
  render: ({ $props }: any) => $props.render($props),
};
