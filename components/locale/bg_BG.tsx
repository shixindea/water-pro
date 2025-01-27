import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/bg_BG';
import DatePicker from '../date-picker/locale/bg_BG';
import TimePicker from '../time-picker/locale/bg_BG';
import Calendar from '../calendar/locale/bg_BG';
import Input from '../input/locale/bg_BG';
import PreviewImage from '../preview-image/locale/bg_BG';
import UploadImage from '../upload-image/locale/bg_BG';
import UploadCard from '../upload-card/locale/bg_BG';
import UploadName from '../upload-name/locale/bg_BG';
import TagGroup from '../tag-group/locale/bg_BG';
import TagModalList from '../tag-modal-list/locale/bg_BG';
import SelectApi from '../select-api/locale/bg_BG';
import ColorPicker from '../color-picker/locale/bg_BG';
import FormPro from '../form-pro/locale/bg_BG';
import ModalUser from '../modal-user/locale/bg_BG';
import Classify from '../classify/locale/bg_BG';

const localeValues: Locale = {
  locale: 'bg',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Input,
  SelectApi,
  ModalUser,
  Classify,
  PreviewImage,
  UploadImage,
  UploadCard,
  UploadName,
  TagGroup,
  TagModalList,
  FormPro,
  ColorPicker,
  Table: {
    filterTitle: 'Филтриране',
    filterConfirm: 'Добре',
    filterReset: 'Нулриане',
    selectAll: 'Избор на текуща страница',
    selectInvert: 'Обръщане',
  },
  Modal: {
    okText: 'Добре',
    cancelText: 'Отказ',
    justOkText: 'Добре',
  },
  Popconfirm: {
    okText: 'Добре',
    cancelText: 'Отказ',
  },
  Transfer: {
    searchPlaceholder: 'Търсене',
    itemUnit: 'избор',
    itemsUnit: 'избори',
  },
  Upload: {
    uploading: 'Качване...',
    removeFile: 'Премахване',
    uploadError: 'Грешка при качването',
    previewFile: 'Преглед',
    downloadFile: 'Свали файл',
  },
  Empty: {
    description: 'Няма данни',
  },
};

export default localeValues;
