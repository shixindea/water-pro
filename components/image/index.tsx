import type { App, ExtractPropTypes, ImgHTMLAttributes, Plugin } from 'vue';
import { defineComponent, computed } from 'vue';
import IconBytedEyes from '@fe6/icon-vue/lib/icons/byted-eyes';
import ImageInternal from '../vc-image';
import Spin from '../spin';
import { imageProps } from '../vc-image/src/Image';
import defaultLocale from '../locale/zh_CN';
import useConfigInject from '../_util/hooks/useConfigInject';
import PreviewGroup, { icons } from './PreviewGroup';
import { getTransitionName } from '../_util/transition';

const theImageProps = () => ({
  ...imageProps(),
  // WATER NOTE
  height: [Number, String],
  width: [Number, String],
});

export type ImageProps = Partial<
  ExtractPropTypes<ReturnType<typeof theImageProps>> &
    Omit<ImgHTMLAttributes, 'placeholder' | 'onClick'>
>;
const Image = defineComponent<ImageProps>({
  name: 'AImage',
  inheritAttrs: false,
  props: theImageProps() as any,
  setup(props, { slots, attrs }) {
    const { prefixCls, rootPrefixCls, configProvider } = useConfigInject('image', props);
    // WATER NOTE
    let height = props?.width && !props?.height ? props.width : props.height;
    let width = props?.height && !props?.width ? props.height : props.width;
    let placeholderSlot = slots.placeholder;
    if (!placeholderSlot && !props.placeholder) {
      placeholderSlot = () =>
        (
          <div class={`${prefixCls.value}-pd`}>
            <Spin />
          </div>
        ) as any;
    }

    const mergedPreview = computed(() => {
      const { preview } = props;

      if (preview === false) {
        return preview;
      }
      const _preview = typeof preview === 'object' ? preview : {};

      return {
        icons,
        ..._preview,
        transitionName: getTransitionName(rootPrefixCls.value, 'zoom', _preview.transitionName),
        maskTransitionName: getTransitionName(
          rootPrefixCls.value,
          'fade',
          _preview.maskTransitionName,
        ),
      };
    });

    return () => {
      const imageLocale = configProvider.locale?.Image || defaultLocale.Image;
      const defaultPreviewMask = () => (
        <div class={`${prefixCls.value}-mask-info`}>
          <IconBytedEyes colors={['currentColor']} />
          {imageLocale?.preview}
        </div>
      );
      const { previewMask = slots.previewMask || defaultPreviewMask } = props;
      return (
        <ImageInternal
          class={props.bordered ? `${prefixCls.value}-bordered` : ''}
          {...{
            ...attrs,
            ...props,
            prefixCls: prefixCls.value,
            // WATER NOTE
            width,
            height,
          }}
          preview={mergedPreview.value}
          v-slots={{
            ...slots,
            previewMask: typeof previewMask === 'function' ? previewMask : null,
            placeholder: placeholderSlot,
          }}
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
