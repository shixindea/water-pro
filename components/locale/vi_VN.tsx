import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/vi_VN';
import DatePicker from '../date-picker/locale/vi_VN';
import TimePicker from '../time-picker/locale/vi_VN';
import Calendar from '../calendar/locale/vi_VN';
import Input from '../input/locale/vi_VN';
import PreviewImage from '../preview-image/locale/vi_VN';
import UploadImage from '../upload-image/locale/vi_VN';
import UploadCard from '../upload-card/locale/vi_VN';
import UploadName from '../upload-name/locale/vi_VN';
import TagGroup from '../tag-group/locale/vi_VN';
import TagModalList from '../tag-modal-list/locale/vi_VN';
import SelectApi from '../select-api/locale/vi_VN';

const localeValues: Locale = {
  locale: 'vi',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Input,
  SelectApi,
  PreviewImage,
  UploadImage,
  UploadCard,
  UploadName,
  TagGroup,
  TagModalList,
  Table: {
    filterTitle: 'Bộ ',
    filterConfirm: 'OK',
    filterReset: 'Tạo Lại',
    selectAll: 'Chọn Tất Cả',
    selectInvert: 'Chọn Ngược Lại',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Huỷ',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Huỷ',
  },
  Transfer: {
    searchPlaceholder: 'Tìm ở đây',
    itemUnit: 'mục',
    itemsUnit: 'mục',
  },
  Upload: {
    uploading: 'Đang tải lên...',
    removeFile: 'Gỡ bỏ tập tin',
    uploadError: 'Lỗi tải lên',
    previewFile: 'Xem thử tập tin',
    downloadFile: 'Tải tập tin',
  },
  Empty: {
    description: 'Trống',
  },
};

export default localeValues;
