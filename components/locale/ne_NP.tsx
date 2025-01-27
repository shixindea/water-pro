import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/en_US';
import DatePicker from '../date-picker/locale/en_US';
import TimePicker from '../time-picker/locale/en_US';
import Calendar from '../calendar/locale/en_US';
import Input from '../input/locale/en_US';
import PreviewImage from '../preview-image/locale/en_US';
import UploadImage from '../upload-image/locale/en_US';
import UploadCard from '../upload-card/locale/en_US';
import UploadName from '../upload-name/locale/en_US';
import TagGroup from '../tag-group/locale/en_US';
import TagModalList from '../tag-modal-list/locale/en_US';
import SelectApi from '../select-api/locale/en_US';
import ColorPicker from '../color-picker/locale/en_US';
import FormPro from '../form-pro/locale/en_US';
import ModalUser from '../modal-user/locale/en_US';
import Classify from '../classify/locale/en_US';

const localeValues: Locale = {
  locale: 'ne-np',
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
  Table: {
    filterTitle: 'फिल्टर मेनु',
    filterConfirm: 'हो',
    filterReset: 'रीसेट',
    selectAll: 'सबै छान्नुुहोस्',
    selectInvert: 'छनौट उल्टाउनुहोस',
  },
  Modal: {
    okText: 'हो',
    cancelText: 'होईन',
    justOkText: 'हो',
  },
  Popconfirm: {
    okText: 'हो',
    cancelText: 'होईन',
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'यहाँ खोज्नुहोस्',
    itemUnit: 'वस्तु',
    itemsUnit: 'वस्तुहरू',
  },
  Upload: {
    uploading: 'अपलोड गर्दै...',
    removeFile: 'फाइल हटाउनुहोस्',
    uploadError: 'अप्लोडमा समस्या भयो',
    previewFile: 'फाइल पूर्वावलोकन गर्नुहोस्',
    downloadFile: 'डाउनलोड फाइल',
  },
  Empty: {
    description: 'डाटा छैन',
  },
};

export default localeValues;
