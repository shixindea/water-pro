import PreviewGroup from '../vc-image/src/PreviewGroup';
import { defineComponent, inject } from 'vue';
import { defaultConfigProvider } from '../config-provider';
import PropTypes from '../_util/vue-types';

const InternalPreviewGroup = defineComponent({
  name: 'AImagePreviewGroup',
  inheritAttrs: false,
  props: { previewPrefixCls: PropTypes.string },
  setup(props, { attrs, slots }) {
    // TODO [fix] 解决使用的过程中未用 configProvider 报错
    const configProvider = inject('configProvider', defaultConfigProvider) || defaultConfigProvider;
    return () => {
      const { getPrefixCls } = configProvider;
      const prefixCls = getPrefixCls('image-preview', props.previewPrefixCls);
      return (
        <PreviewGroup
          previewPrefixCls={prefixCls}
          {...{ ...attrs, ...props }}
          v-slots={slots}
        ></PreviewGroup>
      );
    };
  },
});
export default InternalPreviewGroup;
