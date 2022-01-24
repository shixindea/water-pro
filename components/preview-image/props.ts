import type { ExtractPropTypes } from 'vue';
import type { ProviewImageLocale } from './interface';

import type { PropType } from 'vue';
import PropTypes from '../_util/vue-types';

export const previewImageProps = {
  value: PropTypes.string.def(''),
  placeholder: PropTypes.string,
  errorImage: PropTypes.string,
  locale: { type: Object as PropType<ProviewImageLocale> },
};
export type PreviewImageProps = Partial<ExtractPropTypes<typeof previewImageProps>>;
