/** @format */

import './src/index.scss';
import ModalPro from './src/ModalPro.vue';

export { ModalPro };
export { useModalContext } from './src/hooks/use-modal-context';
export { useModal, useModalInner } from './src/hooks/use-modal';
export * from './src/types';

import { withInstall } from '../_util/type';

export default withInstall(ModalPro);
