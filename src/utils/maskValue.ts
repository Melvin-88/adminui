import { createMask, AnyMaskedOptions } from 'imask';

const maskValue = (value: string | null, mask: AnyMaskedOptions['mask']): string => {
  if (!value) {
    return '';
  }

  return createMask({
    mask,
  } as AnyMaskedOptions).resolve(value);
};

export default maskValue;

