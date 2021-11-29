import { VNode, CSSProperties } from 'vue';

export interface TreeDataItem {
  key?: string | number;
  title?: string;
  isLeaf?: boolean;
  selectable?: boolean;
  children?: TreeDataItem[];
  disableCheckbox?: boolean;
  disabled?: boolean;
  class?: string;
  style?: CSSProperties;
  checkable?: boolean;
  icon?: VNode;
  slots?: Record<string, string>;
  switcherIcon?: VNode;
  // support custom field
  [key: string]: any;
}

interface DefaultEvent {
  nativeEvent: MouseEvent;
  node: Record<string, any>;
}

export interface CheckEvent extends DefaultEvent {
  checked: boolean;
  checkedNodes: Array<Record<string, any>>;
  checkedNodesPositions: { node: Record<string, any>; pos: string | number }[];
  event: string;
  halfCheckedKeys: (string | number)[];
}

export interface ExpendEvent extends DefaultEvent {
  expanded: boolean;
}

export interface SelectEvent extends DefaultEvent {
  event: string;
  selected: boolean;
  selectedNodes: Array<Record<string, any>>;
}

export interface TreeDragEvent {
  event: DragEvent;
  expandedKeys: (string | number)[];
  node: Record<string, any>;
}

export interface DropEvent {
  dragNode: Record<string, any>;
  dragNodesKeys: (string | number)[];
  dropPosition: number;
  dropToGap: boolean;
  event: DragEvent;
  node: Record<string, any>;
}
