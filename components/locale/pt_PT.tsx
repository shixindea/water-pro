import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/pt_PT';
import DatePicker from '../date-picker/locale/pt_PT';
import TimePicker from '../time-picker/locale/pt_PT';
import Calendar from '../calendar/locale/pt_PT';
import Input from '../input/locale/pt_PT';
import PreviewImage from '../preview-image/locale/pt_PT';
import UploadImage from '../upload-image/locale/pt_PT';
import UploadCard from '../upload-card/locale/pt_PT';
import UploadName from '../upload-name/locale/pt_PT';
import TagGroup from '../tag-group/locale/pt_PT';

const localeValues: Locale = {
  locale: 'pt',
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
  Table: {
    filterTitle: 'Filtro',
    filterConfirm: 'Aplicar',
    filterReset: 'Reiniciar',
    selectAll: 'Selecionar página atual',
    selectInvert: 'Inverter seleção',
    sortTitle: 'Ordenação',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancelar',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancelar',
  },
  Transfer: {
    searchPlaceholder: 'Procurar...',
    itemUnit: 'item',
    itemsUnit: 'itens',
  },
  Upload: {
    uploading: 'A carregar...',
    removeFile: 'Remover',
    uploadError: 'Erro ao carregar',
    previewFile: 'Pré-visualizar',
    downloadFile: 'Baixar',
  },
  Empty: {
    description: 'Sem resultados',
  },
};

export default localeValues;
