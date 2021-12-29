import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/az_AZ';
import DatePicker from '../date-picker/locale/az_AZ';
import TimePicker from '../time-picker/locale/az_AZ';
import Calendar from '../calendar/locale/az_AZ';
import Input from '../input/locale/az_AZ';
import PreviewImage from '../preview-image/locale/az_AZ';
import UploadImage from '../upload-image/locale/az_AZ';
import UploadCard from '../upload-card/locale/az_AZ';
import UploadName from '../upload-name/locale/az_AZ';
import TagGroup from '../tag-group/locale/az_AZ';
import TagModalList from '../tag-modal-list/locale/az_AZ';
import SelectApi from '../select-api/locale/az_AZ';
import ColorPicker from '../color-picker/locale/az_AZ';
import FormPro from '../form-pro/locale/az_AZ';
import ModalUser from '../modal-user/locale/az_AZ';

const localeValues: Locale = {
  locale: 'az',
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
    filterTitle: 'Filter menyu',
    filterConfirm: 'Axtar',
    filterReset: 'Sıfırla',
    emptyText: 'Məlumat yoxdur',
    selectAll: 'Cari səhifəni seç',
    selectInvert: 'Invert current page',
  },
  Modal: {
    okText: 'Bəli',
    cancelText: 'Ləğv et',
    justOkText: 'Bəli',
  },
  Popconfirm: {
    okText: 'Bəli',
    cancelText: 'Ləğv et',
  },
  Transfer: {
    titles: ['', ''],
    notFoundContent: 'Tapılmadı',
    searchPlaceholder: 'Burada axtar',
    itemUnit: 'item',
    itemsUnit: 'items',
  },
  Select: {
    notFoundContent: 'Tapılmadı',
  },
  Upload: {
    uploading: 'Yüklənir...',
    removeFile: 'Faylı sil',
    uploadError: 'Yükləmə xətası',
    previewFile: 'Fayla önbaxış',
  },
};

export default localeValues;
