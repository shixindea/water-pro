import type { Locale } from '../locale-provider';
import type { PickerLocale } from '../date-picker/generatePicker';
import FormPro from '../form-pro/locale/hu_HU';
import ModalUser from '../modal-user/locale/hu_HU';
import Classify from '../classify/locale/hu_HU';

const datePickerLocale: PickerLocale = {
  lang: {
    locale: 'hy-am',
    placeholder: 'Ընտրեք ամսաթիվը',
    rangePlaceholder: ['Մեկնարկի ամսաթիվ', 'Ավարտի ամսաթիվը'],
    today: 'Այսօր',
    yesterday: 'Yesterday',
    nearlySeven: 'Seven days',
    nearlyThirty: 'Thirty days',
    now: 'Հիմա',
    backToToday: 'Վերադառնալ այսօր',
    ok: 'Օկ',
    clear: 'Մաքրել',
    month: 'Ամիս',
    year: 'Տարի',
    timeSelect: 'ընտրեք ժամը',
    dateSelect: 'ընտրեք ամսաթիվը',
    weekSelect: 'Ընտրեք շաբաթը',
    monthSelect: 'Ընտրեք ամիսը',
    yearSelect: 'Ընտրեք տարին',
    decadeSelect: 'Ընտրեք տասնամյակը',
    yearFormat: 'YYYY',
    dateFormat: 'DD/MM//YYYY',
    dayFormat: 'DD',
    dateTimeFormat: 'DD/MM//YYYY HH:mm:ss',
    monthBeforeYear: true,
    previousMonth: 'Անցած ամիս (PageUp)',
    nextMonth: 'Մյուս ամիս (PageDown)',
    previousYear: 'Անցած տարի (Control + left)',
    nextYear: 'Մյուս տարի (Control + right)',
    previousDecade: 'Անցած տասնամյակ',
    nextDecade: 'Մյուս տասնամյակ',
    previousCentury: 'Անցած դար',
    nextCentury: 'Մյուս դար',
  },
  timePickerLocale: {
    placeholder: 'Ընտրեք ժամը',
  },
};

const localeValues: Locale = {
  locale: 'hy-am',
  Pagination: {
    // Options.jsx
    items_per_page: '/ էջ',
    jump_to: 'Գնալ',
    jump_to_confirm: 'հաստատել',
    page: '',

    // Pagination.jsx
    prev_page: 'Նախորդ Էջ',
    next_page: 'Հաջորդ Էջ',
    prev_5: 'Նախորդ 5 Էջերը',
    next_5: 'Հաջորդ 5 Էջերը',
    prev_3: 'Նախորդ 3 Էջերը',
    next_3: 'Հաջորդ 3 Էջերը',
  },
  DatePicker: datePickerLocale,
  TimePicker: {
    placeholder: 'Ընտրեք ժամը',
  },
  Calendar: datePickerLocale,
  Input: {
    smsCode: {
      btnText: 'send',
      btnUnit: 's',
    },
  },
  ModalUser,
  Classify,
  PreviewImage: {
    placeholder: 'See',
  },
  TagGroup: {
    createPlaceholder: 'Add',
  },
  TagModalList: {
    modalTitle: '选择标签',
  },
  ColorPicker: {
    'ui:dialog': 'color picker dialog',
    'btn:toggle': 'toggle color picker dialog',
    'btn:swatch': 'color swatch',
    'btn:last-color': 'use previous color',
    'btn:save': 'Save',
    'btn:cancel': 'Cancel',
    'btn:clear': 'Clear',

    // Strings used for aria-labels
    'aria:btn:save': 'save and close',
    'aria:btn:cancel': 'cancel and close',
    'aria:btn:clear': 'clear and close',
    'aria:input': 'color input field',
    'aria:palette': 'color selection area',
    'aria:hue': 'hue selection slider',
    'aria:opacity': 'selection slider',
  },
  UploadCard: {
    placeholder: 'Upload',
    dragPlaceholder: 'Drag',
    removePlaceholder: 'Remove',
    seePlaceholder: 'See',
  },
  UploadImage: {
    placeholder: 'Upload',
    removePlaceholder: 'Remove',
    seePlaceholder: 'See',
  },
  UploadName: {
    placeholder: 'Upload',
  },
  SelectApi: {
    loadingPlaceholder: 'Loading',
  },
  global: {
    placeholder: 'Ընտրեք',
  },
  Table: {
    filterTitle: 'ֆիլտրի ընտրացանկ',
    filterConfirm: 'ֆիլտրել',
    filterReset: 'Զրոյացնել',
    selectAll: 'Ընտրեք ընթացիկ էջը',
    selectInvert: 'Փոխարկել ընթացիկ էջը',
    sortTitle: 'Տեսակավորել',
    expand: 'Ընդլայնեք տողը',
    collapse: 'Կրճատել տողը',
  },
  FormPro,
  Modal: {
    okText: 'Օկ',
    cancelText: 'Չեղարկել',
    justOkText: 'Օկ',
  },
  Popconfirm: {
    okText: 'Հաստատել',
    cancelText: 'Մերժել',
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Որոնեք այստեղ',
    itemUnit: 'պարագան',
    itemsUnit: 'պարագաները',
  },
  Upload: {
    uploading: 'Ներբեռնում...',
    removeFile: 'Հեռացնել ֆայլը',
    uploadError: 'Ներբեռնման սխալ',
    previewFile: 'Դիտել ֆայլը',
    downloadFile: 'Ներբեռնել ֆայլը',
  },
  Empty: {
    description: 'Տվյալներ չկան',
  },
  Icon: {
    icon: 'պատկեր',
  },
  Text: {
    edit: 'Խմբագրել',
    copy: 'Պատճենել',
    copied: 'Պատճենվել է',
    expand: 'Տեսնել ավելին',
  },
  PageHeader: {
    back: 'Հետ',
  },
};

export default localeValues;
