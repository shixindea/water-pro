/** @format */

import ContainerLazy from './container-lazy';
import { withInstall } from '../_util/type';

export { ContainerLazy };
export * from './types';
export type { ContainerLazyProps } from './props';

export default withInstall(ContainerLazy);
