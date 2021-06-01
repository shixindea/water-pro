<script lang="jsx">
import Basic from './basic.vue';
import BasicString from './basic.md?raw';
import BasicCodeString from './basic.vue?raw';
import Avatar from './avatar.vue';
import AvatarString from './avatar.md?raw';
import AvatarCodeString from './avatar.vue?raw';
import DefaultFileList from './default-file-list.vue';
import DefaultFileListString from './default-file-list.md?raw';
import DefaultFileListCodeString from './default-file-list.vue?raw';
import PictureCard from './picture-card.vue';
import PictureCardString from './picture-card.md?raw';
import PictureCardCodeString from './picture-card.vue?raw';
import FileList from './file-list.vue';
import FileListString from './file-list.md?raw';
import FileListCodeString from './file-list.vue?raw';
import Drag from './drag.vue';
import DragString from './drag.md?raw';
import DragCodeString from './drag.vue?raw';
import PictureStyle from './picture-style.vue';
import PictureStyleString from './picture-style.md?raw';
import PictureStyleCodeString from './picture-style.vue?raw';
import UploadManually from './upload-manually.vue';
import UploadManuallyString from './upload-manually.md?raw';
import UploadManuallyCodeString from './upload-manually.vue?raw';
import Directory from './directory.vue';
import DirectoryString from './directory.md?raw';
import DirectoryCodeString from './directory.vue?raw';
import PreviewFile from './preview-file.vue';
import PreviewFileString from './preview-file.md?raw';
import PreviewFileCodeString from './preview-file.vue?raw';
import TransformFile from './transform-file.vue';
import TransformFileString from './transform-file.md?raw';
import TransformFileCodeString from './transform-file.vue?raw';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 上传
  上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。
  ## 何时使用
  - 当需要上传一个或一些文件时。
  - 当需要展现上传的进度时。
  - 当需要使用拖拽交互时。
        ## 代码演示`,
  us: `# Upload
  Upload file by selecting or dragging.


## When To Use

  Uploading is the process of publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool.

  - When you need to upload one or more files.
  - When you need to show the process of uploading.
  - When you need to upload files by dragging and dropping.
  ## Examples
  `,
};
export default {
  category: 'Components',
  subtitle: '上传',
  type: 'Data Entry',
  title: 'Upload',
  render() {
    return (
      <div>
        <Md cn={md.cn} us={md.us} />
        <demo-sort>
          <demo-container api={BasicString} code={BasicCodeString}>
            <Basic />
          </demo-container>
          <demo-container api={AvatarString} code={AvatarCodeString}>
            <Avatar />
          </demo-container>
          <demo-container api={DefaultFileListString} code={DefaultFileListCodeString}>
            <DefaultFileList />
          </demo-container>
          <demo-container api={PictureCardString} code={PictureCardCodeString}>
            <PictureCard />
          </demo-container>
          <demo-container api={FileListString} code={FileListCodeString}>
            <FileList />
          </demo-container>
          <demo-container api={DragString} code={DragCodeString}>
            <Drag />
          </demo-container>
          <demo-container api={PictureStyleString} code={PictureStyleCodeString}>
            <PictureStyle />
          </demo-container>
          <demo-container api={UploadManuallyString} code={UploadManuallyCodeString}>
            <UploadManually />
          </demo-container>
          <demo-container api={DirectoryString} code={DirectoryCodeString}>
            <Directory />
          </demo-container>
          <demo-container api={PreviewFileString} code={PreviewFileCodeString}>
            <PreviewFile />
          </demo-container>
          <demo-container api={TransformFileString} code={TransformFileCodeString}>
            <TransformFile />
          </demo-container>
        </demo-sort>
        <api>
          <CN />
        </api>
      </div>
    );
  },
};
</script>
