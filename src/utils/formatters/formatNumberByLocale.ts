import Locale from '^enums/Locale';

const localeToFormatterLocaleMap: Record<Locale, string> = {
  [Locale.DK]: 'da-DK',
};

export type TFormatNumberByLocaleValue = number | string | null;

const FALLBACK = '';

const formatNumberByLocale = (value?: TFormatNumberByLocaleValue, options?: Intl.NumberFormatOptions, locale: Locale = Locale.DK): string => {
  const numericValue = Number(value);

  if (value === null || isNaN(numericValue)) {
    return FALLBACK;
  }

  return numericValue.toLocaleString(localeToFormatterLocaleMap[locale], {
    maximumFractionDigits: 2,
    ...options,
  });
};

export default formatNumberByLocale;
