import PreviewGroup from '../vc-image/src/PreviewGroup';
import { computed, defineComponent } from 'vue';
import useConfigInject from '../_util/hooks/useConfigInject';

import IconBytedRotate from '@fe6/icon-vue/lib/icons/byted-rotate';
import IconBytedRotateRight from '@fe6/icon-vue/lib/icons/byted-rotate-right';
import IconBytedZoomOut from '@fe6/icon-vue/lib/icons/byted-zoom-out';
import IconBytedZoomIn from '@fe6/icon-vue/lib/icons/byted-zoom-in';
import IconBytedClose from '@fe6/icon-vue/lib/icons/byted-close';
import IconBytedLeft from '@fe6/icon-vue/lib/icons/byted-left';
import IconBytedRight from '@fe6/icon-vue/lib/icons/byted-right';

export const icons: any = {
  rotateLeft: IconBytedRotate,
  rotateRight: IconBytedRotateRight,
  zoomIn: IconBytedZoomIn,
  zoomOut: IconBytedZoomOut,
  close: IconBytedClose,
  left: IconBytedLeft,
  right: IconBytedRight,
};

const InternalPreviewGroup = defineComponent({
  name: 'AImagePreviewGroup',
  inheritAttrs: false,
  props: { previewPrefixCls: String },
  setup(props, { attrs, slots }) {
    const { getPrefixCls } = useConfigInject('image', props);
    const prefixCls = computed(() => getPrefixCls('image-preview', props.previewPrefixCls));
    return () => {
      return (
        <PreviewGroup
          {...{ ...attrs, ...props }}
          icons={icons}
          previewPrefixCls={prefixCls.value}
          v-slots={slots}
        ></PreviewGroup>
      );
    };
  },
});
export default InternalPreviewGroup;
