import merge from 'lodash.merge';
import { useMemo } from 'react';

import { useGlobalConfig } from '^common/GlobalConfig';
import texts from '^configs/texts';
import TTexts from '^types/TTexts';

const useTexts = (): TTexts => {
  const { locale, textOverrides } = useGlobalConfig();

  return useMemo(
    (): TTexts => merge(texts[locale], textOverrides),
    [locale, textOverrides],
  );
};

export default useTexts;
