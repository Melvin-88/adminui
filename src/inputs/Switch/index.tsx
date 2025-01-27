import { FormControlLabel, Switch as BaseSwitch, SwitchProps } from '@material-ui/core';
import React, { ChangeEvent, ReactElement, ReactNode, useCallback, useEffect, useState } from 'react';

import IValidationTargetProps from '^types/IValidationTargetProps';

import BaseFormControl, { IBaseFormControlProps } from '../BaseFormControl';

export interface ISwitchProps extends Pick<SwitchProps, 'color'>, Pick<IBaseFormControlProps, 'classes' | 'defaultValue' | 'className'>, IValidationTargetProps {
  label?: ReactNode;
  value?: boolean;
  onChange?: (checked: boolean) => void;
}

const Switch = ({ color, label, inputRef, onChange, defaultValue, value, ...rest }: ISwitchProps): ReactElement => {
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
      if (value === '' as unknown as ISwitchProps['value']) {
        processChange(false);
      }
    },
    // Define correct default value only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
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
          <BaseSwitch
            checked={isChecked}
            color={color}
            inputRef={inputRef}
            defaultValue={defaultValue}
            onChange={handleChange}
          />
        )}
      />
    </BaseFormControl>
  );
};

export default Switch;
