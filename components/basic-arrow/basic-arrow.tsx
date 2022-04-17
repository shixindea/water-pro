/** @format */

import { defineComponent, computed } from 'vue';
import IconBytedRight from '@fe6/icon-vue/lib/icons/byted-right';

import ATooltip from '../tooltip';
import useConfigInject from '../_util/hooks/useConfigInject';

import { basicArrowProps } from './props';
import { isArray } from '@fe6/shared';

export default defineComponent({
  name: 'ABasicArrow',
  components: { IconBytedRight },
  props: basicArrowProps,
  setup(props) {
    const {
      prefixCls: prefixClsNew,
      theme,
      iconColorDefault,
      iconColorDark,
      iconCurrentColor,
    } = useConfigInject('basic-arrow', props);

    const getClass = computed(() => {
      const { expand, top, bottom, inset } = props;
      return [
        prefixClsNew.value,
        {
          [`${prefixClsNew.value}-active`]: expand,
          [`${prefixClsNew.value}-top`]: top,
          [`${prefixClsNew.value}-inset`]: inset,
          [`${prefixClsNew.value}-bottom`]: bottom,
        },
      ];
    });

    return {
      getClass,
      theme,
      iconColorDefault,
      iconColorDark,
      iconCurrentColor,
    };
  },
  render() {
    let theColors =
      this.colors && isArray(this.colors) && this.colors.length > 0
        ? this.colors
        : [this.iconCurrentColor];

    const innerNode = (
      <span class={this.getClass}>
        <IconBytedRight size={this.size} colors={theColors} />
      </span>
    );
    let contentNode = null;

    if (this.helpMessage) {
      contentNode = <ATooltip title={this.helpMessage}>{innerNode}</ATooltip>;
    } else {
      contentNode = innerNode;
    }
    return contentNode;
  },
});
