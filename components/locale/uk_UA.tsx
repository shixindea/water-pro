import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/uk_UA';
import DatePicker from '../date-picker/locale/uk_UA';
import TimePicker from '../time-picker/locale/uk_UA';
import Calendar from '../calendar/locale/uk_UA';
import Input from '../input/locale/uk_UA';
import PreviewImage from '../preview-image/locale/uk_UA';
import UploadImage from '../upload-image/locale/uk_UA';
import UploadCard from '../upload-card/locale/uk_UA';
import UploadName from '../upload-name/locale/uk_UA';
import TagGroup from '../tag-group/locale/uk_UA';
import TagModalList from '../tag-modal-list/locale/uk_UA';
import SelectApi from '../select-api/locale/uk_UA';
import ColorPicker from '../color-picker/locale/uk_UA';
import FormPro from '../form-pro/locale/uk_UA';
import ModalUser from '../modal-user/locale/uk_UA';
import Classify from '../classify/locale/uk_UA';

const localeValues: Locale = {
  locale: 'uk',
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
    filterTitle: 'Фільтрувати',
    filterConfirm: 'OK',
    filterReset: 'Скинути',
    selectAll: 'Обрати всі',
    selectInvert: 'Інвертувати вибір',
  },
  Modal: {
    okText: 'Гаразд',
    cancelText: 'Скасувати',
    justOkText: 'Гаразд',
  },
  Popconfirm: {
    okText: 'Гаразд',
    cancelText: 'Скасувати',
  },
  Transfer: {
    searchPlaceholder: 'Введіть текст для пошуку',
    itemUnit: 'елем.',
    itemsUnit: 'елем.',
  },
  Upload: {
    uploading: 'Завантаження ...',
    removeFile: 'Видалити файл',
    uploadError: 'Помилка завантаження',
    previewFile: 'Попередній перегляд файлу',
    downloadFile: 'Завантажити файл',
  },
  Empty: {
    description: 'Даних немає',
  },
};

export default localeValues;
