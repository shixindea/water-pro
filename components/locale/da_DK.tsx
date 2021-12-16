import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/da_DK';
import DatePicker from '../date-picker/locale/da_DK';
import TimePicker from '../time-picker/locale/da_DK';
import Calendar from '../calendar/locale/da_DK';
import Input from '../input/locale/da_DK';
import PreviewImage from '../preview-image/locale/da_DK';
import UploadImage from '../upload-image/locale/da_DK';
import UploadCard from '../upload-card/locale/da_DK';
import UploadName from '../upload-name/locale/da_DK';
import TagGroup from '../tag-group/locale/da_DK';
import TagModalList from '../tag-modal-list/locale/da_DK';
import SelectApi from '../select-api/locale/da_DK';

const localeValues: Locale = {
  locale: 'da',
  DatePicker,
  TimePicker,
  Calendar,
  Input,
  SelectApi,
  PreviewImage,
  UploadImage,
  UploadCard,
  UploadName,
  Pagination,
  TagGroup,
  TagModalList,
  Table: {
    filterTitle: 'Filtermenu',
    filterConfirm: 'OK',
    filterReset: 'Nulstil',
    selectAll: 'Vælg alle',
    selectInvert: 'Inverter valg',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Afbryd',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Afbryd',
  },
  Transfer: {
    searchPlaceholder: 'Søg her',
    itemUnit: 'element',
    itemsUnit: 'elementer',
  },
  Upload: {
    uploading: 'Uploader...',
    removeFile: 'Fjern fil',
    uploadError: 'Fejl ved upload',
    previewFile: 'Forhåndsvisning',
    downloadFile: 'Download fil',
  },
  Empty: {
    description: 'Ingen data',
  },
};

export default localeValues;
