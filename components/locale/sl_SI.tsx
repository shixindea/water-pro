import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/sl_SI';
import DatePicker from '../date-picker/locale/sl_SI';
import TimePicker from '../time-picker/locale/sl_SI';
import Calendar from '../calendar/locale/sl_SI';
import Input from '../input/locale/sl_SI';
import PreviewImage from '../preview-image/locale/sl_SI';
import UploadImage from '../upload-image/locale/sl_SI';
import UploadCard from '../upload-card/locale/sl_SI';
import UploadName from '../upload-name/locale/sl_SI';
import TagGroup from '../tag-group/locale/sl_SI';
import TagModalList from '../tag-modal-list/locale/sl_SI';
import SelectApi from '../select-api/locale/sl_SI';
import ColorPicker from '../color-picker/locale/sl_SI';
import FormPro from '../form-pro/locale/sl_SI';
import ModalUser from '../modal-user/locale/sl_SI';

const localeValues: Locale = {
  locale: 'sl',
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
    filterTitle: 'Filter',
    filterConfirm: 'Filtriraj',
    filterReset: 'Pobriši filter',
    selectAll: 'Izberi vse na trenutni strani',
    selectInvert: 'Obrni izbor na trenutni strani',
  },
  Modal: {
    okText: 'V redu',
    cancelText: 'Prekliči',
    justOkText: 'V redu',
  },
  Popconfirm: {
    okText: 'v redu',
    cancelText: 'Prekliči',
  },
  Transfer: {
    searchPlaceholder: 'Išči tukaj',
    itemUnit: 'Objekt',
    itemsUnit: 'Objektov',
  },
  Upload: {
    uploading: 'Nalaganje...',
    removeFile: 'Odstrani datoteko',
    uploadError: 'Napaka pri nalaganju',
    previewFile: 'Predogled datoteke',
    downloadFile: 'Prenos datoteke',
  },
  Empty: {
    description: 'Ni podatkov',
  },
};

export default localeValues;
