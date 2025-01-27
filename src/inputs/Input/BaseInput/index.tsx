import React, { ReactElement, ComponentType } from 'react';
import { OutlinedTextFieldProps, TextField } from '@material-ui/core';
import { IMaskMixin } from 'react-imask';
import { ReactMaskProps } from 'react-imask/dist/mixin';

type TTextFieldProps = Omit<OutlinedTextFieldProps, 'variant'>;

export interface IBaseInputProps extends Omit<ReactMaskProps, 'unmask' | 'inputRef' | 'ref'>, Omit<TTextFieldProps, 'value'> {
  unmask?: boolean;
}

const BaseInput = IMaskMixin((props: TTextFieldProps): ReactElement => (
  <TextField
    {...props}
  />
)) as ComponentType<IBaseInputProps>;

export default BaseInput;
