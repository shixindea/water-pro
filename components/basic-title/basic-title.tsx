/** @format */

import { defineComponent } from 'vue';

import BasicHelp from '../basic-help/src/basic-help';
import Typography from '../typography/Typography';

import { getSlot } from '../_util/props-util';
import useConfigInject from '../_util/hooks/useConfigInject';

import { basicTitleProps } from './props';

export default defineComponent({
  name: 'ABasicTitle',
  props: basicTitleProps,
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('basic-title', props);
    return { prefixClsNew };
  },
  render() {
    const { helpMessage } = this;
    const { text } = this.$attrs;

    let helpNode = null;

    if (text || helpMessage) {
      helpNode = (
        <BasicHelp
          class={`${this.prefixClsNew}-help`}
          text={text || this.helpMessage}
          {...this.$attrs}
        />
      );
    }

    let titleNode: any = this.title;

    const children = getSlot(this);

    if (children.length > 0) {
      titleNode = children.slice();
    }

    return (
      <span
        class={[
          this.prefixClsNew,
          { [`${this.prefixClsNew}-show-span`]: this.span && (children.length > 0 || this.title) },
        ]}
      >
        <Typography.Title {...this.$attrs}>{titleNode}</Typography.Title>
        {helpNode}
      </span>
    );
  },
});
