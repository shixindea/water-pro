import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/pl_PL';
import DatePicker from '../date-picker/locale/pl_PL';
import TimePicker from '../time-picker/locale/pl_PL';
import Calendar from '../calendar/locale/pl_PL';
import Input from '../input/locale/pl_PL';
import PreviewImage from '../preview-image/locale/pl_PL';
import UploadImage from '../upload-image/locale/pl_PL';
import UploadCard from '../upload-card/locale/pl_PL';
import UploadName from '../upload-name/locale/pl_PL';
import TagGroup from '../tag-group/locale/pl_PL';
import TagModalList from '../tag-modal-list/locale/pl_PL';
import SelectApi from '../select-api/locale/pl_PL';
import ColorPicker from '../color-picker/locale/pl_PL';
import FormPro from '../form-pro/locale/pl_PL';
import ModalUser from '../modal-user/locale/pl_PL';
import Classify from '../classify/locale/pl_PL';

const localeValues: Locale = {
  locale: 'pl',
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
    filterTitle: 'Menu filtra',
    filterConfirm: 'OK',
    filterReset: 'Wyczyść',
    selectAll: 'Zaznacz bieżącą stronę',
    selectInvert: 'Odwróć zaznaczenie',
    triggerDesc: 'Sortuj malejąco',
    triggerAsc: 'Sortuj rosnąco',
    cancelSort: 'Usuń sortowanie',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Anuluj',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Anuluj',
  },
  Transfer: {
    searchPlaceholder: 'Szukaj',
    itemUnit: 'obiekt',
    itemsUnit: 'obiekty',
  },
  Upload: {
    uploading: 'Wysyłanie...',
    removeFile: 'Usuń plik',
    uploadError: 'Błąd wysyłania',
    previewFile: 'Podejrzyj plik',
    downloadFile: 'Pobieranie pliku',
  },
  Empty: {
    description: 'Brak danych',
  },
};

export default localeValues;
