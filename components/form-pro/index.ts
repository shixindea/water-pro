/** @format */

import FormPro from './src/form-pro';

import { withInstall } from '../_util/type';

export * from './src/types/form';
export * from './src/types/form-item';
export * from './src/config/interface';

export { useComponentRegister } from './src/hooks/use-component-register';
export { useForm } from './src/hooks/use-form';
export { FORM_PRO_CONFIG_CENTER } from './src/config/center';

export { FormPro };

export default withInstall(FormPro);
