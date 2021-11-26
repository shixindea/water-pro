/** @format */

import ModalPro from './src/modal-pro';

import { withInstall } from '../_util/type';

export { ModalPro };
export { useModalContext } from './src/hooks/use-modal-context';
export { useModal } from './src/hooks/use-modal';
export * from './src/types';

export default withInstall(ModalPro);
