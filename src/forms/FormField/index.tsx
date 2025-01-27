import React, { ComponentType, ReactElement, useMemo, useRef, useCallback, HTMLProps } from 'react';
import { useFormContext, get, Controller, FieldError, Validate, ControllerProps } from 'react-hook-form';

import { useFormProviderContext } from '^forms/FormProvider';
import IValidationTargetProps from '^types/IValidationTargetProps';

type TRenderFunctionParameters = Parameters<Required<ControllerProps<() => ReactElement>>['render']>[0];
type TRules = ControllerProps<() => ReactElement>['rules'];

export interface IFormFieldProps<P extends IValidationTargetProps> {
  Target: ComponentType<P>;
  defaultValue?: string | number | null | boolean | Array<string | number>
  value?: string | number | null | boolean | Array<string | number>
  name: string;
  validate?: Validate | Record<string, Validate>;
  autoComplete?: HTMLProps<HTMLInputElement>['autoComplete']
}

const FormField = <P extends IValidationTargetProps>({ validate, Target, name, defaultValue, disabled: fieldDisabled, ...rest }: IFormFieldProps<P> & Omit<P, 'defaultValue' | 'value'>): ReactElement => {
  const { errors, control } = useFormContext();
  const { disabled: formDisabled } = useFormProviderContext();
  const disabled = formDisabled || fieldDisabled;

  const internalRef = useRef<HTMLElement | null>(null);

  const error = (get(errors, name) as FieldError)?.message;

  let preparedDefaultValue = get(control.defaultValuesRef.current, name);

  if (typeof control.defaultValuesRef.current[name] === 'undefined') {
    preparedDefaultValue = defaultValue;
  }

  const rules = useMemo(
    (): TRules => ({
      validate,
    }),
    [validate],
  );

  const handleErrorFocus = useCallback(
    (): void => internalRef.current?.focus(),
    [],
  );

  const setInputRef = useCallback(
    (instance: HTMLInputElement): void => {
      internalRef.current = instance;
    },
    [],
  );

  const render = useCallback(
    ({ ref, ...renderProps }: TRenderFunctionParameters): ReactElement => (
      <Target
        {...renderProps}
        {...rest as unknown as P}
        name={name}
        inputRef={setInputRef}
        error={error}
        disabled={disabled}
      />
    ),
    [Target, error, name, rest, disabled, setInputRef],
  );

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      onFocus={handleErrorFocus}
      defaultValue={typeof preparedDefaultValue === 'undefined' ? '' : preparedDefaultValue}
      render={render}
    />
  );
};

export default FormField;
