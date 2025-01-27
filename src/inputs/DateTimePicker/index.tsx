import React, {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  KeyboardDateTimePickerProps,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';
import { TextFieldProps, PopoverProps, InputProps } from '@material-ui/core';
import { isValid, formatISO } from 'date-fns';

import IValidationTargetProps from '^types/IValidationTargetProps';
import useDateTimeFormat from '^hooks/useDateTimeFormat';

export interface IDateTimePickerProps
  extends IValidationTargetProps,
    Pick<
      KeyboardDateTimePickerProps,
      'disableFuture' | 'disablePast' | 'maxDate' | 'minDate' | 'minutesStep'
    >,
    Pick<
      TextFieldProps,
      'required' | 'label' | 'className' | 'helperText' | 'color'
    > {
  value?: string | null;
  onChange?: (value: string | null) => void;
}

const DateTimePicker = ({
  value,
  error,
  inputRef,
  helperText,
  color = 'primary',
  onChange,
  ...rest
}: IDateTimePickerProps): ReactElement => {
  const { date, time } = useDateTimeFormat();

  const [
    internalInputRef,
    setInternalInputRef,
  ] = useState<HTMLInputElement | null>(null);

  const computedValue = useMemo(
    (): Date | null => (value ? new Date(value) : null),
    [value],
  );

  const PopoverProps = useMemo(
    (): Partial<PopoverProps> => ({
      anchorEl: internalInputRef,
    }),
    [internalInputRef],
  );

  const InputProps = useMemo(
    (): InputProps => ({
      inputRef: (instance: HTMLInputElement | null): void => {
        setInternalInputRef(instance);

        if (typeof inputRef === 'function') {
          inputRef(instance);
        }
      },
    }),
    [inputRef],
  );

  const processChange = useCallback(
    (value: string | null): void => {
      if (typeof onChange === 'function') {
        onChange(value);
      }
    },
    [onChange],
  );

  useEffect(
    (): void => {
      if (value === '') {
        processChange(null);
      }
    },
    // Define correct default value only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleChange = useCallback(
    (date: Date | null): void => {
      // Set value to `null` in case if input was cleared
      let value = date?.toString() || null;

      if (date && isValid(date)) {
        value = formatISO(date);
      }

      processChange(value);
    },
    [processChange],
  );

  return (
    <KeyboardDateTimePicker
      {...rest}
      ampm={false}
      variant="inline"
      autoOk
      hideTabs
      value={computedValue}
      format={`${date} ${time}`}
      onChange={handleChange}
      error={!!error}
      color={color}
      helperText={error || helperText}
      InputProps={InputProps}
      PopoverProps={PopoverProps}
    />
  );
};

export default DateTimePicker;
