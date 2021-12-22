/** @format */

import type { Recordable } from '../../../_util/type';

import { BasicArrow } from '../../../basic-arrow';

export default () => {
  return (props: Recordable) => {
    if (!props.expandable || !props.record.children.length) {
      return <span />;
    }
    return (
      <BasicArrow
        style="margin-right: 2px; margin-top: -2px;"
        onClick={(e: Event) => {
          props.onExpand(props.record, e);
        }}
        expand={props.expanded}
      />
    );
  };
};
