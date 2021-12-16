import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/lv_LV';
import DatePicker from '../date-picker/locale/lv_LV';
import TimePicker from '../time-picker/locale/lv_LV';
import Calendar from '../calendar/locale/lv_LV';
import Input from '../input/locale/lv_LV';
import PreviewImage from '../preview-image/locale/lv_LV';
import UploadImage from '../upload-image/locale/lv_LV';
import UploadCard from '../upload-card/locale/lv_LV';
import UploadName from '../upload-name/locale/lv_LV';
import TagGroup from '../tag-group/locale/lv_LV';
import TagModalList from '../tag-modal-list/locale/lv_LV';
import SelectApi from '../select-api/locale/lv_LV';

const localeValues: Locale = {
  locale: 'lv',
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
    filterTitle: 'Filtrēšanas izvēlne',
    filterConfirm: 'OK',
    filterReset: 'Atiestatīt',
    selectAll: 'Atlasiet pašreizējo lapu',
    selectInvert: 'Pārvērst pašreizējo lapu',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Atcelt',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Atcelt',
  },
  Transfer: {
    searchPlaceholder: 'Meklēt šeit',
    itemUnit: 'vienumu',
    itemsUnit: 'vienumus',
  },
  Upload: {
    uploading: 'Augšupielāde...',
    removeFile: 'Noņemt failu',
    uploadError: 'Augšupielādes kļūda',
    previewFile: 'Priekšskatiet failu',
    downloadFile: 'Lejupielādēt failu',
  },
  Empty: {
    description: 'Nav datu',
  },
};

export default localeValues;
