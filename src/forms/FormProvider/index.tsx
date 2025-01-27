import React, { useMemo, ReactElement, ReactNode, FormEvent, useCallback } from 'react';
import { useForm, FormProvider as BaseFormProvider, UseFormOptions, FieldValues } from 'react-hook-form';
import classNames from 'classnames';

import styles from './styles.module.scss';
import { IFormProviderContext, Provider } from './context';

export { useFormProviderContext } from './context';

export interface IFormProviderProps<Form extends FieldValues> extends UseFormOptions<Form> {
  disabled?: boolean;
  children: ReactNode;
  className?: string;
  onSubmit: (form: Form) => void;
}

const FormProvider = <Form extends FieldValues>({ className, disabled, children, onSubmit, ...options }: IFormProviderProps<Form>): ReactElement => {
  const methods = useForm<Form>(options);

  const value = useMemo(
    (): IFormProviderContext => ({
      disabled,
    }),
    [disabled],
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.stopPropagation();

      return methods.handleSubmit<Form>(onSubmit as (form: FieldValues) => void)(event);
    },
    [methods, onSubmit],
  );

  return (
    <Provider value={value}>
      <BaseFormProvider {...methods}>
        <form
          className={classNames(styles.form, className)}
          onSubmit={handleSubmit}
          noValidate
        >
          {children}
        </form>
      </BaseFormProvider>
    </Provider>
  );
};

export default FormProvider;
