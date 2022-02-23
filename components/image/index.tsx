import type { App, ExtractPropTypes, ImgHTMLAttributes, Plugin } from 'vue';
import { defineComponent, watchEffect, ref } from 'vue';

import ImageInternal from '../vc-image';
import Spin from '../spin';
import { imageProps } from '../vc-image/src/Image';
import PropTypes from '../_util/vue-types';
import useConfigInject from '../_util/hooks/useConfigInject';
import omit from '../_util/omit';

import PreviewGroup from './PreviewGroup';

const theImageProps = {
  ...imageProps,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
    let height = props?.width && !props?.height ? props.width : props.height;
    let width = props?.height && !props?.width ? props.height : props.width;
    const theProps = omit(props, ['height', 'src', 'width']);

    return () => {
      const theSlots: any = {
        ...slots,
      };

      if (!theSlots?.placeholder && !props.placeholder) {
        theSlots.placeholder = () => (
          <div class={`${prefixCls.value}-pd`}>
            <Spin />
          </div>
        );
      }

      const imgSrc = ref('');
      watchEffect(() => {
        imgSrc.value = props.src;
      });

      return (
        <ImageInternal
          class={props.bordered ? `${prefixCls.value}-bordered` : ''}
          {...{
            ...attrs,
            ...theProps,
            height,
            width,
            prefixCls: prefixCls.value,
            src: imgSrc.value,
          }}
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
