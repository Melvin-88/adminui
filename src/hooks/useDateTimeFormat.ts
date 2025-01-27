import { useMemo } from 'react';

import { useGlobalConfig } from '^common/GlobalConfig';
import dateTimeFormats from '^configs/dateTimeFormats';
import IDateTimeFormat from '^types/IDateTimeFormat';

const useDateTimeFormat = (): IDateTimeFormat => {
  const { locale } = useGlobalConfig();

  return useMemo(
    (): IDateTimeFormat => dateTimeFormats[locale],
    [locale],
  );
};

export default useDateTimeFormat;
