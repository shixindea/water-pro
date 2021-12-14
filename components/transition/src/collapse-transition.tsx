/** @format */

// collapse 展开折叠
import { defineComponent } from 'vue';

import ExpandTransition from './expand-transition-comp';

export default defineComponent({
  name: 'CollapseTransition',
  render() {
    return <ExpandTransition>{this.$slots.default?.()}</ExpandTransition>;
  },
});
