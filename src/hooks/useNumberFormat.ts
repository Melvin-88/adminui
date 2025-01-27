import { useMemo } from 'react';

import { useGlobalConfig } from '^common/GlobalConfig';
import numberFormats from '^configs/numberFormats';
import INumberFormat from '^types/INumberFormat';

const useNumberFormat = (): INumberFormat => {
  const { locale } = useGlobalConfig();

  return useMemo(
    (): INumberFormat => numberFormats[locale],
    [locale],
  );
};

export default useNumberFormat;
