import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/el_GR';
import DatePicker from '../date-picker/locale/el_GR';
import TimePicker from '../time-picker/locale/el_GR';
import Calendar from '../calendar/locale/el_GR';
import Input from '../input/locale/el_GR';
import PreviewImage from '../preview-image/locale/el_GR';
import UploadImage from '../upload-image/locale/el_GR';
import UploadCard from '../upload-card/locale/el_GR';
import UploadName from '../upload-name/locale/el_GR';
import TagGroup from '../tag-group/locale/el_GR';
import TagModalList from '../tag-modal-list/locale/el_GR';

const localeValues: Locale = {
  locale: 'el',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Input,
  PreviewImage,
  UploadImage,
  UploadCard,
  UploadName,
  TagGroup,
  TagModalList,
  Table: {
    filterTitle: 'Μενού φίλτρων',
    filterConfirm: 'ΟΚ',
    filterReset: 'Επαναφορά',
    selectAll: 'Επιλογή τρέχουσας σελίδας',
    selectInvert: 'Αντιστροφή τρέχουσας σελίδας',
  },
  Modal: {
    okText: 'ΟΚ',
    cancelText: 'Άκυρο',
    justOkText: 'ΟΚ',
  },
  Popconfirm: {
    okText: 'ΟΚ',
    cancelText: 'Άκυρο',
  },
  Transfer: {
    searchPlaceholder: 'Αναζήτηση',
    itemUnit: 'αντικείμενο',
    itemsUnit: 'αντικείμενα',
  },
  Upload: {
    uploading: 'Μεταφόρτωση...',
    removeFile: 'Αφαίρεση αρχείου',
    uploadError: 'Σφάλμα μεταφόρτωσης',
    previewFile: 'Προεπισκόπηση αρχείου',
    downloadFile: 'Λήψη αρχείου',
  },
  Empty: {
    description: 'Δεν υπάρχουν δεδομένα',
  },
};

export default localeValues;
