import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/is_IS';
import DatePicker from '../date-picker/locale/is_IS';
import TimePicker from '../time-picker/locale/is_IS';
import Calendar from '../calendar/locale/is_IS';
import Input from '../input/locale/is_IS';
import PreviewImage from '../preview-image/locale/is_IS';
import UploadImage from '../upload-image/locale/is_IS';
import UploadCard from '../upload-card/locale/is_IS';
import UploadName from '../upload-name/locale/is_IS';
import TagGroup from '../tag-group/locale/is_IS';
import TagModalList from '../tag-modal-list/locale/is_IS';
import SelectApi from '../select-api/locale/is_IS';
import ColorPicker from '../color-picker/locale/is_IS';

const localeValues: Locale = {
  locale: 'is',
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
    filterTitle: 'Afmarkanir',
    filterConfirm: 'Staðfesta',
    filterReset: 'Núllstilla',
    selectAll: 'Velja allt',
    selectInvert: 'Viðsnúa vali',
  },
  Modal: {
    okText: 'Áfram',
    cancelText: 'Hætta við',
    justOkText: 'Í lagi',
  },
  Popconfirm: {
    okText: 'Áfram',
    cancelText: 'Hætta við',
  },
  Transfer: {
    searchPlaceholder: 'Leita hér',
    itemUnit: 'færsla',
    itemsUnit: 'færslur',
  },
  Upload: {
    uploading: 'Hleð upp...',
    removeFile: 'Fjarlægja skrá',
    uploadError: 'Villa við að hlaða upp',
    previewFile: 'Forskoða skrá',
    downloadFile: 'Hlaða niður skrá',
  },
  Empty: {
    description: 'Engin gögn',
  },
};

export default localeValues;
