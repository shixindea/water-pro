import type { App, Plugin } from 'vue';
import Form, { formProps } from './Form';
import FormItem, { formItemProps } from './FormItem';
import FormErrorList from './ErrorList';
import useForm from './useForm';
import FormItemRest, { useInjectFormItemContext } from './FormItemContext';
export type { Rule, RuleObject } from './interface';

export type { FormProps, FormInstance } from './Form';
export type { FormItemProps, FormItemInstance } from './FormItem';

Form.useInjectFormItemContext = useInjectFormItemContext;
Form.ItemRest = FormItemRest;
/* istanbul ignore next */
Form.install = function (app: App) {
  app.component(Form.name, Form);
  app.component(Form.Item.name, Form.Item);
  app.component(FormItemRest.name, FormItemRest);
  app.component(FormErrorList.name, FormErrorList);
  return app;
};

export {
  FormItem,
  FormErrorList,
  formItemProps,
  formProps,
  FormItemRest,
  useForm,
  useInjectFormItemContext,
};

export default Form as typeof Form &
  Plugin & {
    readonly Item: typeof Form.Item;
    readonly ItemRest: typeof FormItemRest;
    readonly useForm: typeof useForm;
    readonly useInjectFormItemContext: typeof useInjectFormItemContext;
  };
