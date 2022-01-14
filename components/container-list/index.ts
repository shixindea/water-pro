/** @format */

import CantainerList from './src/container-list';
import { withInstall } from '../_util/type';

import { virtualListProps } from '../vc-virtual-list';

export { CantainerList };

export const containerListProps = virtualListProps;

export default withInstall(CantainerList);
