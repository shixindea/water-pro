import type { Locale } from '../locale-provider';
import Pagination from '../vc-pagination/locale/sk_SK';
import DatePicker from '../date-picker/locale/sk_SK';
import TimePicker from '../time-picker/locale/sk_SK';
import Calendar from '../calendar/locale/sk_SK';
import Input from '../input/locale/sk_SK';
import PreviewImage from '../preview-image/locale/sk_SK';
import UploadImage from '../upload-image/locale/sk_SK';
import UploadCard from '../upload-card/locale/sk_SK';
import UploadName from '../upload-name/locale/sk_SK';
import TagGroup from '../tag-group/locale/sk_SK';
import TagModalList from '../tag-modal-list/locale/sk_SK';

const localeValues: Locale = {
  locale: 'sk',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Input,
  PreviewImage,
  UploadImage,
  UploadCard,
  UploadName,
  TagGroup,
  TagModalList,
  global: {
    placeholder: 'Prosím vyberte',
  },
  Table: {
    filterTitle: 'Filter',
    filterConfirm: 'OK',
    filterReset: 'Obnoviť',
    selectAll: 'Vybrať všetko',
    selectInvert: 'Vybrať opačné',
    sortTitle: 'Zoradiť',
    expand: 'Rozbaliť riadok',
    collapse: 'Zbaliť riadok',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Zrušiť',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Zrušiť',
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Vyhľadávanie',
    itemUnit: 'položka',
    itemsUnit: 'položiek',
  },
  Upload: {
    uploading: 'Nahrávanie...',
    removeFile: 'Odstrániť súbor',
    uploadError: 'Chyba pri nahrávaní',
    previewFile: 'Zobraziť súbor',
    downloadFile: 'Stiahnuť súbor',
  },
  Empty: {
    description: 'Žiadne dáta',
  },
  Icon: {
    icon: 'ikona',
  },
  Text: {
    edit: 'Upraviť',
    copy: 'Kopírovať',
    copied: 'Skopírované',
    expand: 'Zväčšiť',
  },
  PageHeader: {
    back: 'Späť',
  },
};

export default localeValues;
