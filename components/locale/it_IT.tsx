import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/it_IT';
import DatePicker from '../date-picker/locale/it_IT';
import TimePicker from '../time-picker/locale/it_IT';
import Calendar from '../calendar/locale/it_IT';
import Input from '../input/locale/it_IT';
import PreviewImage from '../preview-image/locale/it_IT';
import UploadImage from '../upload-image/locale/it_IT';
import UploadCard from '../upload-card/locale/it_IT';
import UploadName from '../upload-name/locale/it_IT';
import TagGroup from '../tag-group/locale/it_IT';
import TagModalList from '../tag-modal-list/locale/it_IT';
import SelectApi from '../select-api/locale/it_IT';
import ColorPicker from '../color-picker/locale/it_IT';
import FormPro from '../form-pro/locale/it_IT';
import ModalUser from '../modal-user/locale/it_IT';
import Classify from '../classify/locale/it_IT';

const localeValues: Locale = {
  locale: 'it',
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
  global: {
    placeholder: 'Selezionare',
  },
  Table: {
    filterTitle: 'Menù Filtro',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    selectAll: 'Seleziona pagina corrente',
    selectInvert: 'Inverti selezione nella pagina corrente',
    sortTitle: 'Ordina',
    triggerDesc: 'Clicca per ordinare in modo discendente',
    triggerAsc: '﻿Clicca per ordinare in modo ascendente',
    cancelSort: 'Clicca per eliminare i filtri',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Annulla',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Annulla',
  },
  Transfer: {
    searchPlaceholder: 'Cerca qui',
    itemUnit: 'elemento',
    itemsUnit: 'elementi',
  },
  Upload: {
    uploading: 'Caricamento...',
    removeFile: 'Rimuovi il file',
    uploadError: 'Errore di caricamento',
    previewFile: 'Anteprima file',
    downloadFile: 'Download file',
  },
  Empty: {
    description: 'Nessun dato',
  },
  Icon: {
    icon: 'icona',
  },
  Text: {
    edit: 'modifica',
    copy: 'copia',
    copied: 'copia effettuata',
    expand: 'espandi',
  },
};

export default localeValues;
