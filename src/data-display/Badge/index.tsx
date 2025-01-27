import React, { ReactElement, ReactNode } from 'react';
import { Typography } from '@material-ui/core';
import classNames from 'classnames';

import styles from './styles.module.scss';

export interface IBadgeProps {
  children?: ReactNode;
  value?: ReactNode;
  variant?: 'active' | 'inactive';
  placement?: 'left' | 'right';
  color?: 'primary' | 'secondary' | 'grey' | 'red';
  className?: string;
}

const colorsClassesMap: Record<NonNullable<IBadgeProps['color']>, Record<NonNullable<IBadgeProps['variant']>, string>> = {
  primary: {
    active: styles.primaryActive,
    inactive: styles.primaryInactive,
  },
  secondary: {
    active: styles.secondaryActive,
    inactive: styles.secondaryInactive,
  },
  grey: {
    active: styles.greyActive,
    inactive: styles.greyInactive,
  },
  red: {
    active: styles.redActive,
    inactive: styles.redInactive,
  },
};

const Badge = ({ children, value, variant = 'active', placement = 'right', color = 'primary', className }: IBadgeProps): ReactElement => (
  <div
    className={classNames(
      styles.wrapper,
      {
        [styles.leftPlacement]: placement === 'left',
      },
      className,
    )}
  >
    {!!children && (
      <div className={styles.label}>
        {children}
      </div>
    )}

    <div
      className={classNames(
        styles.badge,
        {
          [styles.hasValue]: typeof value !== 'undefined',
        },
        colorsClassesMap[color][variant],
      )}
    >
      <Typography variant="caption">
        {value}
      </Typography>
    </div>
  </div>
);

export default Badge;
