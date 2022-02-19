import { Recordable } from '../_util/type';

export interface TagModalListLocale {
  modalTitle: string;
}

export interface TagModalListBeforeArgs {
  params: Recordable;
  success: () => void;
  error: () => void;
}
