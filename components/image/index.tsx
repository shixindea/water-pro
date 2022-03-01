import type { App, ExtractPropTypes, ImgHTMLAttributes, Plugin } from 'vue';
import { defineComponent, watchEffect, ref } from 'vue';

import ImageInternal from '../vc-image';
import Spin from '../spin';
import { imageProps } from '../vc-image/src/Image';
import PropTypes from '../_util/vue-types';
import useConfigInject from '../_util/hooks/useConfigInject';
import omit from '../_util/omit';

import PreviewGroup from './PreviewGroup';
import { isPlainObject } from '@fe6/shared';

export type ImageProps = Partial<
  ExtractPropTypes<typeof imageProps> & Omit<ImgHTMLAttributes, 'placeholder' | 'onClick'>
>;
const Image = defineComponent<ImageProps>({
  name: 'AImage',
  inheritAttrs: false,
  props: {
    ...imageProps,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  } as any,
  setup(props, { slots, attrs }) {
    const { prefixCls } = useConfigInject('image', props);
    let height = props?.width && !props?.height ? props.width : props.height;
    let width = props?.height && !props?.width ? props.height : props.width;
    const theProps = omit(props, ['height', 'src', 'width']);

    return () => {
      let placeholderSlot = slots.placeholder;
      if (!placeholderSlot && !props.placeholder) {
        placeholderSlot = () =>
          (
            <div class={`${prefixCls.value}-pd`}>
              <Spin />
            </div>
          ) as any;
      }

      const imgSrc = ref('');
      watchEffect(() => {
        imgSrc.value = props.src;
      });

      const theTrueProps = isPlainObject(props.preview)
        ? { ...props }
        : { ...theProps, height, width };

      return (
        <ImageInternal
          class={props.bordered ? `${prefixCls.value}-bordered` : ''}
          {...{
            ...attrs,
            ...theTrueProps,
            prefixCls: prefixCls.value,
            src: imgSrc.value,
          }}
          v-slots={{ ...slots, placeholderSlot }}
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
