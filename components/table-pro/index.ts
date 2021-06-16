/** @format */

import TablePro from './src/TablePro.vue';
export { default as TableAction } from './src/components/TableAction.vue';
export { default as EditTableHeaderIcon } from './src/components/EditTableHeaderIcon.vue';
export { default as TableImg } from './src/components/TableImg.vue';

import { withInstall } from '../_util/type';

export * from './src/types/table';
export * from './src/types/pagination';
export * from './src/types/table-action';

export { useTable } from './src/hooks/use-table';

export type { FormSchema, FormProps } from '../form-pro/src/types/form';

export type { EditRecordRow } from './src/components/editable';

export {
  TablePro,
}

export default withInstall(TablePro);
