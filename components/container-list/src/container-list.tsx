import { defineComponent, ref } from 'vue';
import List from '../../vc-virtual-list';
import { virtualListProps } from '../../vc-virtual-list/props';

export default defineComponent({
  name: 'AContainerList',
  props: virtualListProps,
  setup(props, { attrs, expose }) {
    const listNode = ref();
    expose({
      listNode,
      scrollTo: (params: any) => {
        listNode.value?.scrollTo(params);
      },
    });
    return () => {
      return <List ref={(el: any) => (listNode.value = el)} {...attrs} {...props} />;
    };
  },
});
