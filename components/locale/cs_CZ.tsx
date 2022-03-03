import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/cs_CZ';
import DatePicker from '../date-picker/locale/cs_CZ';
import TimePicker from '../time-picker/locale/cs_CZ';
import Calendar from '../calendar/locale/cs_CZ';
import Input from '../input/locale/cs_CZ';
import PreviewImage from '../preview-image/locale/cs_CZ';
import UploadImage from '../upload-image/locale/cs_CZ';
import UploadCard from '../upload-card/locale/cs_CZ';
import UploadName from '../upload-name/locale/cs_CZ';
import TagGroup from '../tag-group/locale/cs_CZ';
import TagModalList from '../tag-modal-list/locale/cs_CZ';
import SelectApi from '../select-api/locale/cs_CZ';
import ColorPicker from '../color-picker/locale/cs_CZ';
import FormPro from '../form-pro/locale/cs_CZ';
import ModalUser from '../modal-user/locale/cs_CZ';
import Classify from '../classify/locale/cs_CZ';

const localeValues: Locale = {
  locale: 'cs',
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
  global: {
    placeholder: 'Prosím vyber',
  },
  Table: {
    filterTitle: 'Filtr',
    filterConfirm: 'Potvrdit',
    filterReset: 'Obnovit',
    filterEmptyText: 'Žádné filtry',
    selectAll: 'Vybrat všechny řádky na současné stránce',
    selectInvert: 'Invertovat výběr na současné stránce',
    selectionAll: 'Vybrat všechny řádky',
    sortTitle: 'Řadit',
    expand: 'Rozbalit řádek',
    collapse: 'Zabalit řádek',
    triggerDesc: 'Klikni pro sestupné řazení',
    triggerAsc: 'Klikni pro vzestupné řazení',
    cancelSort: 'Klikni pro zrušení řazení',
  },
  Modal: {
    okText: 'Ok',
    cancelText: 'Storno',
    justOkText: 'Ok',
  },
  Popconfirm: {
    okText: 'Ok',
    cancelText: 'Storno',
  },
  Transfer: {
    searchPlaceholder: 'Vyhledávání',
    itemUnit: 'položka',
    itemsUnit: 'položek',
  },
  Upload: {
    uploading: 'Nahrávání...',
    removeFile: 'Odstranit soubor',
    uploadError: 'Chyba při nahrávání',
    previewFile: 'Zobrazit soubor',
    downloadFile: 'Stáhnout soubor',
  },
  Empty: {
    description: 'Žádná data',
  },
};

export default localeValues;
