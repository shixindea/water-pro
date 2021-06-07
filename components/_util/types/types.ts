/** @format */

export interface UploadValueType {
  url: string;
  name: string;
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

export interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}

export interface WelcomeValueType {
  message: string;
  messageAttachContent: any[];
}
