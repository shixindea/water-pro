import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/kmr_IQ';
import DatePicker from '../date-picker/locale/kmr_IQ';
import TimePicker from '../time-picker/locale/kmr_IQ';
import Calendar from '../calendar/locale/kmr_IQ';
import Input from '../input/locale/kmr_IQ';
import PreviewImage from '../preview-image/locale/kmr_IQ';
import UploadImage from '../upload-image/locale/kmr_IQ';
import UploadCard from '../upload-card/locale/kmr_IQ';
import UploadName from '../upload-name/locale/kmr_IQ';
import TagGroup from '../tag-group/locale/kmr_IQ';
import TagModalList from '../tag-modal-list/locale/kmr_IQ';
import SelectApi from '../select-api/locale/kmr_IQ';
import ColorPicker from '../color-picker/locale/kmr_IQ';
import FormPro from '../form-pro/locale/kmr_IQ';
import ModalUser from '../modal-user/locale/kmr_IQ';

// please use antd/lib/locale/kmr_IQ instead
// keep this file for compatibility
// https://github.com/ant-design/ant-design/issues/25778

const localeValues: Locale = {
  locale: 'ku-iq',
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
    filterTitle: 'Menuê peldanka',
    filterConfirm: 'Temam',
    filterReset: 'Jê bibe',
    selectAll: 'Hemî hilbijêre',
    selectInvert: 'Hilbijartinan veguhere',
  },
  Modal: {
    okText: 'Temam',
    cancelText: 'Betal ke',
    justOkText: 'Temam',
  },
  Popconfirm: {
    okText: 'Temam',
    cancelText: 'Betal ke',
  },
  Transfer: {
    searchPlaceholder: 'Lêgerîn',
    itemUnit: 'tişt',
    itemsUnit: 'tişt',
  },
  Upload: {
    uploading: 'Bardike...',
    removeFile: 'Pelê rabike',
    uploadError: 'Xeta barkirine',
    previewFile: 'Pelê pêşbibîne',
    downloadFile: 'Pelê dakêşin',
  },
  Empty: {
    description: 'Agahî tune',
  },
};

export default localeValues;
