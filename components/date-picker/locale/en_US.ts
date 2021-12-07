import CalendarLocale from '../../vc-calendar/src/locale/en_US';
import TimePickerLocale from '../../time-picker/locale/en_US';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'Select date',
    otherPlaceholder: {
      ADatePicker: 'Select date',
      AMonthPicker: 'Select month',
      AYearPicker: 'Select year',
      week: 'Select week',
    },
    rangePlaceholder: ['Start date', 'End date'],
    today: 'Today',
    yesterday: 'Yesterday',
    nearlySeven: 'Seven days',
    nearlyThirty: 'Thirty days',
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};

// All settings at:
// https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json

export default locale;
