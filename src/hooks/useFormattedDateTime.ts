import { useMemo } from 'react';

import { useGlobalConfig } from '^common/GlobalConfig';
import formatDateTimeByLocale from '^utils/formatters/formatDateTimeByLocale';

const useFormattedDateTime = (value?: string): string => {
  const { locale } = useGlobalConfig();

  return useMemo(
    (): string => formatDateTimeByLocale(value, locale),
    [value, locale],
  );
};

export default useFormattedDateTime;
