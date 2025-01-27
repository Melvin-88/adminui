import React, { ReactElement } from 'react';
import { FormControlLabel, FormControlLabelProps, Radio, RadioProps } from '@material-ui/core';

export interface IRadioButtonProps extends Omit<FormControlLabelProps, 'control' | 'color'>, Pick<RadioProps, 'color'> {}

const RadioButton = ({ color, ...rest }: IRadioButtonProps): ReactElement => (
  <FormControlLabel
    {...rest}
    control={(
      <Radio color={color} />
    )}
  />
);

export default RadioButton;
