import LocaleService from '../LocaleService';

import formatDateTimeByLocale from './formatDateTimeByLocale';

const formatDateTime = (value?: string): string => (
  formatDateTimeByLocale(value, LocaleService.locale)
);

export default formatDateTime;
