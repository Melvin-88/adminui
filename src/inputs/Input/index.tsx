import React, {
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
  FocusEvent,
} from 'react';
import {
  CircularProgress,
  InputAdornment,
  OutlinedInputProps,
  InputLabelProps,
} from '@material-ui/core';

import IValidationTargetProps from '^types/IValidationTargetProps';
import { ICON_DEFAULT_SIZE } from '^configs/defaults';

import useConfiguration, { IUseConfigurationOptions } from './useConfiguration';
import BaseInput, { IBaseInputProps } from './BaseInput';

const typeBasedProps: Record<string, OutlinedInputProps['inputProps']> = {
  decimal: {
    inputMode: 'decimal',
  },
  integer: {
    inputMode: 'numeric',
  },
  search: {
    inputMode: 'search',
    enterKeyHint: 'search',
  },
};

export interface IInputProps
  extends IUseConfigurationOptions,
    Pick<
      IBaseInputProps,
      | 'required'
      | 'className'
      | 'classes'
      | 'helperText'
      | 'label'
      | 'multiline'
      | 'color'
      | 'rows'
      | 'size'
      | 'onBlur'
      | 'onFocus'
      | 'onKeyPress'
      | 'minRows'
      | 'maxRows'
      | 'autoComplete'
    >,
    IValidationTargetProps {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  unmask?: boolean;
  charsCounter?: number;
  value?: string | null;
  defaultValue?: string | null;
  loading?: boolean;
  onChange?: (value: string | null) => void;
}

const Input = ({
  type,
  mask,
  color,
  customMaskConfig,
  allowNegative,
  scale,
  toLowerCase,
  toUpperCase,
  startAdornment,
  endAdornment,
  loading,
  error,
  helperText,
  charsCounter,
  unmask = true,
  value,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  disabled,
  ...rest
}: IInputProps): ReactElement => {
  const [internalValue, setInternalValue] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);

  const configuration = useConfiguration({
    type,
    customMaskConfig,
    mask,
    allowNegative,
    toLowerCase,
    toUpperCase,
    scale,
  });

  const computedType = useMemo(
    (): string =>
      !type || ['decimal', 'integer', 'search'].includes(type || '') ? 'text' : type,
    [type],
  );

  const computedValue = useMemo(
    (): string => value?.toString() || defaultValue?.toString() || '',
    [value, defaultValue],
  );

  const inputProps = useMemo(
    (): OutlinedInputProps['inputProps'] => typeBasedProps[type || ''],
    [type],
  );

  const InputProps = useMemo((): IBaseInputProps['InputProps'] => {
    let computedEndAdornment: ReactNode = endAdornment;

    if (loading) {
      computedEndAdornment = (
        <CircularProgress
          color={color}
          size={ICON_DEFAULT_SIZE}
        />
      );
    } else if (charsCounter) {
      computedEndAdornment = `${internalValue.length} / ${charsCounter}`;
    }

    return {
      startAdornment: startAdornment ? (
        <InputAdornment position="start">{startAdornment}</InputAdornment>
      ) : null,
      endAdornment: computedEndAdornment ? (
        <InputAdornment position="end">{computedEndAdornment}</InputAdornment>
      ) : null,
    };
  }, [
    endAdornment,
    loading,
    charsCounter,
    startAdornment,
    color,
    internalValue.length,
  ]);

  const InputLabelProps = useMemo(
    (): Partial<InputLabelProps> => ({
      // We need to control it explicitly, as sometimes, when we set value programmatically material-ui fails to properly render the input's label,
      // which leads to bugs, like this one https://github.com/react-hook-form/react-hook-form/issues/220
      shrink: focused || !!internalValue || !!startAdornment,
    }),
    [focused, internalValue, startAdornment],
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
      if (computedValue === '') {
        processChange(null);
      }
    },
    // Define correct default value only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect((): void => setInternalValue(computedValue), [computedValue]);

  const handleAccept = useCallback(
    (value: string): void => {
      // If setting value programmatically (by updating `value` property)
      // `accept` event from IMaskInput is being triggered, even though no user-triggered event ocurred
      // which might lead to strange forms behavior and useless calls of setInternalValue and onChange

      if (value === internalValue) {
        return;
      }

      setInternalValue(value);

      // Set value to `null` in case if input was cleared
      processChange(value || null);
    },
    [internalValue, processChange],
  );

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLInputElement>): void => {
      setFocused(true);

      if (typeof onFocus === 'function') {
        onFocus(event);
      }
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>): void => {
      setFocused(false);

      if (typeof onBlur === 'function') {
        onBlur(event);
      }
    },
    [onBlur],
  );

  return (
    <BaseInput
      {...rest}
      {...configuration}
      value={internalValue}
      unmask={unmask}
      error={!!error}
      color={color}
      helperText={error || helperText}
      inputProps={inputProps}
      InputProps={InputProps}
      InputLabelProps={InputLabelProps}
      type={computedType}
      onAccept={handleAccept}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled || !!loading}
    />
  );
};

export default Input;
