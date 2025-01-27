import { format } from 'date-fns';

import dateTimeFormats from '^configs/dateTimeFormats';
import Locale from '^enums/Locale';

const formatTimeByLocale = (value?: string, locale: Locale = Locale.DK): string => {
  if (!value) {
    return '';
  }

  const { time: timeFormat } = dateTimeFormats[locale];

  return format(new Date(value), timeFormat);
};

export default formatTimeByLocale;
