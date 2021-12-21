import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/id_ID';
import DatePicker from '../date-picker/locale/id_ID';
import TimePicker from '../time-picker/locale/id_ID';
import Calendar from '../calendar/locale/id_ID';
import Input from '../input/locale/id_ID';
import PreviewImage from '../preview-image/locale/id_ID';
import UploadImage from '../upload-image/locale/id_ID';
import UploadCard from '../upload-card/locale/id_ID';
import UploadName from '../upload-name/locale/id_ID';
import TagGroup from '../tag-group/locale/id_ID';
import TagModalList from '../tag-modal-list/locale/id_ID';
import SelectApi from '../select-api/locale/id_ID';
import ColorPicker from '../color-picker/locale/id_ID';
import FormPro from '../form-pro/locale/id_ID';

const localeValues: Locale = {
  locale: 'id',
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
  FormPro,
  ColorPicker,
  Table: {
    filterTitle: 'Saring',
    filterConfirm: 'OK',
    filterReset: 'Hapus',
    selectAll: 'Pilih semua di halaman ini',
    selectInvert: 'Balikkan pilihan di halaman ini',
    sortTitle: 'Urutkan',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Batal',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Batal',
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Cari',
    itemUnit: 'item',
    itemsUnit: 'item',
  },
  Upload: {
    uploading: 'Mengunggah...',
    removeFile: 'Hapus file',
    uploadError: 'Kesalahan pengunggahan',
    previewFile: 'File pratinjau',
    downloadFile: 'Unduh berkas',
  },
  Empty: {
    description: 'Tidak ada data',
  },
};

export default localeValues;
