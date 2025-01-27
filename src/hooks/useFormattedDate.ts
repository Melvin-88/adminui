import { useMemo } from 'react';

import { useGlobalConfig } from '^common/GlobalConfig';
import formatDateByLocale from '^utils/formatters/formatDateByLocale';

const useFormattedDate = (value?: string): string => {
  const { locale } = useGlobalConfig();

  return useMemo(
    (): string => formatDateByLocale(value, locale),
    [value, locale],
  );
};

export default useFormattedDate;
