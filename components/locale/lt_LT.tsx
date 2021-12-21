/* eslint-disable no-template-curly-in-string */

import type { Locale } from '../locale-provider';

import Pagination from '../vc-pagination/locale/lt_LT';
import DatePicker from '../date-picker/locale/lt_LT';
import TimePicker from '../time-picker/locale/lt_LT';
import Calendar from '../calendar/locale/lt_LT';
import Input from '../input/locale/lt_LT';
import PreviewImage from '../preview-image/locale/lt_LT';
import UploadImage from '../upload-image/locale/lt_LT';
import UploadCard from '../upload-card/locale/lt_LT';
import UploadName from '../upload-name/locale/lt_LT';
import TagGroup from '../tag-group/locale/lt_LT';
import TagModalList from '../tag-modal-list/locale/lt_LT';
import SelectApi from '../select-api/locale/lt_LT';
import ColorPicker from '../color-picker/locale/lt_LT';
import FormPro from '../form-pro/locale/lt_LT';

const typeTemplate = '${label} не является типом ${type}';

const localeValues: Locale = {
  locale: 'lt',
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
    filterTitle: 'Filtras',
    filterConfirm: 'Gerai',
    filterReset: 'Atstatyti',
    filterEmptyText: 'Be filtrų',
    emptyText: 'Nėra duomenų',
    selectAll: 'Pasirinkti viską',
    selectInvert: 'Apversti pasirinkimą',
    selectionAll: 'Rinktis visus',
    sortTitle: 'Rikiavimas',
    expand: 'Išskleisti',
    collapse: 'Suskleisti',
    triggerDesc: 'Spustelėkite norėdami rūšiuoti mažėjančia tvarka',
    triggerAsc: 'Spustelėkite norėdami rūšiuoti didėjančia tvarka',
    cancelSort: 'Spustelėkite, kad atšauktumėte rūšiavimą',
  },
  Modal: {
    okText: 'Taip',
    cancelText: 'Atšaukti',
    justOkText: 'Gerai',
  },
  Popconfirm: {
    okText: 'Taip',
    cancelText: 'Atšaukti',
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Paieška',
    itemUnit: 'vnt.',
    itemsUnit: 'vnt.',
    remove: 'Pašalinti',
    selectAll: 'Pasirinkti visus',
    selectCurrent: 'Pasirinkite dabartinį puslapį',
    selectInvert: 'Atkeist pasirinkimą',
    removeAll: 'Ištrinti visus duomenis',
    removeCurrent: 'Ištrinti dabartinį puslapį',
  },
  Upload: {
    uploading: 'Gaunami duomenys...',
    removeFile: 'Ištrinti failą',
    uploadError: 'Įkeliant įvyko klaida',
    previewFile: 'Failo peržiūra',
    downloadFile: 'Įkelti failą',
  },
  Empty: {
    description: 'Nėra duomenų',
  },
  Icon: {
    icon: 'piktograma',
  },
  Text: {
    edit: 'Redaguoti',
    copy: 'Kopijuoti',
    copied: 'Nukopijuota',
    expand: 'Plačiau',
  },
  PageHeader: {
    back: 'Atgal',
  },
  Form: {
    defaultValidateMessages: {
      default: 'Laukelio klaida ${label}',
      required: 'Prašome įvesti ${label}',
      enum: '${label} turėtu būti vienas iš [${enum}]',
      whitespace: '${label} negali likti tuščiu',
      date: {
        format: '${label} neteisingas datos formatas',
        parse: '${label} negali būti konvertuotas į datą',
        invalid: '${label} neatitinka datos formato',
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate,
      },
      string: {
        len: '${label} turi būti ${len} simbolių',
        min: '${label} turi būti ilgesnis nei ${min} simbolių',
        max: '${label} turi būti ne trumpesnis ${max} simbolių',
        range: 'Lauko ${label} reikšmės ribos ${min}-${max} simbolių',
      },
      number: {
        len: '${label} turi būti lygi ${len}',
        min: '${label} turi būti lygus arba didesnis ${min}',
        max: '${label} turi būti lygus arba mažesnis ${max}',
      },
      array: {
        len: 'Pasirinktas kiekis ${label} turi būti lygus ${len}',
        min: 'Pasirinktas kiekis ${label} turi būti lygus arba didesnis ${min}',
        max: 'Pasirinktas kiekis ${label} turi būti lygus arba mažesnis ${max}',
        range: 'Pasirinktas kiekis ${label} turi būti tarp ${min} и ${max}',
      },
      pattern: {
        mismatch: '${label} neatitinka modelio ${pattern}',
      },
    },
  },
};

export default localeValues;
