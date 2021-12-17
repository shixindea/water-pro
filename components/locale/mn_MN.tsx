import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/mn_MN';
import DatePicker from '../date-picker/locale/mn_MN';
import TimePicker from '../time-picker/locale/mn_MN';
import Calendar from '../calendar/locale/mn_MN';
import Input from '../input/locale/mn_MN';
import PreviewImage from '../preview-image/locale/mn_MN';
import UploadImage from '../upload-image/locale/mn_MN';
import UploadCard from '../upload-card/locale/mn_MN';
import UploadName from '../upload-name/locale/mn_MN';
import TagGroup from '../tag-group/locale/mn_MN';
import TagModalList from '../tag-modal-list/locale/mn_MN';
import SelectApi from '../select-api/locale/mn_MN';
import ColorPicker from '../color-picker/locale/mn_MN';

const localeValues: Locale = {
  locale: 'mn-mn',
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
  Table: {
    filterTitle: 'Хайх цэс',
    filterConfirm: 'OK',
    filterReset: 'Цэвэрлэх',
    selectAll: 'Бүгдийг сонгох',
    selectInvert: 'Бусдыг сонгох',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Цуцлах',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Цуцлах',
  },
  Transfer: {
    searchPlaceholder: 'Хайх',
    itemUnit: 'Зүйл',
    itemsUnit: 'Зүйлүүд',
  },
  Upload: {
    uploading: 'Хуулж байна...',
    removeFile: 'Файл устгах',
    uploadError: 'Хуулахад алдаа гарлаа',
    previewFile: 'Файлыг түргэн үзэх',
    downloadFile: 'Файлыг татах',
  },
  Empty: {
    description: 'Мэдээлэл байхгүй байна',
  },
};

export default localeValues;
