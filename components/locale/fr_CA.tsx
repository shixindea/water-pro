import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/fr_CA';
import DatePicker from '../date-picker/locale/fr_CA';
import TimePicker from '../time-picker/locale/fr_CA';
import Calendar from '../calendar/locale/fr_CA';
import Input from '../input/locale/fr_CA';
import PreviewImage from '../preview-image/locale/fr_CA';
import UploadImage from '../upload-image/locale/fr_CA';
import UploadCard from '../upload-card/locale/fr_CA';
import UploadName from '../upload-name/locale/fr_CA';
import TagGroup from '../tag-group/locale/fr_CA';
import TagModalList from '../tag-modal-list/locale/fr_CA';
import SelectApi from '../select-api/locale/fr_CA';

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
    selectAll: 'Sélectionner la page actuelle',
    selectInvert: 'Inverser la sélection de la page actuelle',
    selectionAll: 'Sélectionner toutes les données',
    sortTitle: 'Trier',
    expand: 'Développer la ligne',
    collapse: 'Réduire la ligne',
    triggerDesc: 'Trier par ordre décroissant',
    triggerAsc: 'Trier par ordre croissant',
    cancelSort: 'Annuler le tri',
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
    searchPlaceholder: 'Rechercher',
    itemUnit: 'élément',
    itemsUnit: 'éléments',
  },
  Empty: {
    description: 'Aucune donnée',
  },
  Upload: {
    uploading: 'Téléchargement...',
    removeFile: 'Effacer le fichier',
    uploadError: 'Erreur de téléchargement',
    previewFile: 'Fichier de prévisualisation',
    downloadFile: 'Télécharger un fichier',
  },
  Text: {
    edit: 'Éditer',
    copy: 'Copier',
    copied: 'Copie effectuée',
    expand: 'Développer',
  },
  PageHeader: {
    back: 'Retour',
  },
};

export default localeValues;
