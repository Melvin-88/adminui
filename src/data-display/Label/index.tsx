import React, { forwardRef, ReactElement, ReactNode, Ref } from 'react';
import classNames from 'classnames';
import { Typography } from '@material-ui/core';

import styles from './styles.module.scss';

export interface ILabelProps {
  color:
    | 'primary'
    | 'yellow'
    | 'grey'
    | 'red'
    | 'green'
    | 'orange'
    | 'violet'
    | 'blue'
    | 'dark';
  label: ReactNode;
  className?: string;
}

const Label = forwardRef(
  (
    { color, className, label, ...rest }: ILabelProps,
    ref: Ref<HTMLDivElement>,
  ): ReactElement => (
    <div
      ref={ref}
      className={classNames(styles.label, styles[color], className)}
      {...rest}
    >
      <Typography variant="caption">{label}</Typography>
    </div>
  ),
);

export default Label;
