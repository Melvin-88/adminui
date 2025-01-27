import { useMemo } from 'react';
import { AnyMaskedOptions } from 'imask';

import maskValue from '^utils/maskValue';

const useMaskedValue = (value: string, mask: AnyMaskedOptions['mask']): string => (
  useMemo(
    (): string => maskValue(value, mask),
    [value, mask],
  )
);

export default useMaskedValue;
