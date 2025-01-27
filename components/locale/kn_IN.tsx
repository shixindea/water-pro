import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/kn_IN';
import DatePicker from '../date-picker/locale/kn_IN';
import TimePicker from '../time-picker/locale/kn_IN';
import Calendar from '../calendar/locale/kn_IN';
import Input from '../input/locale/kn_IN';
import PreviewImage from '../preview-image/locale/kn_IN';
import UploadImage from '../upload-image/locale/kn_IN';
import UploadCard from '../upload-card/locale/kn_IN';
import UploadName from '../upload-name/locale/kn_IN';
import TagGroup from '../tag-group/locale/kn_IN';
import TagModalList from '../tag-modal-list/locale/kn_IN';
import SelectApi from '../select-api/locale/kn_IN';
import ColorPicker from '../color-picker/locale/kn_IN';
import FormPro from '../form-pro/locale/kn_IN';
import ModalUser from '../modal-user/locale/kn_IN';
import Classify from '../classify/locale/kn_IN';

const localeValues: Locale = {
  locale: 'kn',
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
  // locales for all comoponents
  global: {
    placeholder: 'ದಯವಿಟ್ಟು ಆರಿಸಿ',
  },
  Table: {
    filterTitle: 'ಪಟ್ಟಿ ಸೋಸಿ',
    filterConfirm: 'ಸರಿ',
    filterReset: 'ಮರುಹೊಂದಿಸಿ',
    emptyText: 'ಮಾಹಿತಿ ಇಲ್ಲ',
    selectAll: 'ಪ್ರಸ್ತುತ ಪುಟವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    selectInvert: 'ಪ್ರಸ್ತುತ ಪುಟವನ್ನು ತಿರುಗಿಸಿ',
    sortTitle: 'ವಿಂಗಡಿಸಿ',
  },
  Modal: {
    okText: 'ಸರಿ',
    cancelText: 'ರದ್ದು',
    justOkText: 'ಸರಿ',
  },
  Popconfirm: {
    okText: 'ಸರಿ',
    cancelText: 'ರದ್ದು',
  },
  Transfer: {
    titles: ['', ''],
    notFoundContent: 'ದೊರೆತಿಲ್ಲ',
    searchPlaceholder: 'ಇಲ್ಲಿ ಹುಡುಕಿ',
    itemUnit: 'ವಿಷಯ',
    itemsUnit: 'ವಿಷಯಗಳು',
  },
  Select: {
    notFoundContent: 'ದೊರೆತಿಲ್ಲ',
  },
  Upload: {
    uploading: 'ಏರಿಸಿ...',
    removeFile: 'ಫೈಲ್ ತೆಗೆದುಹಾಕಿ',
    uploadError: 'ಏರಿಸುವ ದೋಷ',
    previewFile: 'ಫೈಲ್ ಮುನ್ನೋಟ',
    downloadFile: 'ಫೈಲ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
  },
};

export default localeValues;
