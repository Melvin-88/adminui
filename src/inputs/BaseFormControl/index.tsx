import React, { ReactElement } from 'react';
import { FormControlProps, FormControl, FormHelperText } from '@material-ui/core';

export interface IBaseFormControlProps extends Omit<FormControlProps, 'error'> {
  error?: string;
}

const BaseFormControl = ({ children, error, ...rest }: IBaseFormControlProps): ReactElement => (
  <FormControl
    error={!!error}
    {...rest}
  >
    {children}

    {error && (
      <FormHelperText>
        {error}
      </FormHelperText>
    )}
  </FormControl>
);

export default BaseFormControl;
