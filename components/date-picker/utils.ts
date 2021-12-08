import moment from 'moment';

type Value = moment.Moment | undefined | null;
type Format = string | string[] | undefined | ((val?: Value) => string | string[] | undefined);

export function formatDate(value: Value, format: Format) {
  if (!value) {
    return '';
  }
  if (Array.isArray(format)) {
    format = format[0];
  }
  if (typeof format === 'function') {
    return format(value);
  }
  return value.format(format);
}

export const formatTimeWhenUseNowTime = (date: moment.Moment, timePosition = 0, useNowTime = false) => {
  if (!moment.isMoment(date) || !useNowTime) {
    return date;
  }
  const newDate = date.clone();
  if (timePosition === 1) {
    newDate.hour(0);
    newDate.minute(0);
    newDate.second(0);
    newDate.millisecond(0);
  } else {
    newDate.hour(23);
    newDate.minute(59);
    newDate.second(59);
    newDate.millisecond(999);
  }
  return newDate;
};
