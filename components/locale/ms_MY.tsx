import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/ms_MY';
import DatePicker from '../date-picker/locale/ms_MY';
import TimePicker from '../time-picker/locale/ms_MY';
import Calendar from '../calendar/locale/ms_MY';
import Input from '../input/locale/ms_MY';
import PreviewImage from '../preview-image/locale/ms_MY';
import UploadImage from '../upload-image/locale/ms_MY';
import UploadCard from '../upload-card/locale/ms_MY';
import UploadName from '../upload-name/locale/ms_MY';
import TagGroup from '../tag-group/locale/ms_MY';
import TagModalList from '../tag-modal-list/locale/ms_MY';
import SelectApi from '../select-api/locale/ms_MY';
import ColorPicker from '../color-picker/locale/ms_MY';

const localeValues: Locale = {
  locale: 'ms-my',
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
  ColorPicker,
  global: {
    placeholder: 'Sila pilih',
  },
  PageHeader: {
    back: 'Kembali',
  },
  Text: {
    edit: 'Sunting',
    copy: 'Salin',
    copied: 'Berjaya menyalin',
    expand: 'Kembang',
  },
  Empty: {
    description: 'Tiada data',
  },
  Table: {
    filterTitle: 'Cari dengan tajuk',
    filterConfirm: 'Ok',
    filterReset: 'Menetapkan semula',
    emptyText: 'Tiada data',
    selectAll: 'Pilih semua',
    selectInvert: 'Terbalikkan',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Batal',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Batal',
  },
  Transfer: {
    notFoundContent: 'Tidak dijumpai',
    searchPlaceholder: 'Carian di sini',
    itemUnit: 'item',
    itemsUnit: 'item',
  },
  Icon: {
    icon: 'ikon',
  },
  Select: {
    notFoundContent: 'Tidak Dijumpai',
  },
  Upload: {
    uploading: 'Sedang memuat naik...',
    removeFile: 'Buang fail',
    uploadError: 'Masalah muat naik',
    previewFile: 'Tengok fail',
    downloadFile: 'Muat turun fail',
  },
};

export default localeValues;
