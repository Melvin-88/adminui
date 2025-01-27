import React, { ChangeEvent, ReactElement, useCallback, useEffect, useMemo } from 'react';
import { SliderProps, Slider as BaseSlider } from '@material-ui/core';

import IValidationTargetProps from '^types/IValidationTargetProps';

export type TSliderType = 'slider' | 'range';
type TValue<Type extends TSliderType> = Type extends 'range' ? number[] : number;

export interface ISliderProps<Type extends TSliderType = TSliderType, Value = TValue<Type>> extends IValidationTargetProps, Pick<SliderProps, 'className' | 'color' | 'marks' | 'orientation' | 'scale' | 'step' | 'track'>, Pick<Required<SliderProps>, 'max' | 'min'> {
  type?: Type;
  value?: Value;
  onChange?: (value: Value) => void;
}

const Slider = <Type extends TSliderType, Value = TValue<Type>>({ error, inputRef, value, min, max, type, onChange, ...rest }: ISliderProps<Type, Value>): ReactElement => {
  const computedValue = useMemo(
    (): number | number[] => {
      if (type === 'range') {
        return Array.isArray(value)
          ? value as number[]
          : [min, max];
      }

      return Number(value || min);
    },
    [min, max, type, value],
  );

  const processChange = useCallback(
    (value: number | number[]): void => {
      if (typeof onChange === 'function') {
        onChange(value as unknown as Value);
      }
    },
    [onChange],
  );

  useEffect(
    (): void => {
      if (typeof value === 'string' && value === '') {
        processChange(computedValue);
      }
    },
    // Define correct default value only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleChange = useCallback(
    (_: ChangeEvent<Record<string, unknown>>, value: number | number[]): void => (
      processChange(value)
    ),
    [processChange],
  );

  return (
    <BaseSlider
      onChange={handleChange}
      value={computedValue}
      min={min}
      max={max}
      {...rest}
    />
  );
};

export default Slider;
