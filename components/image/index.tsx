import type { App, ExtractPropTypes, ImgHTMLAttributes, Plugin } from 'vue';
import { defineComponent } from 'vue';
import { LoadingOutlined } from '@ant-design/icons-vue';
import { hasOwn } from '@fe6/shared';

import ImageInternal from '../vc-image';
import { imageProps } from '../vc-image/src/Image';
import PropTypes from '../_util/vue-types';
import useConfigInject from '../_util/hooks/useConfigInject';

import PreviewGroup from './PreviewGroup';

const theImageProps = {
  ...imageProps,
  height: PropTypes.number,
  width: PropTypes.number,
};

export type ImageProps = Partial<
  ExtractPropTypes<typeof theImageProps> & Omit<ImgHTMLAttributes, 'placeholder' | 'onClick'>
>;
const Image = defineComponent<ImageProps>({
  name: 'AImage',
  inheritAttrs: false,
  props: theImageProps as any,
  setup(props, { slots, attrs }) {
    const { prefixCls } = useConfigInject('image', props);
    let height = hasOwn(props, 'width') && !hasOwn(props, 'height') ? props.width : props.height;

    return () => {
      const theSlots: any = {
        ...slots,
      };

      if (!theSlots?.placeholder && !props.placeholder) {
        theSlots.placeholder = () => (
          <div class={`${prefixCls.value}-pd`}>
            <LoadingOutlined spin />
          </div>
        );
      }

      return (
        <ImageInternal
          class={props.bordered ? `${prefixCls.value}-border` : ''}
          {...{ ...attrs, ...props, height, prefixCls: prefixCls.value }}
          v-slots={theSlots}
        ></ImageInternal>
      );
    };
  },
});

export { imageProps };

Image.PreviewGroup = PreviewGroup;

Image.install = function (app: App) {
  app.component(Image.name, Image);
  app.component(Image.PreviewGroup.name, Image.PreviewGroup);
  return app;
};

export { PreviewGroup as ImagePreviewGroup };

export default Image as typeof Image &
  Plugin & {
    readonly PreviewGroup: typeof PreviewGroup;
  };
