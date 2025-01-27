import React, {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { InputProps, PopoverProps, TextFieldProps } from '@material-ui/core';
import {
  KeyboardDatePickerProps,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { formatISO, isValid } from 'date-fns';

import IValidationTargetProps from '^types/IValidationTargetProps';
import useDateTimeFormat from '^hooks/useDateTimeFormat';

export interface IDatePickerProps
  extends IValidationTargetProps,
    Pick<
      KeyboardDatePickerProps,
      'disableFuture' | 'disablePast' | 'maxDate' | 'minDate'
    >,
    Pick<
      TextFieldProps,
      'required' | 'label' | 'className' | 'helperText' | 'color'
    > {
  value?: string | null;
  onChange?: (value: string | null) => void;
}

const DatePicker = ({
  value,
  error,
  inputRef,
  helperText,
  onChange,
  ...rest
}: IDatePickerProps): ReactElement => {
  const { date } = useDateTimeFormat();

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
        value = formatISO(date, { representation: 'date' });
      }

      processChange(value);
    },
    [processChange],
  );

  return (
    <KeyboardDatePicker
      {...rest}
      variant="inline"
      autoOk
      value={computedValue}
      format={date}
      onChange={handleChange}
      error={!!error}
      helperText={error || helperText}
      InputProps={InputProps}
      PopoverProps={PopoverProps}
    />
  );
};

export default DatePicker;
