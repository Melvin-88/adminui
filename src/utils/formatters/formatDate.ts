import localeService from '../LocaleService';

import formatDateByLocale from './formatDateByLocale';

const formatDate = (value?: string): string => (
  formatDateByLocale(value, localeService.locale)
);

export default formatDate;
