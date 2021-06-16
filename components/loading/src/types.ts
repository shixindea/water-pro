/** @format */

import { SizeEnum } from '../../../enums/size';

export interface LoadingProps {
  tip: string;
  size: SizeEnum;
  absolute: boolean;
  loading: boolean;
  background: string;
}
