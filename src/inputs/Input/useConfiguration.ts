import IMask, { MaskedNumber } from 'imask';
import { useMemo } from 'react';

import useNumberFormat from '^hooks/useNumberFormat';

const decimalConfiguration: IMask.AnyMaskedOptions = {
  mask: MaskedNumber,
  scale: 2,
  mapToRadix: [','],
};

const integerConfiguration: IMask.AnyMaskedOptions = {
  mask: MaskedNumber,
  scale: 0,
};

const maskConfiguration: Partial<IMask.AnyMaskedOptions> = {
  placeholderChar: '_',
};

const defaultConfiguration: IMask.AnyMaskedOptions = {
  mask: /\.*/,
};

export interface IUseConfigurationOptions {
  type?: 'decimal' | 'integer' | 'text' | 'date' | 'color' | 'datetime-local' | 'email' | 'tel' | 'time' | 'search';
  mask?: IMask.AnyMaskedOptions['mask'];
  customMaskConfig?: IMask.AnyMaskedOptions;
  allowNegative?: boolean;
  scale?: number;
  toUpperCase?: boolean;
  toLowerCase?: boolean;
}

const useConfiguration = ({ type, mask, customMaskConfig, allowNegative, scale, toUpperCase, toLowerCase }: IUseConfigurationOptions): IMask.AnyMaskedOptions => {
  const { thousandsSeparator, radix } = useNumberFormat();

  return useMemo(
    (): IMask.AnyMaskedOptions => {
      let configuration = { ...defaultConfiguration } as IMask.AnyMaskedOptions;

      if (mask) {
        configuration = {
          ...configuration,
          ...maskConfiguration,
          mask,
        } as IMask.AnyMaskedOptions;
      } else if (type === 'integer') {
        configuration = {
          ...configuration,
          ...integerConfiguration,
          thousandsSeparator,
          signed: allowNegative,
        } as IMask.AnyMaskedOptions;
      } else if (type === 'decimal') {
        configuration = {
          ...configuration,
          ...decimalConfiguration,
          thousandsSeparator,
          scale: scale || (decimalConfiguration as IMask.MaskedNumberOptions).scale,
          radix,
          signed: allowNegative,
          padFractionalZeros: true,
        } as IMask.AnyMaskedOptions;
      }

      if (!['integer', 'decimal'].includes(type || '') && (toUpperCase || toLowerCase)) {
        configuration.prepare = (value: string): string => {
          if (toUpperCase) {
            return value.toUpperCase();
          }

          return value.toLowerCase();
        };
      }

      return {
        ...configuration,
        ...customMaskConfig,
      } as IMask.AnyMaskedOptions;
    },
    [mask, type, toUpperCase, toLowerCase, customMaskConfig, thousandsSeparator, allowNegative, radix, scale],
  );
};

export default useConfiguration;
