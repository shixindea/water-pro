/** @format */

import FormPro from './src/form-pro';

import { withInstall } from '../_util/type';

export * from './src/types/form';
export * from './src/types/form-item';

export { useComponentRegister } from './src/hooks/use-component-register';
export { useForm } from './src/hooks/use-form';

export { FormPro };

export default withInstall(FormPro);
