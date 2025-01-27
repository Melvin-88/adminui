import React, { ChangeEvent, ReactElement, ReactNode, useCallback } from 'react';
import { RadioGroup as BaseRadioGroup, RadioProps, Typography } from '@material-ui/core';
import classNames from 'classnames';

import BaseFormControl, { IBaseFormControlProps } from '^inputs/BaseFormControl';
import IDisableableOption from '^types/IDisableableOption';
import IValidationTargetProps from '^types/IValidationTargetProps';

import RadioButton from './RadioButton';
import styles from './styles.module.scss';

export interface IRadioGroupProps extends Pick<RadioProps, 'color'>, Pick<IBaseFormControlProps, 'classes' | 'className'>, IValidationTargetProps {
  label?: ReactNode;
  value?: string;
  options: IDisableableOption[];
  onChange?: (value: string) => void;
}

const RadioGroup = ({ className, label, color, value, options, inputRef, onChange, ...rest }: IRadioGroupProps): ReactElement => {
  const handleChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      if (typeof onChange === 'function') {
        onChange(value);
      }
    },
    [onChange],
  );

  return (
    <BaseFormControl
      {...rest}
      className={classNames(styles.radioGroup, className)}
    >
      {label && (
        <Typography
          className={styles.label}
          variant="subtitle2"
        >
          {label}
        </Typography>
      )}

      <BaseRadioGroup
        value={value}
        onChange={handleChange}
      >
        {options.map((option: IDisableableOption, index: number): ReactElement => (
          <RadioButton
            key={option.value}
            color={color}
            inputRef={index === 0 ? inputRef : undefined}
            {...option}
          />
        ))}
      </BaseRadioGroup>
    </BaseFormControl>
  );
};

export default RadioGroup;
