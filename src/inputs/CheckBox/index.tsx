import { FormControlLabel, Checkbox as BaseCheckbox, CheckboxProps } from '@material-ui/core';
import React, { ChangeEvent, ReactElement, ReactNode, useCallback, useEffect, useState } from 'react';

import IValidationTargetProps from '^types/IValidationTargetProps';

import BaseFormControl, { IBaseFormControlProps } from '../BaseFormControl';

export interface ICheckBoxProps extends Pick<CheckboxProps, 'color' | 'indeterminate'>, Pick<IBaseFormControlProps, 'classes' | 'defaultValue' | 'className'>, IValidationTargetProps {
  label?: ReactNode;
  value?: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckBox = ({ color, label, inputRef, onChange, defaultValue, value, indeterminate, ...rest }: ICheckBoxProps): ReactElement => {
  const initialValue = value || defaultValue;
  const [isChecked, setIsChecked] = useState<boolean>(!!initialValue);

  const processChange = useCallback(
    (value: boolean): void => {
      setIsChecked(value);

      if (typeof onChange === 'function') {
        onChange(value);
      }
    },
    [onChange],
  );

  useEffect(
    (): void => {
      if (typeof value === 'boolean') {
        setIsChecked(value);
      }
    },
    [value],
  );

  useEffect(
    (): void => {
      const castedValue = value as unknown as (string | null);
      if (castedValue === '' || castedValue === null) {
        processChange(false);
      }
    },
    // Define correct default value only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const setInputRef = useCallback(
    (instance: HTMLInputElement): void => {
      if (typeof inputRef === 'function') {
        inputRef(instance);
      }
    },
    [inputRef],
  );

  const handleChange = useCallback(
    ({ target: { checked } }: ChangeEvent<HTMLInputElement>): void => (
      processChange(checked)
    ),
    [processChange],
  );

  return (
    <BaseFormControl {...rest}>
      <FormControlLabel
        label={label}
        control={(
          <BaseCheckbox
            checked={isChecked}
            color={color}
            defaultValue={defaultValue}
            onChange={handleChange}
            indeterminate={indeterminate}
            inputRef={setInputRef}
          />
        )}
      />
    </BaseFormControl>
  );
};

export default CheckBox;
