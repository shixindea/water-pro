/** @format */

import ModalPro from './src/modal-pro';

export { ModalPro };
export { useModalContext } from './src/hooks/use-modal-context';
export { useModal } from './src/hooks/use-modal';
export * from './src/types';

import { withInstall } from '../_util/type';

export default withInstall(ModalPro);
