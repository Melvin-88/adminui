import { format } from 'date-fns';

import dateTimeFormats from '^configs/dateTimeFormats';
import Locale from '^enums/Locale';

const formatDateByLocale = (value?: string, locale: Locale = Locale.DK): string => {
  if (!value) {
    return '';
  }

  const { date: dateFormat } = dateTimeFormats[locale];

  return format(new Date(value), dateFormat);
};

export default formatDateByLocale;
