import type { FormProConfigCenter } from './interface';

export const FORM_PRO_CONFIG_CENTER = (params: FormProConfigCenter) => {
  const { labelSpan } = params || {};
  const colSpan = labelSpan || 6;
  return {
    actionAlgin: 'center',
    labelCol: {
      span: colSpan,
    },
    wrapperCol: {
      span: 24 - colSpan,
    },
    actionColOptions: {
      span: 24,
      push: 0,
    },
  };
};
