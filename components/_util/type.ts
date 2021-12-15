import type { App, PropType, VNodeChild, Plugin, Ref } from 'vue';

// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
export const tuple = <T extends string[]>(...args: T) => args;

export const tupleNum = <T extends number[]>(...args: T) => args;

export type RefType<T> = T | null;
export type Nullable<T> = T | null;
export type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;
export type TimeoutHandle = ReturnType<typeof setTimeout>;

export interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
  $el: T;
}
export type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null;

export interface ChangeEvent extends Event {
  target: HTMLInputElement;
}

export interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

export type Indexable<T extends any = any> = {
  [key: string]: T;
};
/**
 * https://stackoverflow.com/a/59187769
 * Extract the type of an element of an array/tuple without performing indexing
 */
export type ElementOf<T> = T extends (infer E)[] ? E : T extends readonly (infer F)[] ? F : never;

/**
 * https://github.com/Microsoft/TypeScript/issues/29729
 */
export type LiteralUnion<T extends U, U> = T | (U & {});

export type Data = Record<string, unknown>;

export type Key = string | number;

type DefaultFactory<T> = (props: Data) => T | null | undefined;

export interface PropOptions<T = any, D = T> {
  type?: PropType<T> | true | null;
  required?: boolean;
  default?: D | DefaultFactory<D> | null | undefined | object;
  validator?(value: unknown): boolean;
}

export type VueNode = VNodeChild | JSX.Element;
export type Hash<T> = Indexable<T>;

export type Recordable<T extends any = any> = Record<string, T>;

export const withInstall = <T>(comp: T) => {
  const c = comp as any;
  c.install = function (app: App) {
    app.component(c.displayName || c.name, comp);
  };

  return comp as T & Plugin;
};

export type MaybeRef<T> = T | Ref<T>;

export interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}

export interface UploadResponse {
  data: any;
  code: number;
  refresh: boolean;
  message: string;
}

export interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: UploadResponse;
  url?: string;
  type?: string;
  size: number;
  originFileObj: any;
}
