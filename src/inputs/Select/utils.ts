import IOption from '^types/IOption';

export const valueToOption = <Option extends IOption>(value: string): Option => ({
  value,
  label: value,
} as Option);
