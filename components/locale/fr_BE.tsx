import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/fr_BE';
import DatePicker from '../date-picker/locale/fr_BE';
import TimePicker from '../time-picker/locale/fr_BE';
import Calendar from '../calendar/locale/fr_BE';
import Input from '../input/locale/fr_BE';
import PreviewImage from '../preview-image/locale/fr_BE';
import UploadImage from '../upload-image/locale/fr_BE';
import UploadCard from '../upload-card/locale/fr_BE';
import UploadName from '../upload-name/locale/fr_BE';
import TagGroup from '../tag-group/locale/fr_BE';
import TagModalList from '../tag-modal-list/locale/fr_BE';
import SelectApi from '../select-api/locale/fr_BE';

const localeValues: Locale = {
  locale: 'fr',
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
    filterTitle: 'Filtrer',
    filterConfirm: 'OK',
    filterReset: 'Réinitialiser',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Annuler',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Annuler',
  },
  Transfer: {
    searchPlaceholder: 'Recherche',
    itemUnit: 'élément',
    itemsUnit: 'éléments',
  },
  Upload: {
    uploading: 'Téléchargement...',
    removeFile: 'Effacer le fichier',
    uploadError: 'Erreur de téléchargement',
    previewFile: 'Fichier de prévisualisation',
    downloadFile: 'Télécharger un fichier',
  },
  Empty: {
    description: 'Aucune donnée',
  },
  Text: {
    edit: 'éditer',
    copy: 'copier',
    copied: 'copie effectuée',
    expand: 'développer',
  },
};

export default localeValues;
