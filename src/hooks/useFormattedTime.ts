import { useMemo } from 'react';

import { useGlobalConfig } from '^common/GlobalConfig';
import formatTimeByLocale from '^utils/formatters/formatTimeByLocale';

const useFormattedTime = (value?: string): string => {
  const { locale } = useGlobalConfig();

  return useMemo(
    (): string => formatTimeByLocale(value, locale),
    [value, locale],
  );
};

export default useFormattedTime;
