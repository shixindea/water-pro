/** @format */

import type { Recordable, EmitType, Indexable, VueNode } from '../../../_util/type';
import type { TableRowSelection as ITableRowSelection } from '../../../table/interface';
import type { ColumnProps } from '../types/column';
import type { TableProProps } from '../props';
// import type { ComponentType } from './component-type';
import type { PaginationProps } from './pagination';
import type { SortOrder } from './column';

export interface TableCurrentDataSource<T = Recordable> {
  currentDataSource: T[];
}

export interface TableRowSelection<T = any> extends ITableRowSelection {
  /**
   * Callback executed when selected rows change
   * @type Function
   */
  onChange?: (selectedRowKeys: string[] | number[], selectedRows: T[]) => any;

  /**
   * Callback executed when select/deselect one row
   * @type FunctionT
   */
  onSelect?: (record: T, selected: boolean, selectedRows: Object[], nativeEvent: Event) => any;

  /**
   * Callback executed when select/deselect all rows
   * @type Function
   */
  onSelectAll?: (selected: boolean, selectedRows: T[], changeRows: T[]) => any;

  /**
   * Callback executed when row selection is inverted
   * @type Function
   */
  onSelectInvert?: (selectedRows: string[] | number[]) => any;
}

export interface TableCustomRecord<T> {
  record?: T;
  index?: number;
}

export interface ExpandedRowRenderRecord<T> extends TableCustomRecord<T> {
  indent?: number;
  expanded?: boolean;
}

export interface TableCustomRecord<T = Recordable> {
  record?: T;
  index?: number;
}

export interface SorterResult {
  column: ColumnProps;
  order: SortOrder;
  field: string;
  columnKey: string;
}

export interface FetchParams {
  searchInfo?: Recordable;
  page?: number;
  sortInfo?: Recordable;
  filterInfo?: Recordable;
  api?: (...arg: any[]) => Promise<any>;
  params?: Recordable;
}

export interface GetColumnsParams {
  ignoreIndex?: boolean;
  ignoreAction?: boolean;
  sort?: boolean;
}

export type SizeType = 'default' | 'middle' | 'small' | 'large';

export interface LocaleParams {
  filterConfirm: string;
  filterReset: string;
  emptyText: string;
}

export interface TableActionType {
  reload: (opt?: FetchParams) => Promise<void>;
  getSelectRows: <T = Recordable>() => T[];
  clearSelectedRowKeys: () => void;
  getSelectRowKeys: () => string[] | number[];
  deleteSelectRowByKey: (key: string) => void;
  setPagination: (info: Partial<PaginationProps>) => void;
  setTableData: <T = Recordable>(values: T[]) => void;
  getColumns: (opt?: GetColumnsParams) => BasicColumn[];
  setColumns: (columns: BasicColumn[] | string[]) => void;
  getDataSource: <T = Recordable>() => T[];
  setLoading: (loading: boolean) => void;
  getLoading?: undefined | boolean;
  setProps: (props: Partial<TableProProps>) => void;
  redoHeight: () => void;
  setSelectedRowKeys: (rowKeys: string[] | number[]) => void;
  getPaginationRef: () => PaginationProps | boolean;
  getSize: () => SizeType;
  getRowSelection: () => TableRowSelection<Recordable>;
  getCacheColumns: () => BasicColumn[];
  emit?: EmitType;
  updateTableData: (index: number, key: string, value: any) => Recordable;
  setShowPagination: (show: boolean) => Promise<void>;
  getShowPagination: () => boolean;
  setCacheColumnsByField?: (dataIndex: string | number | undefined, value: BasicColumn) => void;
}

export interface FetchSetting {
  // 请求接口当前页数
  pageField: string;
  // 每页显示多少条
  sizeField: string;
  // 请求结果列表字段  支持 a.b.c
  listField: string;
  // 请求结果总数字段  支持 a.b.c
  totalField: string;
}

export interface TableSetting {
  reload?: boolean;
  setting?: boolean;
}

export type CellFormatMap = Map<string | number, any>;

export type CellFormatFn = (text: string, record: Recordable, index: number) => string | number;

export type CellFormat = string | CellFormatFn | CellFormatMap;

export interface RecordProps<T> {
  text: any;
  record: T;
  index: number;
}

export declare type CustomRenderFunction<T> = (record: RecordProps<T>) => VueNode;

// @ts-ignore
// ColumnProps 为表格默认参数
// http://water.chjgo.com/components/table-cn
export interface BasicColumn extends ColumnProps {
  // 子集表头
  children?: BasicColumn[];
  dataIndex?: string | number;
  fixed?: 'left' | 'right' | boolean;
  key?: string | number;
  /**
   * Title of this column
   * @type any (string | slot)
   */
  title?: VueNode | string;
  width?: string | number;
  // 文本超过宽度是否显示。。。
  ellipsis?: boolean;
  /**
   * specify how content is aligned
   * @default 'left'
   * @type string
   */
  align?: 'left' | 'right' | 'center';
  // 表头筛选
  filters?: {
    text: string;
    value: string;
    children?:
      | unknown[]
      | (((props: Record<string, unknown>) => unknown[]) & (() => unknown[]) & (() => unknown[]));
  }[];
  customRender?: CustomRenderFunction<Recordable> | VueNode;
  // 设置标致
  flag?: 'INDEX' | 'DEFAULT' | 'CHECKBOX' | 'RADIO' | 'ACTION';
  // 自定义表头的名字，当与 title 同时存在，那么优先 customTitle
  customTitle?: VueNode;
  // 自定义 slot 插槽，对应 a-table-pro 内部的 slot 名字
  slots?: Indexable;
  // 默认情况下是否隐藏列，可以在列配置中显示
  defaultHidden?: boolean;
  // 感叹号的文字提示
  helpMessage?: string | string[];
  // 格式化当前列的显示
  // 4.0 废弃
  // format?: CellFormat;
  // Editable
  // 4.0 废弃
  // edit?: boolean;
  // 4.0 废弃
  // editRow?: boolean;
  // 4.0 废弃
  // editable?: boolean;
  // 4.0 废弃
  // editComponent?: ComponentType;
  // 4.0 废弃
  // editComponentProps?: Recordable;
  // 4.0 废弃
  // editRule?: boolean | ((text: string, record: Recordable) => Promise<string>);
  // 4.0 废弃
  // editValueMap?: (value: any) => string;
  // 4.0 废弃
  // onEditRow?: () => void;
}

export interface TableProColumn extends BasicColumn {}
