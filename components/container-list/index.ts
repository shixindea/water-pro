/** @format */

import type { VirtualListProps } from '../vc-virtual-list';

import CantainerList from './src/container-list';
import { withInstall } from '../_util/type';

export { CantainerList };

export type ContainerListProps = VirtualListProps;

export default withInstall(CantainerList);
