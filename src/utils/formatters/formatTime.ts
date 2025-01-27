import LocaleService from '../LocaleService';

import formatTimeByLocale from './formatTimeByLocale';

const formatTime = (value?: string): string => (
  formatTimeByLocale(value, LocaleService.locale)
);

export default formatTime;
