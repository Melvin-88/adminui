import LocaleService from '^utils/LocaleService';

import formatNumberByLocale, { TFormatNumberByLocaleValue } from './formatNumberByLocale';

const formatNumber = (value?: TFormatNumberByLocaleValue, options?: Intl.NumberFormatOptions): string => (
  formatNumberByLocale(value, options, LocaleService.locale)
);

export default formatNumber;
