/** @format */

import TablePro from './src/table-pro';

import { withInstall } from '../_util/type';
export { default as TableAction } from './src/components/table-action';
export { default as TableImage } from './src/components/table-img';
export { default as TableCard } from './src/components/table-card';

export * from './src/types/table';
export * from './src/types/pagination';
export * from './src/types/table-action';
export type { TableProProps } from './src/props';
export type { TableCardProps } from './src/components/table-card';

export { useTable } from './src/hooks/use-table';

export { TablePro };

export default withInstall(TablePro);
