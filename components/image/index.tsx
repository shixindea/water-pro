import type { App, ExtractPropTypes, ImgHTMLAttributes, Plugin } from 'vue';
import { defineComponent } from 'vue';
import { LoadingOutlined } from '@ant-design/icons-vue';
import { hasOwn } from '@fe6/shared';

import ImageInternal from '../vc-image';
import { imageProps } from '../vc-image/src/Image';
import useConfigInject from '../_util/hooks/useConfigInject';

import PreviewGroup from './PreviewGroup';

export type ImageProps = Partial<
  ExtractPropTypes<typeof imageProps> & Omit<ImgHTMLAttributes, 'placeholder' | 'onClick'>
>;
const Image = defineComponent<ImageProps>({
  name: 'AImage',
  inheritAttrs: false,
  props: imageProps as any,
  setup(props, { slots, attrs }) {
    const { prefixCls } = useConfigInject('image', props);
    const imageProps: any = { ...props };
    let height =
      hasOwn(imageProps, 'width') && !hasOwn(imageProps, 'height')
        ? imageProps.width
        : imageProps.height;

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
