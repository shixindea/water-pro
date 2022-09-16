import type { PropType, ExtractPropTypes } from 'vue';
import type { UploadImageLocale } from '../interface';
import PropTypes from '../../_util/vue-types';
import { acceptListString } from '../../_util/hooks/use-upload';

export const uploadImageProps = {
  value: PropTypes.string,
  onFormChange: {
    type: Function,
    default: () => {},
  },
  mergeOriginDatas: {
    type: Function,
    default: undefined,
  },
  action: PropTypes.string,
  data: [Object, Function] as PropType<
    | Record<string, unknown>
    | ((file: any) => Record<string, unknown> | Promise<Record<string, unknown>>)
  >,
  accept: PropTypes.string.def(acceptListString),
  autoUpload: PropTypes.bool.def(true),
  headers: PropTypes.object,
  urlKey: PropTypes.string.def('url'),
  resultKey: PropTypes.string.def('data'),
  nameKey: PropTypes.string.def('name'),
  imageWidth: PropTypes.number.def(100),
  imageHeight: PropTypes.number.def(100),
  limitSize: PropTypes.number.def(2),
  limitErrorText: PropTypes.string.def('图片必须小于'),
  placeholder: PropTypes.string,
  errorImage: PropTypes.string,
  disabled: PropTypes.bool,
  allowUpdate: PropTypes.bool.def(false),
  locale: { type: Object as PropType<UploadImageLocale> },
};
export type UploadImageProps = Partial<ExtractPropTypes<typeof uploadImageProps>>;
