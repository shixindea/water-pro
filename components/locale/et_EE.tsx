import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/et_EE';
import DatePicker from '../date-picker/locale/et_EE';
import TimePicker from '../time-picker/locale/et_EE';
import Calendar from '../calendar/locale/et_EE';
import Input from '../input/locale/et_EE';
import PreviewImage from '../preview-image/locale/et_EE';
import UploadImage from '../upload-image/locale/et_EE';
import UploadCard from '../upload-card/locale/et_EE';
import UploadName from '../upload-name/locale/et_EE';
import TagGroup from '../tag-group/locale/et_EE';
import TagModalList from '../tag-modal-list/locale/et_EE';
import SelectApi from '../select-api/locale/et_EE';
import ColorPicker from '../color-picker/locale/et_EE';
import FormPro from '../form-pro/locale/et_EE';
import ModalUser from '../modal-user/locale/et_EE';

const localeValues: Locale = {
  locale: 'et',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Input,
  SelectApi,
  ModalUser,
  PreviewImage,
  UploadImage,
  UploadCard,
  UploadName,
  TagGroup,
  TagModalList,
  FormPro,
  ColorPicker,
  Table: {
    filterTitle: 'Filtri menüü',
    filterConfirm: 'OK',
    filterReset: 'Nulli',
    selectAll: 'Vali kõik',
    selectInvert: 'Inverteeri valik',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Tühista',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Tühista',
  },
  Transfer: {
    searchPlaceholder: 'Otsi siit',
    itemUnit: 'kogus',
    itemsUnit: 'kogus',
  },
  Upload: {
    uploading: 'Üleslaadimine...',
    removeFile: 'Eemalda fail',
    uploadError: 'Üleslaadimise tõrge',
    previewFile: 'Faili eelvaade',
    downloadFile: 'Laadige fail alla',
  },
  Empty: {
    description: 'Andmed puuduvad',
  },
};

export default localeValues;
