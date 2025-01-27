import { useMemo } from 'react';

import { useGlobalConfig } from '^common/GlobalConfig';
import formatNumberByLocale, { TFormatNumberByLocaleValue } from '^utils/formatters/formatNumberByLocale';

const useFormattedNumber = (value?: TFormatNumberByLocaleValue, options?: Intl.NumberFormatOptions): string => {
  const { locale } = useGlobalConfig();

  return useMemo(
    (): string => formatNumberByLocale(value, options, locale),
    [value, options, locale],
  );
};

export default useFormattedNumber;

