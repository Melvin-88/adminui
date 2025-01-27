import { format } from 'date-fns';

import dateTimeFormats from '^configs/dateTimeFormats';
import Locale from '^enums/Locale';

const formatDateTimeByLocale = (value?: string, locale: Locale = Locale.DK): string => {
  if (!value) {
    return '';
  }

  const { date: dateFormat, time: timeFormat } = dateTimeFormats[locale];

  return format(new Date(value), `${dateFormat} | ${timeFormat}`);
};

export default formatDateTimeByLocale;
